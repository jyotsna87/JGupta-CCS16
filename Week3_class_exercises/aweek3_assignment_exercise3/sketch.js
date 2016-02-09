function setup() {
createCanvas(windowWidth,windowHeight);

}

function draw() {
  background(230,45,100);
  
  for (var i=0; i<20; i++) {
    
    for(var y=0;y<20;y++) {
    
    fill(255);
    stroke(230,45,50);
    strokeWeight(2);
    rect(i*50,y*50,10,10);
  }
  
}
}