initializing(function(root) {
   
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
            'change #Files': function(event, template) {
                FS.Utility.eachFile(event, function(file) {
                    var newFile = new FS.File(file);
                    
                    // Securing Based on uuid
                    newFile.uuid = UUID;

                    // upload
                    Files.insert(newFile);
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
