(function() {
    var Publish = {
        files: function(uuid) {
            return Files.find({ uuid: uuid });
        }    
    };

    Meteor.publish("files", Publish.files);
}).call(this);
