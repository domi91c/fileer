// Default sessions
Session.setDefault('error', false) ;

var Utils = {
    Router: {
        Configure: {
            layoutTemplate: 'layout',
            loadingTemplate: 'loading',
            notFoundTemplate: 'not_found'
        },
        map: function() {
            this.route('home', { path: '/' });
            
            this.route('download', { 
                path: '/download/:_id',
                waitOn: function() {
                    return Meteor.subscribe('fileer', this.params._id);
                }
            });
        }
    },
    Helpers: {
        absoluteUrl: function() {
            return (location.protocol + "//" + location.host);
        },
        error: function() {
            return Session.get("error");
        },
        humanFileSize: function(bytes, si) {
            var thresh = 1024, units;
            if(bytes < thresh) return bytes + ' B';
            units = ['KB','MB','GB','TB','PB','EB','ZB','YB'], u = -1;
            do { bytes /= thresh; ++u; } while(bytes >= thresh);
            return bytes.toFixed(1) + ' ' + units[u];
        },
        totalsizes: function(files) {
            var size_list = [], 
                fetch = _.each(files.fetch(), function(f) { 
                    size_list.push(f.original.size); });
            return Utils.Helpers.humanFileSize(_.reduce(size_list, function(memo, num) { 
                return memo + num; }, 0)
            );
        }
    },
    Shortcuts: {
        error: function(err) {
            Session.set("error", (err && err.message || false));
        }
    }
};

// Router
Router.configure(Utils.Router.Configure);
Router.map(Utils.Router.map);

// public shortcuts namespace
Shortcuts = Utils.Shortcuts;

// Blaze helpers register
_.each(Utils.Helpers, function(fn, name) { Blaze.registerHelper(name, fn); });

// StartUp meteor Server
Meteor.startup(function() {
    SEO.config({
        title: 'Fileer - Free file sharing',
        meta: {
            'description': 'You can share your files with your friends and make a list for your own staff as well.'
        },
        og: {
            'image': Meteor.absoluteUrl('logo.png')
        }
    });
});

