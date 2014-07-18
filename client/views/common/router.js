initializing(function() {
    var Ctx = this, preloadSubscriptions, filters;

    // main subscribes list
    preloadSubscriptions = [];

    Filters = {
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

        this.route('status', { path: '/status', 
            waitOn: function() {
                return Meteor.subscribe('status');
            }
        });

        this.route('developers', { path: '/developers' });
        this.route('contact',    { path: '/contact' });
    });

    // filters
    Router.onBeforeAction(Filters.requireLogin, { only: [
        // filters
    ]});
});
