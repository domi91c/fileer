initializing(function() {
    var Helpers = {
        console: function() {
            return (arguments);
        },
        randomid: function() {
            return Math.random().toString(36).substring(2, 15) +
                Math.random().toString(36).substring(2, 15);
        },
        absoluteUrl: function() {
            return (location.protocol + "//" + location.host);
        },
        ifThen: function(a, b) {
            return a == b;
        },
        uuid: function() {
            return uuid;
        },
        error_message: function() {
            return Session.get("error_message");
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
            return Helpers.humanFileSize(_.reduce(size_list, function(memo, num) { 
                return memo + num; }, 0)
            );
        }
    };

    // set helpers context
    _.each(Helpers, function(fn, prop) {
        UI.registerHelper(prop, fn);  
    });
});

