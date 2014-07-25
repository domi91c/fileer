fileer
======

[![Build Status](https://api.travis-ci.com/yasaricli/fileer.svg?token=CddKwqpQ3vn4W2NgNjFz)](https://magnum.travis-ci.com/yasaricli/fileer)

CollectionFS meteor with which to upload and download files.

## Upload files Screenshot

![list](http://fileer.com/cfs/files/files/G3XvYStJLTBbe6fWq/list.jpg)

## File list Screenshot

![list](http://fileer.com/cfs/files/files/JJy5yYodg4Lxb4rif/upload_list.jpg)

## Installation

Install Meteorite packages

```bash
$ mrt add collectionFS
$ mrt add cfs-filesystem
$ mrt add graphicsmagick
$ ./run bundle
$ ./run start
``` 
if system debian then graphicsmagick package install

Add the following line to http or server or location context to increase the size limit in nginx.conf, enter:

    # set client body size to 2M #
    client_max_body_size 5M; 
