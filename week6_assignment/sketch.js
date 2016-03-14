
var spacer = 0;
var translateWidth = 0;
var translateHeight = 0;
var commandType = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  translateWidth = width/2;
  translateHeight = height/2;
  background(0);
  colorMode(HSB,360,100,100);
  
}

function draw() {
  if(commandType == 0)
  {
    spiralDesign();
  }
  else if(commandType == 1)
  {
    fireWorksDesign();
  }
   else if(commandType == 2)
  {
    randomBalls();
  }
  
}

function spiralDesign()
{
  
  frameRate(15)
  noStroke();
  //background(255);
  translate(translateWidth,translateHeight);
  rotate(radians((frameCount)%360));
  fill(floor(random(360)),floor(random(100)),floor(random(100)),50);
  for( var i=0; i<10; i++){
    push();
    rotate(TWO_PI*i/10);
    ellipse((spacer) % (width/2),0,10,10);
    pop();
  }
 
  
  spacer=spacer+7;

 
  //frameCountDraw = frameCountDraw+1;
}

function mousePressed(){
  clear();
  
  background(0);
  commandType = 0
  spacer = 0;
  translateWidth = mouseX;
  translateHeight = mouseY;
  
}

function fireWorksDesign()
{
  clear();
  background(0);
  frameRate(10);
  translate(translateWidth,translateHeight);
  rotate(radians((frameCount)%360));
  
  var circle_no = 50;
  
    //translate(30+spacer,30+spacer);
    
    for( var i=0; i<circle_no; i++){
      push();
      //translate(translateWidth+floor(random(10)),translateHeight+floor(random(10)));
      //translate(i*3+spacer,i*3+spacer);
      rotate(TWO_PI*i/circle_no);
      noStroke();
      fill(floor(random(360)),floor(random(100)),floor(random(100)),50);
      ellipse((spacer) % (width/2),0,10,10);
      pop();
      push();
      translate(0,0)
      fill(255);
      
        if((translateWidth+spacer+1) % (width) ==0 || (translateHeight+spacer+1) % (height) ==0)
        {
          text("translateWidth+spacer+1=",translateWidth+spacer+1,200,50)
          text("translateHeight+spacer+1=",translateHeight+spacer+1,200,80)
          spacer = 0;
          pop();
          commandType = 2;
          break;
        }
        if((translateWidth-spacer)==0 || (translateHeight-spacer)==0)
        {
          spacer = 0;
          pop();
          commandType = 2;
          break;
        }
      pop();
      
    }
    
  spacer = spacer + 1;
}

function randomBalls()
{
  
  clear();
  background(0);
  frameRate(10);
  translate(translateWidth,translateHeight);
  scale(1.5);

  var circle_no = 100;
   for( var i=0; i<circle_no; i++){
      push();
      //translate(translateWidth+floor(random(10)),translateHeight+floor(random(10)));
      //translate(i*3+spacer,i*3+spacer);
      rotate(TWO_PI*i/circle_no);
      noStroke();
      fill(floor(random(360)),floor(random(100)),floor(random(100)),50);
      ellipse(floor(random(width)),floor(random(height)),10,10);
      pop();
   }
}

function keyPressed()
{
  clear();
  background(0);
  commandType = 1
  spacer = 0;
}


//END



