(function() {
    var root = this, allows;

    //Set Cache Control headers so we don't overload our meteor server with http requests
    FS.HTTP.setHeadersForGet([
        ['Cache-Control', 'public, max-age=31536000']
    ]);

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
    root.Files = new FS.Collection("files", {
        stores: [
            new FS.Store.FileSystem("files", { path: "~/uploads" })
        ],
        filter: {
            maxSize: 5242880, // 5mb
            allow: {
                contentTypes: allows
            },
            onInvalid: function (message) {
                // client and server error message
            }
        }
    });


    // allow
    Files.deny({
        download: function() {
            return false;
        }
    });
}).call(this);
