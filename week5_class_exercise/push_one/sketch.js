var mySecondArray=[];   //initializing the data
function setup() {
  createCanvas(500,500);
  colorMode(HSB,360,100,100);
  for(var i=0;i<5; i++) {
    mySecondArray.push(random(12));
  }
  
  print(mySecondArray); //reading or writing to your array
}

function draw() {
  background(0,0,100);
  
  for( var i=0; i<mySecondArray.length;i++){
    fill(0,100,100,0.4);
    rect(width/2, height/2, mySecondArray[i]*10,  mySecondArray[i]*10);
  
}
}

function mousePressed(){
 var _tempArray=mySecondArray.slice(0,2);
 mySecondArray=_tempArray;
  print(mySecondArray);
}