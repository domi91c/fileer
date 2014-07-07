fileer
======

CollectionFS meteor with which to upload and download files.

## Upload files Screenshot

![list](http://fileer.com/cfs/files/files/DKkKp5dh2yHZvB2it/upload.png)

## File list Screenshot

![list](http://fileer.com/cfs/files/files/uy5ae2A44Apv74bbc/list.png)

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
