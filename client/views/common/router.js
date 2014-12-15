initializing(function() {
    var Ctx = this, preloadSubscriptions, filters;

    // main subscribes list
    preloadSubscriptions = [];

    Filters = {
        allSubscriptionsReady: function(pause) {
            if (!this.ready()) {
                this.render("loading");
                pause();
            }
        },
        requireLogin: function(pause) {
            if (!Meteor.user()) {
                if (Meteor.loggingIn()) this.render(this.loadingTemplate);
                else this.render('accessDenied');
                pause();
            }
        }
    };

    // configure
    Router.configure({
        layoutTemplate: 'layout',
        loadingTemplate: 'loading',
        notFoundTemplate: 'not_found',
        waitOn: function () {
            return _.map(preloadSubscriptions, function(sub) { 
                Meteor.subscribe(sub);
            });
        }
    });

    // Routes
    Router.map(function() {
        this.route('home', { path: '/', 
            waitOn: function() {
                return Meteor.subscribe('files', Ctx.uuid);
            }
        });
        
        this.route('download', { path: '/download/:_uuid',
            waitOn: function() {
                return Meteor.subscribe('files', this.params._uuid);
            }
        });
    });

    // DDP._allSubscriptionsReady()
    Router.onBeforeAction(Filters.allSubscriptionsReady, { 
        only: [ 'home', 'download', 'status' ]
    });
});
