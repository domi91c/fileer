Meteor.publishComposite('fileer', function(fileerId) {
    return {
        find: function() {
            return Fileer.find({ _id: fileerId });
        },
        children: [
            { 
                find: function(fileer) {
                    return Files.find({ fileerId: fileer._id });
                }
            }
        ]
    }
});
