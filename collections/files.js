(function() {
    var root = this, allows;
  
    // allow contentTypes list. 
    allows = [

        // image 
        'image/*',

        // text
        'text/html', 'text/javascript', 'text/css', 'text/xml', 'text/plain',

        // Applications
        'application/javascript', 'application/json', 'application/pdf', 'application/zip', 'application/x-rar',

        // audio
        'audio/mp4', 'audio/mpeg', 'audio/ogg',

        // video
        'video/avi', 'video/mpeg', 'video/mp4'
    ];

    // too set collections
    root.Files = Files = Images = new FS.Collection("files", {
        stores: [
            new FS.Store.FileSystem("files", { path: "~/uploads" })
        ],
        filter: {
            maxSize: 5242880, // 5mb
            allow: {
                contentTypes: allows
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
