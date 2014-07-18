(function() {
    var root = this;

    root.Status = new Meteor.Collection("status");

    Status.allow({
        insert: function(userId) { return !!userId; },
        update: function(userId) { return !!userId; },
        remove: function(userId) { return !!userId; }
    });
}).call(this);
