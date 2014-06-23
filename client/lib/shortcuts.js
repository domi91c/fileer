(function() {
    var root = this;

    root.initializing = function(callback) {
        // initializing arguments callback ctx
        callback.call({
            // context
        }, this);
    };
}).call(this);
