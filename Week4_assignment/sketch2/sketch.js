var rectgreenH = 112;
var rectgreenS = 36;
var rectgreenB = 57;

var rectredH= rectgreenH+239; 
var rectredS= rectgreenS+16  
var rectredB= rectgreenB+6   

function setup() {
  
  

}

function draw()
{
  drawTest();
}
function drawTest() {
  
  
  frameRate(1);
 
  createCanvas(550, 700);

 colorMode(HSB,360,100,100);
 rectgreenH=random(112,351);
 rectgreenS=random(36,52);
 rectgreenB=random(57,63);
  
if(round(rectgreenH)>=140 && round(rectgreenH)<=200)
 {
    rectgreenH =  112
    rectredH= rectgreenH+239;
 }
 else
 {
 rectredH=360-rectgreenH;
 }
 
 rectredS=rectgreenS;
 rectredB=rectgreenB;
 

  noStroke();
  fill(rectgreenH,rectgreenS,rectgreenB);
  rect(0,0,width,height);
  
  for(i=0;i<=width;i+=17){
    noStroke();
    fill(rectredH,rectredS,rectredB);
    rect(i+5,0,random(1,15),height/2);
  }
 
 for(j=0;j<=width;j+=17){
    noStroke();
    fill(rectredH,rectredS,rectredB);
    rect(j-3,height/2,random(1,15),height/2);
  }

  
  var xStart = 20;
  //first half part of hexagon
  var xRandom = random(5);
  var yRandom = random(5);
  var dy = 0
  for(i=xStart;i<=width-width/8-20;i+=45){
    noStroke();
    fill(rectredH,rectredS,rectredB);
    yRandom = random(20,50);
    rect(20+i+xRandom,height/4-dy+random(40),random(10,25),height/4.0+dy);
    //fill green color
    fill(rectgreenH,rectgreenS,rectgreenB);
    rect(40+i+xRandom,height/4-dy,25,height/4.0+dy);
    if(i<=width/2.0-55)
    {
      dy=dy+17
    }
    else if(i>width/2.0-55)
    {
      dy=dy-17
    }
  }
  
  //second half part of hexagon
  xRandom = random(5);
  yRandom = random(5);
  var dy = 0
  for(i=xStart;i<=width-width/8-20;i+=45){
    noStroke();
    fill(rectredH,rectredS,rectredB);
    yRandom = random(20,50);
    rect(0+i+xRandom,height/2,random(10,25),height/4.0-30+dy-random(40));
    //fill green color
    fill(rectgreenH,rectgreenS,rectgreenB);
    rect(20+i+xRandom,height/2,25,height/4.0-30+dy);
    if(i<=width/2.0-55)
    {
      dy=dy+22
    }
    else if(i>width/2.0-55)
    {
      dy=dy-9
    }
  }
 
}

