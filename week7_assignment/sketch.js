
var pointCount1 = 0;
var pointCount2 = 0;
var pointCount3 = 0;
var pointCount4 = 0;
var angle = 0.0;
var a = 180;
var b= 5;
var h = 7;
var rotationSpeed = 0;
var ringNumbers = 1;
var ringcolor1;
var ringcolor2;
var ringcolor3;
var ringcolor4;
function setup() {
    createCanvas(windowWidth,windowHeight);
    colorMode(HSB,360,100,100);
}

function draw() {
  
    frameRate(50);
    clear();
   background(230,100,11.4);
   
   ringcolor1= color(sin( radians ( frameCount ) ) * 230 + 230,23.3,100);
   ringcolor2= color(sin( radians ( frameCount ) ) * 230 + 230,27.8,80); 
   ringcolor3= color(sin( radians ( frameCount ) ) * 230 + 230,40.6,70); 
   ringcolor4= color(sin( radians ( frameCount ) ) * 230 + 230,48.1,50); 

translate(width/2, height/2);
if(rotationSpeed > 908)
{
  rotationSpeed = 0
}
if(ringNumbers==1)
{
  if(pointCount1 > 908)
  {
    pointCount1 = 909
    ringNumbers+=1;
  }
  
  stroke(ringcolor1);
  
 drawRing(pointCount1); 
 pointCount1++;
}

else if(ringNumbers==2)
{
  if(pointCount2 > 908)
  {
    pointCount2 = 909
    ringNumbers+=1;
  }
  stroke(ringcolor1);
 drawRing(pointCount1);
 push();
 scale(0.7);
 stroke(ringcolor2);
 drawRing(pointCount2); 
 pop();
 pointCount2++;
}

else if(ringNumbers==3)
{
  if(pointCount3 > 908)
  {
    pointCount3 = 909
    ringNumbers+=1;
  }
  pointCount1 = 909
  pointCount2 = 909
  stroke(ringcolor1);
  drawRing(pointCount1);
  push();
  scale(0.7);
  stroke(ringcolor2);
  drawRing(pointCount2); 
  pop();
  
  push();
  scale(0.50);
  stroke(ringcolor3);
  drawRing(pointCount3); 
  pop();
  pointCount3++;
}

else if(ringNumbers==4)
{
  
  if(pointCount4 > 908)
  {
    pointCount4 = 909
    ringNumbers+=1;
  }
  pointCount1 = 909
  pointCount2 = 909
  stroke(ringcolor1);
  drawRing(pointCount1);
  push();
  scale(0.7);
  stroke(ringcolor2);
  drawRing(pointCount2); 
  pop();
  
  push();
  scale(0.50);
  stroke(ringcolor3);
  drawRing(pointCount3); 
  pop();
  
  push();
  scale(0.35);
  stroke(	ringcolor4);
  drawRing(pointCount4); 
  pop();
  pointCount4++;
}

else if(ringNumbers==5)
{
  pointCount1 = 909
  pointCount2 = 909
  stroke(ringcolor1);
  drawRing(pointCount1);
  push();
  scale(0.7);
  stroke(ringcolor2);
  drawRing(pointCount2); 
  pop();
  
  push();
  scale(0.50);
  stroke(ringcolor3);
  drawRing(pointCount3); 
  pop();
  
  push();
  scale(0.35);
  stroke(ringcolor4);
  drawRing(pointCount4); 
  pop();
}

rotationSpeed++;
}

function drawRing(pointCount)
{
  noFill()
  rotate(4*rotationSpeed /  TWO_PI);
  strokeWeight(1);
  beginShape();
  var x = 0
  var y =0
  for(var i=0; i < pointCount; i++){
  angle = i /  TWO_PI;
 x = (a+b)*cos(angle)+b*h*cos(((a-b)/b)*angle)
 y = (a+b)*sin(angle)+b*h*sin(((a-b)/b)*angle)

  vertex(x,y);
    
  }
  endShape();
}

