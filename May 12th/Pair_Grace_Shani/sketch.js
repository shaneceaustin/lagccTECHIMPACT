/*
Grace typer, Shani driver
*/

var circX = 200; // creates variable circX
var circY = 200; // creates variable circY
var circSize = 100; // creates variable circSize
var speed = .5 // creates variable speed

function setup() {
  createCanvas(400,400); // sets canvas size to 400 by 400
}

function draw() {
  
  background(255); // sets background color white
  stroke(255); // outline color white
  fill(random (255)); // assigns random color to shape grayscale
  ellipse(circX, circY, circSize, circSize); // creates ellipse according to variable values
  
  circY = circY + speed;  // increases circY variable by speed = .5
  
  if (circY > height || circY < 0){ // if circY is greater than or less than 0 then execute next line
    circSize += 1; // circSize will increase 1 each loop
    
    speed = speed * -1;// speed will will be multiplied by -1
  
  }
}