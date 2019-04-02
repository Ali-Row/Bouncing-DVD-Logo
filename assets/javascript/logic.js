// Declare variables
let x;
let y;

let xspeed;
let yspeed;

let dvd;
let color;

// Preload DVD image
function preload() {
  dvd = loadImage("assets/images/DVD_video_logo.png");
}

// Setup the canvas, determin a starting point, set the x, y speed & call the "change_color" function
function setup() {
  createCanvas(800, 600);
  x = 200;
  y = 200;
  xspeed = 3;
  yspeed = 3;
  change_color();
}

// Randomly changes the RGB color of the DVD icon
function change_color() {
  r = random(100, 256);
  g = random(100, 256);
  b = random(100, 256);
}

// Draw the background color & set the DVD icon size
function draw() {
  background(0);
  tint(r, g, b);
  image(dvd, x, y, 130, 80);

  x = x + xspeed;
  y = y + yspeed;

  if (x + 130 >= width) {
    xspeed = -xspeed;
    change_color();
  } else if (x <= 0) {
    xspeed = -xspeed;
    change_color();
  }

  if (y + 80 >= height) {
    yspeed = -yspeed;
    change_color();
  } else if (y <= 0) {
    yspeed = -yspeed;
    change_color();
  }
}
