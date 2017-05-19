// May 16th by Shànece Austin


var x = 0; // assigning location of x-axis
var y= 200; // assigning location of y-axis
diam=100;// assigning location of center
circStroke= 2;// assigning stroke size
circR=200; // assigning how much red inside the shape
circG=70;// assigning how much green inside the shape
circB=70;// assigning how much blue inside the shape

function setup() {
  createCanvas(400,400)// size of the canvas
}

function draw() {
  background(88, 200, 200);//determines the background color
  stroke(circStroke); // assigned stroke read here
  strokeWeight(3);// 
  fill(circR,circG,circB);
  ellipse(x, y, diam, diam);// x,y,x,y 
  
  x = x + 4; // x-axis = if the x-axis is greater than 0 add 4 which moves the shape to the right 
}