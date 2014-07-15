initializing(function(root) {
    var Ctx = this;

    Planet("upload") ({
        helpers: {},
        events: {
            'click .upload-trigger': function() {
                $("#Files").trigger("click");
            },
            'change #Files': function(event, template) {
                FS.Utility.eachFile(event, function(file) {
                    var newFile = new FS.File(file);
                    
                    // Securing Based on uuid
                    newFile.uuid = Ctx.uuid;

                    // upload
                    Files.insert(newFile, function(err, fileObj) {
                        if (err) {

                            // error_message set
                            Session.set("error_message", err.message);
                            return;
                        }

                        // error_message false
                        Session.set("error_message", false);
                    });
                });
            },
            'click .remove': function(event, template) { }
        }
    });
});
