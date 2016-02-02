function setup() {
  createCanvas(windowWidth, windowHeight);
  drawShape()
}

function drawShape()
{
  stroke(62,211,93);
  strokeWeight(3)
  var x1=0
  var y1=0
  var xt=0
  var yt=0
  var x2=0
  var y2=700
  
  print(yt)
  var tLength=5
  var start=0
  for(i=0;i<500*10;i=i+10)
  {
    yt=random(y2)
    if(yt>=y2-10)
    {
      yt=random(y2)
    }
    line(start+i,0, start+i,yt)
    line(start+i,yt, start+i+tLength,yt+tLength)
    line(start+i+tLength,yt+tLength, start+i,yt+2*tLength)
    line(start+i,yt+2*tLength, start+i,y2)
  }
 
}
function draw() {

}