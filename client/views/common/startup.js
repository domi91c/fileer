Meteor.startup(function() {

    // SEO
    return SEO.config({
        title: 'Fileer - Free file sharing',
        meta: {
            'description': 'You can share your files with your friends and make a list for your own staff as well.'
        },
        og: {
            'image': 'http://fileer.com/cfs/files/files/EiNCc8fi5vjQ3KHgK/logo.png' 
        }
    });
});
