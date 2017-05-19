var recX= 250
var recY= 250
var recSize=100
var speed = 4


function setup() {
  createCanvas(400,400);
  
}

function draw() {
  background(200,77,18);
  fill( 50,55,75);
  rect(recX, recY,recSize,recSize);
  
  recX = recX+speed;
  
  if (recX > width || recX <100) {
    recSize += 50;
    speed = speed *-4;
  }

  
}