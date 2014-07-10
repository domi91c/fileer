initializing(function() {
    var Ctx = this;

    Planet("home") ({
        helpers: {
            files: function() {
                return Files.find({ uuid: Ctx.uuid });
            }
        },
        events: {
            "click .textinput": function(event) {
                // click url input select all text
                $(event.currentTarget).select();
            }
        }
    });
});
