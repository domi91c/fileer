initializing(function() {
    Planet("index") ({
        helpers: {
            files: function() {
                return Files.find();
            }
        },
        events: {}
    });

    Planet("upload") ({
        helpers: {},
        events: {
            'change #Files': function(event, template) {
                var files = event.target.files;
                _.each(files, function(file) {
                    Files.insert(file);
                });
            }
        }
    });
});
