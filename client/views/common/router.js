// configure
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'not_found'
});

// Routes
Router.map(function() {
    this.route('home', { path: '/' });
    
    this.route('download', { path: '/download/:_id',
        waitOn: function() {
            return Meteor.subscribe('fileer', this.params._id);
        }
    });
});
