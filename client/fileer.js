initializing(function(root) {

    Session.setDefault('error_message', false) ;
    root.uuid = UUID = Meteor.uuid();

    Planet("index") ({
        helpers: {
            files: function() {
                return Files.find({ uuid: UUID });
            }
        },
        events: {}
    });

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
                    newFile.uuid = UUID;

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
            }
        }
    });

    Planet("download") ({
        helpers: {
            files: function() {
                return Files.find({});
            }
        },
        events: {
         
        }
    });
});
