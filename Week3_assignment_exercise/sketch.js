function setup() {
  createCanvas(windowWidth,windowHeight);
  var r=random(mouseY);  
}

function draw() {
  
 r= random(0,windowWidth);
 if (r >=100) {
 fill(r,r,r,10);  
 }
 else{
   fill(255,0,0,10)//10 is opacity
 }
 rect(100,100,r,r);
  
}