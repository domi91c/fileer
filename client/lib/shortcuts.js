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

    root.Validate = function(type, val) {
        var Types = {
                email: { 
                    error: "Please enter a valid email address.",
                    re: /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm
                }
            },
            sessionName = "validate_" + type,
            error = Types[type];
        // empty error
        Session.set(sessionName, false);
        if (!error.re.test(val)) { 
            Session.set(sessionName, error.error);
            return false; 
        }
        return true;
    };
}).call(this);
