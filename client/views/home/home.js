Template.home.helpers({
    fileer: function() {
        return Fileer.findOne();        
    },
    downloadUrl: function(_id) {
        var route = Router.path('download', { _id: _id }).replace('/', '');
        return Meteor.absoluteUrl(route);
    }
});

Template.home.events({
    'click .textInput': function(event) {
        event.currentTarget.select();
    }
});
