// colors and shapes code created by Shani Austin , I noticed with the "background" was moved from the setup function
// and placed into the draw function the color changed. 

function setup() {
 createCanvas(500,500)  // this determines the size of the canvas
background ('rgba(120,66,180,.40)'); // this determines the color of the background

}

function draw() {
 
  
  stroke('rgb(255,0,0)'); // this determines the color of the outline
  fill('rgb( 120,2,199)') // this determines the color inside of the shape
  quad (38,131,186,120,69,63,130,176); // this determines the measurement od the shape and the placement on the canvas
  
  stroke('rgb(0,255,0)') // this determines the color of the outline
  strokeWeight(4) // the determines the thickness of the outlines
  fill ('rgb(134,40,77)') // this determines the color inside of the shape
  ellipse (290,288,270,270); // this determines the color inside of the shape
  
  stroke(51); // this determines the color of the outline
  fill ('rgb(200,0,0)') // this determines the color inside of the shape
  triangle (430,400,470,426,486,375); // this determines the color inside of the shape
}