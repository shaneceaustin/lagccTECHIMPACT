// Written by Shani, Driven by Grace
//Code revision by Shani
// The intention for this code was to create a rectangle that progressed speed on the 
// X-axis, that changes colors when the cursor is over it, using the mouse function//


var recX= 250; // assigns X variable
var recY= 250; // assigns Y variable
var recSize=100; // assigns shape size
var speed = 4; // assigns speed of shape

// aforementioned, this section assigns the variables so that the setup and draw functions can 
// can implement into the code. 


function setup() {
  createCanvas(400,400); // establishes the size of canvas
}

function draw() {
  
  background(200,77,18); // defines background color
  fill(mouseX); // allows mouse to react to shape with color
  rect(recX, recY,recSize,recSize); // creates shapes according to variable values
  
  recX= recX + speed; // it increases variable recX speed which = 4
  
  if (recX > width || recX <0) { // if the X is larger than the width or less than 0 , carry out next line of code
    recSize += 50; // increase the rec size by 50 everytime it loops
    speed = speed *-4; // multiplies the speed by -4
  }
