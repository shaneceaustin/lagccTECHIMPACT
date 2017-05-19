var circle = 6
circx= 170
circy= 170
circSize= 150
textSize=16;
textAlign(RIGHT);
text("ABCD", 50, 30);
textAlign(CENTER);
text("EFGH", 50, 50);
textAlign(LEFT);
text("IJKL", 50, 70);

function setup() {
  createCanvas(400,400);
  background(22,77,99);
  
}


 
function draw() {
 ellipse( circx, circy,circSize,circSize);
 fill(250,50,50,50);
strokeWeight(9);
 

}