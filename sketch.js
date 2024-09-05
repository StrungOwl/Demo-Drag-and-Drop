let circX, circY; // Position of the image
let dragging = false; // Is the circle being dragged?
let offsetX, offsetY; // Mouse offset when dragging

let radius; // Radius of the circle
let circX2, circY2, radius2; // Position and radius of the big circle
let showRectangle = false; // Flag to show the rectangle

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Set initial position of the circle
  circX = height * 0.1;
  circY = width * 0.4;
  radius = (height * 0.1) / 2; // Calculate the radius

  circX2 = width / 2;
  circY2 = height / 2;
  radius2 = (height * 0.1) / 2;
}

function draw() {
  background(0);

  // Draw big circle if rectangle not showing
  if(!showRectangle){
  fill(100);
  circle(circX2, circY2, radius2 * 4);
  // Draw the circle at its current position
  fill(255);
  circle(circX, circY, radius * 2);

  fill(255);
  textAlign(CENTER, CENTER);
  textSize(height*0.03);
  text("Drag white circle \n onto grey circle", width / 1.5, height / 3.5);

  // If dragging, update the position of the image to follow the mouse
  if (dragging) {
    circX = mouseX + offsetX;
    circY = mouseY + offsetY;
  }
  }

  

  // Draw rectangle if the small circle is dropped on the big circle
  if (showRectangle) {
    noStroke();
    rectMode(CENTER);
    fill(180);
    rect(width / 2, height / 2, height*0.2, height*0.2);
    
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(height*0.04);
    text("Click to \n Start Over", width / 2, height / 2);
  }
}

// When mouse is pressed
function mousePressed() {


  if(showRectangle){
    startOver(); 
  } else {
      // Check if the mouse is inside the circle area
  let d = dist(mouseX, mouseY, circX, circY);
  if (d < radius) {
    dragging = true;
    // Calculate the offset to keep the image position relative to where it was clicked
    offsetX = circX - mouseX;
    offsetY = circY - mouseY;
  }
  }
}

// When mouse is released
function mouseReleased() {
  dragging = false;

  // Check if the small circle is dropped on the big circle
  let d = dist(circX, circY, circX2, circY2);
  if (d < radius2 * 2) {
    showRectangle = true;
  } else {
    showRectangle = false;
  }
}

function startOver(){
    circX = height * 0.1;
    circY = width * 0.4;
    showRectangle = false;

}

