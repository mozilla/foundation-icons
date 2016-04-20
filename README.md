#Mozmaker Theme Icon Font

Hello and welcome, this is an early prototype of an icon font for the Mozilla Foundation's [Mozmaker Bootstrap theme](https://github.com/mozilla/mozmaker).

Check out the [Demo Page](http://flukeout.github.io/mozmaker-icon-font/index.html) to see all of the icons and usage instructions.


##Usage

For now, include both files in the ``assets`` folder in your project:

* ``mozmaker-icons.css``
* ``mozmaker-icons.woff``

Then, include the stylesheet in your HTML page...

* ``<link rel="stylesheet" href="mozmaker-icons.css" type="text/css">``
* Ensure the reference font file in the style sheet are correct.

To use an individual icon, add a class with that icon name to an element, it will get inserted in front of the copy...

* ``<span class="icon-bookmark"> This is a bookmark<span/>``

Here's the [list of avilable icons](http://flukeout.github.io/mozmaker-icon-font/index.html).

##How is it made?

I used [https://glyphter.com/](https://glyphter.com/) to create this test version. Let's figure out the best tooling, maybe we can just set up a shared account on Glyphter and see how that goes.
