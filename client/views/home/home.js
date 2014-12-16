initializing(function() {
    var Ctx = this;

    Planet("home") ({
        helpers: {
            files: function() {
                return Files.find({ uuid: Ctx.uuid });
            },
            downloadUrl: function(uuid) {
                var route = Router.path('download', { _uuid: uuid }).replace('/', '');
                return Meteor.absoluteUrl(route);
            }
        },
        events: {
            "click .textInput": function(event) {
                // click url input select all text
                $(event.currentTarget).select();
            }
        }
    });
});
