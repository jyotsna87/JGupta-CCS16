function setup() {
  createCanvas(windowWidth,windowHeight);
  
}

function draw() {

  if (mouseX <150 && mouseX>0 && mouseY <150 && mouseX>0)
  {
 rect(mouseX,mouseY,100,100);
}
else
{
line(mouseX,mouseY,200,200);

} 
  
}