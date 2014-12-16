(function() {
    var root = this,
        uuid = Meteor.uuid();

    // Default sessions
    Session.setDefault('error', false) ;

    root.initializing = function(callback) {
        // initializing arguments callback ctx
        callback.call({
            uuid: uuid,
            error: function(err) {
                Session.set("error", (err && err.message || false));
            },
            // set registerHelpers
            registerHelpers: function(Obj) {
                _.each(Obj, function(fn, prop) {
                    Template.registerHelper(prop, fn.bind(Obj));
                });
            }
        }, this);
    };
}).call(this);
