

var h=154;
var s=59;
var b=51;

var cirH=76;
var cirS=44;
var cirB=38;
var arrayCircleColor = [];

//increase this number for more steps between colors

function setup() {
  createCanvas(600, 850);
 //drawTest();
}

function draw() 
{
frameRate(0.6);
 	colorMode(HSB,360,100,100);
  h=random(0,360);
  s=random(0,100);
  b=random(0,100);
  
  bcolor1=color(h,s,b);
  bcolor2=color(h%360,(s-34)%100,(b+20)%100);
  bcolor3=color((h-130)%360,(s-47)%100,(b+42)%100);
  bcolor4=color(h%360,(s-26)%100,(b-37)%100);
  //box1
  noStroke();
  fill(bcolor1);
  rect(0,0,width,height/4);
  
  //box2
  noStroke();
  fill(bcolor2);
  rect(0,height/4,width,height/5);
  
  //box3
  noStroke();
  fill(bcolor3);
  rect(0,height/4+height/5,width,height/6);
  
  //box4
  noStroke();
  fill(bcolor4);
  rect(0,height/4+height/5+height/6,width,(height-height/4+height/5+height/6));
  
  var colorMargin = 17;
  
  //cirH=random(h-colorMargin,h+colorMargin);
  //cirS=random(s-colorMargin,s+colorMargin);
  //cirB=random(b-colorMargin,b+colorMargin);
  
  var colorRandomVal = random(-colorMargin,colorMargin)
  cirH=colorRandomVal+h;

  if(abs(floor(colorRandomVal)) <= 3)
  {
    
    cirH=colorMargin+h;
  }
  colorRandomVal = random(-colorMargin,colorMargin)
  cirS=colorRandomVal+s;
  if(abs(floor(colorRandomVal)) <= 3)
  {
    cirS=colorMargin+s;
  }
  colorRandomVal = random(-colorMargin,colorMargin)
  cirB=colorRandomVal+b;
  if(abs(floor(colorRandomVal)) <= 3)
  {
    cirB=colorMargin+b;
  }
  

 var circle1=color(cirH,cirS,cirB);
 var circle2=color((cirH-28)%360,(cirS-10)%100,(cirB+24)%100);
 var circle3=color((cirH+35)%360, (cirS-7)%100,(cirB+19)%100);
 var circle4=color((cirH-20)%360,(cirS+17)%100,(cirB-21)%100);
 var circle5=color((cirH-38)%360,(cirS+14)%100,(cirB+43)%100);
 arrayCircleColor[0] = circle1 
 arrayCircleColor[1] = circle2
 arrayCircleColor[2] = circle3
 arrayCircleColor[3] = circle4
 arrayCircleColor[4] = circle2
 var i=0;
 for(var x=0; x<=width; x+=60){
   i=(i+x+3)%5;
    for(var y=0; y<=height; y+=60){
    noStroke();
    //fill(h+y % 188,s+x % 60,b+y % 32);
    
    fill(arrayCircleColor[floor(random(5))]);
    ellipse(x,y,60,60);
    i++;
    if(i==5)
    {
      i=0;
    }
    
  }
}

}

