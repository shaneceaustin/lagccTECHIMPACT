var x = 100; // determines the location of the x-axis


function setup() {
  createCanvas(400,400) // determines canvas size
}

function draw() {
  background(88, 200, 200); // determines background color
  stroke(2);// determines stoke size
  strokeWeight(3); // determines stoke thickness
  fill(200,70,70); //determines shapes color
  ellipse(x, 100, 100,100); // shape drawn and location
  

}