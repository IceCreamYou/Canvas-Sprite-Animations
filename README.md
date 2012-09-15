Sprite.js is a powerful, easy-to-use Sprite animation library designed for
HTML5 Canvas.

The Sprite class relies on John Resig's JavaScript Inheritance Library. If
you do not want to use this library, removing it as a dependency should be a
straightforward task for an experienced JavaScript programmer.

Few changes would be needed to modify this library to animate sprites in
other mediums like CSS background images, and I will accept patches/pull
requests that support this while preserving Canvas functionality. However,
CSS animations are usually a more appropriate tool:
https://developer.mozilla.org/en-US/docs/CSS/Using_CSS_animations

The centipede-sprite.png image used for the demo is from Atari.

All resources are MIT licensed: http://opensource.org/licenses/mit-license.php

Created by Isaac Sukin (IceCreamYou).


Usage
------

Put the script in your HTML document:

    <script src="sprite.js"></script>

There are several ways to use sprite.js. At its simplest:

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
    context.drawLoadedImage(sprite, 100, 100); // x and y position on canvas

There are many more options you can use for finer-grained control, including
using multiple animation sequences on one sprite sheet. See index.html for a
full example.


API
---

sprite.js is very heavily documented and you should refer to it for a complete
explanation of what all the features do and how to use them. Below is a brief
summary of available functionality.

### Sprites

- **new SpriteMap(src, animations, options)**: Create a new sprite map to
  manage different animation sequences on your sprite sheet.
    - set(name, options): Add an animation sequence to the sprite map.
    - unset(name): Remove an animation sequence from the sprite map.
    - use(name): Set the active animation sequence.
    - start(name): Start animating in a loop.
    - stop(): Stop animating.
    - reset(): Reset the active animation sequence to the first frame.
    - runOnce(callback, name): Run the animation sequence once.
    - draw(ctx, x, y, w, h): Draw the current animation frame.
- **new Sprite(src, options)**: Create a new sprite object. Use this instead of
  SpriteMap if you only have one animation sequence on your sprite sheet or if
  you need more control over how the frames advance.
    - draw(ctx, x, y, w, h): Draw the current animation frame.
    - reset(): Reset the animation sequence to the first frame.
    - changeFrame(delta): Move the animation sequence forward or backward.
    - setFrame(row, col) or setFrame(frame): Move to a specific frame.
    - setLoop(startRow, startCol, endRow, endCol, squeeze): Change the
      animation sequence.
    - startLoop(startRow, startCol, endRow, endCol, squeeze): Start animating
      the animation sequence in a loop.
    - stopLoop(): Stop animating.
    - runLoop(startRow, startCol, endRow, endCol, squeeze): Run the animation
      sequence once.
    - prevFrame(): Go to the previous animation frame.
    - nextFrame(): Go to the next animation frame.
    - getFrame(): Get the current animation frame (row, column, frame number).
    - getNumFrames(): Get the number of frames in the animation sequence.
    - frameNumberToRowCol(frame): Convert a frame number to a row/column pair.

### Drawing

- **context.clear(fillStyle)**: Clear the canvas (useful for animation).
- **context.drawLoadedImage(src, x, y, w, h, finished)**: Draw an image onto
  the canvas, including sprites and spritemaps. Recommended over Sprite.draw()
  and SpriteMap.draw() for consistency (since you can use it with normal images
  too) and recommended over context.draw() for performance (since it loads
  images from the cache if possible).

### Caching

- **preloadImages(files, options)**: Pre-load images into the cache so you
  don't have to deal with a delay to load them from disk later.
- **getImageFromCache(src)**: Retrieve an image from the cache. You can
  override this if you want to use an alternative caching system.
- **saveImageToCache(src, image)**: Save a loaded image into the cache. You can
  override this if you want to use an alternative caching system.
