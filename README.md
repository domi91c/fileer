fileer
======

CollectionFS meteor with which to upload and download files.

## Installation

Install Meteorite packages

```bash
$ mrt add collectionFS
$ mrt add cfs-filesystem
$ mrt add graphicsmagick
$ meteor run
``` 
if system debian then graphicsmagick package install

Add the following line to http or server or location context to increase the size limit in nginx.conf, enter:

    # set client body size to 2M #
    client_max_body_size 5M; 
