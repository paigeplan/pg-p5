// based off https://p5js.org/examples/math-sine-wave.html


var xspacing = 16;    // Distance between each horizontal location
var w;                // Width of entire wave
var theta = 0.0;      // Start angle at 0
var amplitude = 75.0; // Height of wave
var period = 500.0;   // How many pixels before the wave repeats
var dx;               // Value for incrementing x
var yvalues;  // Using an array to store height values for the wave
var yvalues2;
var r = random(255);
var g = random(255);
var b = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  resetVals();
}

function windowResized() {
  resetVals();
  resizeCanvas(window.innerWidth, window.innerHeight);
}

function resetVals() {
  w = width+16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w/xspacing));
  yvalues2 = new Array(floor(w/xspacing));
}

function mouseClicked() {
  r = random(255);
  b = random(255);
  g = random(255);
  fill(r, b, g);
}

function draw() {
  // remove to get rid of the "memory" drawing
  //background(0);
  
  if (mouseIsPressed) {
    fill(255, 0, 0);
    amplitude = 75- mouseY;
    period = 500 - mouseX;
    resetVals();
    fill(r, b, g);
  }
  
  else {
    fill(0);
    stroke(255);
  }
  
  calcWave();
  renderWave();
}

function calcWave() {
  // Increment theta (try different values for 
  // 'angular velocity' here)
  theta += 0.02;

  // For every x value, calculate a y value with sine function
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    yvalues2[i] = cos(x)*amplitude;
    x+=dx;
  }
}

function renderWave() {
  // A simple way to draw the wave with an ellipse at each location
  for (var x = 0; x < yvalues.length; x++) {
    rect(x*xspacing, height/2+yvalues[x],15,15);
    
    // changing height of wave
    // rect((x)*xspacing, (mouseY)+yvalues[x],15,15);
    // rect((x)*xspacing, (pmouseY-5)/2+y'values[x],15,15);
    
    rect((x)*xspacing, (height)/2+yvalues2[x],15,15);
  }
}
