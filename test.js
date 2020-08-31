import { Sprite, SpriteMap } from "./sprite.js";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

window.requestAnimFrame = (function (callback) {
  // shim
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();

window.onload = function () {
  // These variables are used for switching animations, just for illustration
  var animNo = 0,
    animNames = [
      "ButtWalk",
      "ButtDown",
      "BodyWalk",
      "BodyWalkDown",
      "BodyAltWalk",
      "BodyDown",
      "Walk",
      "Face",
    ];

  // Initialize the SpriteMap
  const spriteMap = new SpriteMap(
    "centipede-sprite.png", // sprite image
    {
      // animation sequences
      ButtWalk: { startRow: 0, startCol: 0, endRow: 1, endCol: 3 },
      ButtDown: { startRow: 1, startCol: 4, endRow: 1, endCol: 4 },
      BodyWalk: { startRow: 1, startCol: 5, endRow: 2, endCol: 8 },
      BodyWalkDown: { startRow: 3, startCol: 0, endRow: 3, endCol: 0 },
      BodyAltWalk: { startRow: 3, startCol: 1, endRow: 4, endCol: 4 },
      BodyDown: { startRow: 4, startCol: 5, endRow: 4, endCol: 5 },
      Walk: { startRow: 4, startCol: 6, endRow: 6, endCol: 0 },
      Face: { startRow: 6, startCol: 1, endRow: 6, endCol: 1 },
    },
    {
      // options
      frameW: 52, // Width of each frame of the animation in pixels
      frameH: 60, // Height of each frame of the animation in pixels
      projectedW: 104, // Displayed width (in this case 200% size)
      projectedH: 120, // Displayed height (in this case 200% size)
      interval: 50, // Switch frames every 50ms
      useTimer: false, // Rely on requestAnimFrame to update frames instead of setInterval
      postInitCallback: function (sprite) {
        spriteMap.start("ButtWalk"); // Start running the animation
        animate(); // Animate the canvas
        setInterval(function () {
          // Switch animation sequence every 2.5 seconds for illustration
          animNo = (animNo + 1) % animNames.length;
          spriteMap.use(animNames[animNo]); // Switch animation sequences
        }, 2500);
      }, // Do something when the sprite finishes loading
    }
  );

  function animate() {
    // Animation loop that draws the canvas
    context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clear the canvas
    spriteMap.draw(context, 100, 100); // Draw the sprite
    window.requestAnimFrame(animate); // Run the animation loop
  }

  animate();
};
