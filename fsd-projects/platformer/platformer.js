$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(0, 610, 650, 25, "blue")
    createPlatform(825, 500, 575, 25, "black")
    createPlatform(0, 400, 610, 25, "black")
    createPlatform(730, 265, 550, 25, "red")
    createPlatform(0, 180, 635, 30, "purple")



    // TODO 3 - Create Collectables
    createCollectable("max", 135, 560, 0, 0);
    createCollectable("max", 1165, 215, 0, 0);
    createCollectable("max", 1325, 690, 0, 0)

    
    // TODO 4 - Create Cannons
    createCannon("bottom", 650, 575)
    createCannon("right", 525, 550)
    createCannon("top", 1300, 500)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
