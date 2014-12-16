// Set Cache Control headers so we don't overload our meteor server with http requests
FS.HTTP.setHeadersForGet([
    ['Cache-Control', 'public, max-age=31536000']
]);

// Fileer files group collection
Fileer = new Mongo.Collection('fileer');

// Files collection all file
Files = new FS.Collection("files", {
    stores: [
        new FS.Store.FileSystem("files", { path: "~/uploads" })
    ],
    filter: {
        maxSize: 5242880, // 5mb
        allow: {
            contentTypes: [
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
            ]
        },
        onInvalid: function(message) {
            // client and server error message
        }
    }
});

// Helpers
Fileer.helpers({
    files: function() {
        return Files.find({ fileerId: this._id });
    }
});
