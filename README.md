# Note:

This package/repo is a fork of Isaac Sukin's original code.  I (jjayeon) will attempt to maintain it, but detailed questions about how it operates should be directed to Isaac Sukin (IceCreamYou on GitHub and npm).

To use this package with npm, enter:

    npm install @jjy/canvas-sprite-animations
	
Or the equivalent in Yarn, of course.

To use, import as so:

    import { Sprite, SpriteMap } from "@jjy/canvas-sprite-animations":
	
And use Sprite and SpriteMap as constructors.  I recommend using Webpack + the file-loader plugin for managing images, which I have done in src/test.js (in the GitHub repo).

# Original:

Sprite.js is a powerful, easy-to-use Sprite animation library for HTML5 Canvas.

Two classes are provided:

 - **SpriteMap**: Manages multiple animation sequences in a sprite sheet.
 - **Sprite**: Handles a single animation sequence.

You can
[read the full documentation](http://icecreamyou.github.com/Canvas-Sprite-Animations/docs/)
for a complete explanation of every available method.


Usage
------

Put the script in your HTML document:

```html
<script src="sprite.min.js"></script>
```

There are several ways to use sprite.js. At its simplest:

```javascript
// Create the sprite.
var sprite = new Sprite('sprite.png', {
  frameW: 60,
  frameH: 60,
  postInitCallback: function() { // Runs when the sprite is ready.
    // Start animating.
    sprite.startLoop();
  },
});

// Draw the sprite. You should do this every time you repaint the canvas.
// Frames update automatically.
// var context = document.getElementById('canvas').getContext('2d');
sprite.draw(context, 100, 100); // x and y position on canvas
```

There are many more options you can use for finer-grained control, including
using multiple animation sequences on one sprite sheet. See index.html for a
full example of using a SpriteMap or
[read the full documentation](http://icecreamyou.github.com/Canvas-Sprite-Animations/docs/).


Caching
-------

Sprite images are cached by default. If you would like to use an alternative
caching system, you can override several static methods:

 - **Sprite.preloadImages(files, options)**: Pre-load images into the cache so
   you don't have to deal with a delay to load them from disk later.
 - **Sprite.getImageFromCache(src)**: Retrieve an image from the cache.
 - **Sprite.saveImageToCache(src, image)**: Save a loaded image into the cache.


License/Credits
---------------

Created by [Isaac Sukin](http://www.isaacsukin.com/) (IceCreamYou).

The centipede-sprite.png image used for the
[demo](http://icecreamyou.github.com/Canvas-Sprite-Animations/) is from Atari.

All resources are MIT licensed: http://opensource.org/licenses/mit-license.php
