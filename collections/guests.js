(function() {
    var root = this;

    // Guests Collection
    root.Guests = new Meteor.Collection("guests");

    // Allows insert, update, remove
    Guests.allow({});
}).call(this);
