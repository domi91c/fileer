(function() {
    var Publish = {
        files: function(uuid) {
            return Files.find({ uuid: uuid });
        },
        status: function() {
            return Status.find({});
        }
    };

    Meteor.publish("files", Publish.files);
    Meteor.publish("status", Publish.status);
}).call(this);
