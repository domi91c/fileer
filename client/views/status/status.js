initializing(function() {
    Planet("status") ({
        rendered: function() {},
        helpers: {
            status: function() {
                return Status.find({ }, { sort: { created_at: -1 } });
            }
        } 
    }); 
});
