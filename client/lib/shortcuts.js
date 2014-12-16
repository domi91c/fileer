// Default sessions
Session.setDefault('error', false) ;

ShortCuts = {
    error: function(err) {
        Session.set("error", (err && err.message || false));
    },
};
