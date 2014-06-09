(function() {
    var root = this;
    
    // too set collections
    root.Files = Files = Images = new FS.Collection("files", {
        stores: [
            new FS.Store.FileSystem("files", { path: "~/uploads" })
        ],
        filter: {
            maxSize: 5242880, // 5mb
            allow: {
                contentTypes: ['image/*']    
            },
            onInvalid: function (message) {
                if (Meteor.isClient) {
                    alert(message);
                }
            }
        }
    });

    // allow
    Files.allow({});
}).call(this);
