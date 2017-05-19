




var circX=200;
var circY=200;
var circStroke=125;
var circR= 255;
var circB = 5;
var circG= 55;
var circSize= 75;
var recX= 100;
var recY= 300;
var recStroke= 35;
var recCol= 0;
var recSize= 75;
var canvBG;
canvBG= 125,55,255;
var speed= 18;



function setup() {
  createCanvas(400,400);
}

function draw() {
  background(canvBG);
  stroke(circStroke);
  fill(circR,circG,circB);
  stroke(circStroke);
  ellipse(circX, circY, circSize, circSize);
  fill(circR, circG,circB, 135);
  
  circX = circX + speed;
  
  
  
  
  
  
  stroke(recStroke);
  fill(recCol);
  rect(recX, recY, recSize, recSize)
  
  recY= recY - speed;
  
  if(circX > width || circX < 0) {
    
    speed = speed *-1
    
  }
  
  
  
  
  
  
  
  
  
  
}