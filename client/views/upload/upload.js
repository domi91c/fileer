Template.upload.helpers({});
Template.upload.events({
    'click .upload-trigger': function(event, t) {
        t.find("#Files").click();
    },
    'change #Files': function(event) {
        var fileer = Fileer.findOne();
            fileerId = fileer ? fileer._id : Fileer.insert({});
                
        // Each files insert Files Collection.
        FS.Utility.eachFile(event, function(f) {
            var file = new FS.File(f),
                match = f.name.match(/(.+?)(\.[^.]*$|$)/i);

            // Securing Based on uuid
            file.fileerId = fileerId;
        
            // random filename set math toString characters..
            file.name(Math.random().toString(36).slice(2) + match[2]);

            // insert file to Files collection.
            Files.insert(file, ShortCuts.error);
        });

        // if FileerSubscribed true then subscribe fileer
        if (!Session.get('FileerSubscribed')) {
            Meteor.subscribe('fileer', fileerId, function() {
                Session.get('FileerSubscribed', true);
            });
        }
    }
});
