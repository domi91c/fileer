initializing(function(root) {
    var _this = this;

    Planet("upload") ({
        helpers: {},
        events: {
            'click .upload-trigger': function(event, t) {
                $("#Files").trigger("click");
            },
            'change #Files': function(event, t) {

                // Each files insert Files Collection.
                FS.Utility.eachFile(event, function(f) {
                    var file = new FS.File(f),
                        match = f.name.match(/(.+?)(\.[^.]*$|$)/i);
                    
                    // Securing Based on uuid
                    file.uuid = _this.uuid;

                    // random filename set math toString characters..
                    file.name(Math.random().toString(36).slice(2) + '.' + match[2]);

                    // insert file to Files collection.
                    Files.insert(file, _this.error);
                });
            },
            'click .remove': function(event, t) { }
        }
    });
});
