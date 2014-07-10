initializing(function(root) {
    Planet("download") ({
        helpers: {
            files: function() {
                return Files.find({});
            }
        },
        events: {}
    });
});
