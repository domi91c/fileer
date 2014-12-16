var Helpers = {
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
        return Helpers.humanFileSize(_.reduce(size_list, function(memo, num) { 
            return memo + num; }, 0)
        );
    }
};

_.each(Helpers, function(fn, name) { Blaze.registerHelper(name, fn); });
