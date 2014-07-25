initializing(function() {
    Planet("status") ({
        rendered: function() {},
        helpers: {
            status: function() {
                return Status.find({});
            }
        } 
    }); 
});
