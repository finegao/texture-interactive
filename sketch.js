var multi = 40;
var ang = 0;
var x1;

function setup() {
  createCanvas(800,800);
  angleMode(DEGREES);
}

function draw() {
  textSize(24);
  text("click, move and scroll",width/2,height/2);
  
  for(var i=1; i<= 20; i++){
    for(var j=1; j<=20; j++){
      
      push(ang);
      var x2 = map(mouseY, 0, height, -80, 0);
      translate(i*40,j*40);
      rotate(ang);
      colorMode(HSB,360,100,100,1);
      fill(x1,100,100);
      stroke(255);
      rectMode(CENTER);
      rect(0,0,80+x2,80+x2);
      pop();
    }
  }
  
}

function mouseWheel(){
  ang = ang + 10;
}

function mouseClicked(){
  x1 = random()*360;
}