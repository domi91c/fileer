(function() {
    var root = this;

    // Contacts Collection
    root.Contacts = new Meteor.Collection("contacts");

    // Allow insert, update, remove
    Contacts.allow({
        insert: function(userId, obj) {
            if (obj.uuid) return true;
        }
    });
}).call(this);
