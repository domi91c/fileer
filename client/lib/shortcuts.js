(function() {
    var root = this,
        uuid = Meteor.uuid();

    root.initializing = function(callback) {
        // initializing arguments callback ctx
        callback.call({
            uuid: uuid,

            // set registerHelpers
            registerHelpers: function(Obj) {
                _.each(Obj, function(fn, prop) {
                    UI.registerHelper(prop, fn.bind(Obj));
                });
            }
        }, this);
    };
}).call(this);
