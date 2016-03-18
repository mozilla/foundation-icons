#Mozmaker Theme Icon Font

Hello and welcome, this is an early prototype of an icon font for the Mozilla Foundation's [Mozmaker Bootstrap theme](https://github.com/mozilla/mozmaker).

Check out the [Demo Page](http://flukeout.github.io/mozmaker-icon-font/index.html) to see all of the icons and usage instructions.


##Usage

For now, download and include the following in your project...

* ``mozmaker-icons.css`` from the CSS folder
* The ``fonts`` folder

Then, include the stylesheet in your HTML page...

*  ``<link rel="stylesheet" href="css/mozmaker-icons.css" type="text/css">``
* Make sure the references to the Fonts folder in this file are correct, they will change depending on where you put the CSS file.

To use an individual icon, add a class with that icon name to an element, it will get inserted in front of the copy...

* ``<span class="icon-bookmark"> This is a bookmark<span/>``

##How is it made?

I used [https://glyphter.com/](https://glyphter.com/) to create this test version. Let's figure out the best tooling, maybe we can just set up a shared account on Glyphter and see how that goes.
