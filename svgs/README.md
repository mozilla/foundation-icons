#Mozmaker Theme Icon Font

Hello and welcome, this is an early prototype of an icon font for the Mozilla Foundation's [Mozmaker Bootstrap theme](https://github.com/mozilla/mozmaker).

Check out the [Demo Page](http://flukeout.github.io/mozmaker-icon-font/index.html).

##Available Icons

Ready for this? So far we've got...

####Bookmark

![](svgs/resource-bookmark.svg)
Usage: ``class="icon-bookmark"``

##Usage

For now, download and include the following in your project...

* ``mozmaker-icons.css`` from the CSS folder
* The ``fonts`` folder

Then, include the stylesheet in your HTML page...

*  ``<link rel="stylesheet" href="css/mozmaker-icons.css" type="text/css">``

To use an individual icon, add a class with that icon name to an element, it will get inserted in front of the copy...

* ``<span class="icon-bookmark"> This is a bookmark<span/>``

##How is it made?

I used [https://glyphter.com/](https://glyphter.com/) to create this test version. We'll want to find a tool that all of us can use and contribute to, however.
