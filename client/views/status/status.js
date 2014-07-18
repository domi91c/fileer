initializing(function() {
    Planet("status") ({
        helpers: {
            status: function() {
                return Status.find({});
            }
        } 
    }); 
});
