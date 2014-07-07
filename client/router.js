// Router
initializing(function() {
    var preloadSubscriptions, filters;

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
                Meteor.subscribe(sub, uuid);
            });
        }
    });

    // Routes
    Router.map(function() {
        this.route('index', { path: '/', 
            waitOn: function() {
                return Meteor.subscribe('files', uuid);
            }
        });
        this.route('download', { path: '/download/:_uuid',
            waitOn: function() {
                return Meteor.subscribe('files', this.params._uuid);
            }
        });
    });

    // filters
    Router.onBeforeAction(Filters.requireLogin, { only: [
        // filters
    ]});
});
