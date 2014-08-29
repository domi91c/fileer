initializing(function() {
    var self = this;

    Planet("contact") ({
        helpers: {
            error: function() {
                return Session.get("error");
            },
            success: function() {
                return Session.get("success");
            }
        },
        events: {
            "submit #ContactForm": function(event, t) {
                event.preventDefault();
                var email = t.find("#id_email").value,
                    name = t.find("#id_name").value,
                    message = t.find("#id_message").value;
                if (Validate("email", email) && name && message) {
                    Contacts.insert({
                        message: message,
                        uuid: self.uuid, // allow Contacts collection
                        email: email,
                        name: name
                    });
                    Session.set("error", false);
                    Session.set("success", {
                        email: email
                    });
                } else {
                    Session.set("error", "Please fill in the required fields.");
                }
            }
        }
    }); 
});
