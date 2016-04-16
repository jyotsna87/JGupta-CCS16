var speedSlider;
var textBox;

function setup() {
  var myCanvas = createCanvas(800,1000); 
  noStroke();
  initialSetup();
 
var headingDiv = createDiv("Let's play with the SHEEP!!");

headingDiv.position(70,100);

var title = createDiv("Change the speed of the sheep.");

title.position(550,200);

 speedSlider=createSlider(1, 100, 4);
 
 speedSlider.position(550,230);
 
 var colorPickerDiv = createDiv('Change the color of the sheep.<br/><br/>');
  var textboxColorPicker = document.getElementById('divColorPicker');
  colorPickerDiv.position(550,260);
  colorPickerDiv.child(textboxColorPicker);
  
  var title2 = createDiv("Make the sheep talk.");
 title2.position(550,370);
  
   textBox = createInput("");
   textBox.position(550,400);
  
 
}
var moveCount=0;
var translateDx=-200;

function initialSetup()
{
  
  noStroke();
  //fill(137,232,148);
  //rect(0,400 ,width,height/2)
  noStroke();
  //fill(205, 255, 255);
  //rect(0,0,width,400)
  
}
function createSun()
{

  noStroke();
  fill(255,255,0);
  ellipse(700,70,120,120);
  

}
function draw(){
  
  
  
  var speedSliderVal = speedSlider.value();
  
  var elt = document.getElementById('basic');

  clear();

  push();
  translate(50,150)
  scale(0.6);
  frameRate(speedSliderVal);
  noStroke();
  fill(137,232,148);
  rect(0,400 ,width,height/2)
  noStroke();
  fill(205, 255, 255);
  rect(0,0,width,400)
  createSun();
  
  
  translate(translateDx,0)
  
  angleMode(DEGREES); // Change the mode to DEGREES
  var angle = 0;
  var x = 280; 
  var y = 382;
  var translateX=0;
  var translateY=0;
  if(moveCount%2==0)
  {
    translateX = 0;
    translateY = 0;
    angle= 0;
  }
  else
  {
    angle = 10;
    translateX = 70;
    translateY = -50;
  }
  
  scale(0.9);
  rightleg(angle,translateX,translateY);
  righthand(-angle,-translateX,-translateY);//-10,-70,50
  fluffybody();
  var angleHead = 0;
  var translateHeadX=0;
  var translateHeadY=0;
  if(moveCount%2==0)
  {
    translateHeadX = 0;
    translateHeadY = 0;
    angleHead= 0;
  }
  else
  {
    angleHead = 2;
    translateHeadX = 7;
    translateHeadY = -5;
  }
  sheephead(angleHead,translateHeadX,translateHeadY); //eye ear are inside sheephead functiom

  leftleg(angle,translateX,translateY);//10,70,-50
  
  lefthand(-angle,-translateX,-translateY); //-10,-70,50
  
  moveCount++;
  translateDx += 10;
  if(moveCount == 3)
  {
    moveCount = 0;
  }
  if(translateDx>260)
  {
    translateDx =-200;
    
    initialSetup();
  }
  
  
  pop();
}

function rightleg(angle,translateX,translateY){
  push();
  
 rotate(angle);
 translate(translateX+60,translateY);
  stroke(35,33,34);
  strokeWeight(3);
  fill(51,45,47);
  beginShape();
  vertex(240,372);
  bezierVertex(233,405,230,485,235,485);
  bezierVertex(265,462,260,418,256,373);
  endShape();
  pop();
  
  }
  
  function righthand(angle,translateX,translateY){
    push();
  rotate(angle);
  translate(translateX+60,translateY);
 
  stroke(35,33,34);
  strokeWeight(3);
  fill(51,45,47);
  beginShape();
  vertex(320,382);
  bezierVertex(313,415,310,495,315,495);
  bezierVertex(345,492,340,428,336,383);
  endShape();
  pop()
  }
  
 
  
  

function fluffybody(){
  push();
  translate(170,110);
  //translate(translateX,translateY);
  stroke(0);
  strokeWeight(2);
  var textboxColorPicker = document.getElementById("colorCode");
  
  var c = color(textboxColorPicker.innerText);
  
  //fill(242,233,216);
  fill(c)
  beginShape();
  vertex(330,140);
  bezierVertex(275,89,245,102,235,79);
  bezierVertex(219,91,198,71,168,90);
  bezierVertex(148,71,126,92,95,83);
  bezierVertex(76,109,54,136,65,171);
  bezierVertex(42,202,53,239,52,271);
  bezierVertex(70,280,79,302,121,304);
  bezierVertex(130,324,162,322,189,334);
  bezierVertex(222,322,258,332,270,306);
  bezierVertex(295,298,301,270,321,256);
  endShape();
  pop();
}



function sheephead(angle,translateX,translateY){
  push();
    

 if (!RiString(textBox.value().toString()).equals("") && translateDx < 180 ) {
  fill(255);
  textSize(20);
  ellipse(650,300,200,100);  
  fill(0);
  text(textBox.value().toString(),610,260,100,100);
 }
 
  
  rotate(angle);
  translate(translateX+60,translateY);
 
  
  //translate(110,110);
  stroke(35,33,34);
  strokeWeight(4);
  fill(48,44,45);
  beginShape();
  var moveX= 110, moveY = 110;
  vertex(320+moveX,107+moveY);
  bezierVertex(280+moveX,160+moveY,273+moveX,217+moveY,312+moveX,256+moveY);
  bezierVertex(347+moveX,252+moveY,377+moveX,208+moveY,365+moveX,160+moveY);
  bezierVertex(340+moveX,116+moveY,318+moveX,108+moveY,320+moveX,107+moveY);
  endShape();
  
  leftear();
  rightear();
  lefteye();
  righteye();
  
  
  pop();
  
  
}

 function leftear(){
  push();
  translate(110,110);
  fill(0);
  beginShape();
  vertex(298,135);
  bezierVertex(258,153,234,190,228,219);
  bezierVertex(246,210,269,178,298,135);
  endShape();
  pop();
}

function rightear(){
  push();
  translate(110,110);
  fill(0);
  beginShape();
  vertex(356,141);
  bezierVertex(375,139,402,168,416,213);
  bezierVertex(389,189,366,156,345,129);
  endShape();
  pop();
}
  


function lefteye() {
  push();
  translate(110,110);
  stroke(35,33,34);
  strokeWeight(2);
  fill(251,251,239);
  ellipse(312,135,40,35);
  noStroke();
  fill(0);
  ellipse(318,140,6,6);
  pop();
  
}
  
  function righteye() {
  push();
  translate(110,110);
  stroke(35,33,34);
  strokeWeight(2);
  fill(251,251,239);
  ellipse(341,146,25,20);
  noStroke();
  fill(0);
  ellipse(337,145,6,6);
  pop();
  }
  
  function leftleg(angle,translateX,translateY){
    push();
    
  rotate(angle);
  translate(translateX+60,translateY);
 
  translate(0,0);
  stroke(35,33,34);
  strokeWeight(3);
  fill(51,45,47);
  beginShape();
  vertex(203,372);
  bezierVertex(195,405,193,485,199,485);
  bezierVertex(228,462,222,418,219,373);
  endShape();
  pop();
  }
  
   function lefthand(angle,translateX,translateY){
   //lefthand1()
  push();
  angleMode(DEGREES); // Change the mode to DEGREES
  
  
  rotate(angle);
  translate(translateX+60,translateY);
  
  stroke(35,33,34);
  strokeWeight(3);
  fill(51,45,47);
  
  beginShape();
  var x = 280; 
  var y = 382;
  vertex(x,y);
  bezierVertex(273,415,270,495,275,495);
  bezierVertex(305,472,300,428,296,383);
   
  endShape();
  
  noFill();
  pop();


  
  }
  
  
  function lefthand1(){
  push();
  //translate(0,0);
  stroke(35,33,34);
  strokeWeight(3);
  fill(51,45,47);
  beginShape();
  vertex(280,382);
  bezierVertex(273,415,270,495,275,495);
  bezierVertex(305,472,300,428,296,383);
  
  
  endShape();
  
  pop();
  }
 


  
  