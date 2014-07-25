(function() {
    /*
    * The preview of the user is performed. For normal 
    * entry and exit and follow the browser to track users 
    * hemisphere.
    */
    Meteor.onConnection(function(conn) { 

        // FinfOne Guest 
        var guest = Guests.findOne({ id: conn.id });

        // if guest not defined then insert 
        if (!guest) Guests.insert(conn);

        /* 
        * When the user closes the browser is the 
        * operating function for the deletion of Visitors.
        */
        conn.onClose(function() {

            // if guest found then removed.
            Guests.remove({ id: conn.id });
        });

        /*
        * deleted if the user to any situation they encounter 
        * sessions check and let's delete users who are not in session. 
        */
        Guests.find().forEach(function(guest) {
            var session = Meteor.server.sessions[guest.id];
            if (!session) Guests.remove(guest);
        });
    });
}).call(this);
