var sun = {
  x1:50,
  y1:50,
  diam:70,
  speed:2,
  display: function(){
    fill(255,195,0);
    strokeWeight(1);
    ellipse(this.x1,this.y1,this.diam);
    
  },
  move:function(){
    this.x1 = this.x1 +this.speed;
    
  }
}

function setup() {
    createCanvas(400, 400);
   
}

function draw() {
   background(0,255,255);
  sun.move();
sun.display();

fill (241,223,168)
rect (0,350,400,400)
  
}