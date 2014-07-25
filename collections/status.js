(function() {
    var root = this;

    // Status Collection
    root.Status = new Meteor.Collection("status");

    // Allow insert, update, remove
    Status.allow({});
}).call(this);
