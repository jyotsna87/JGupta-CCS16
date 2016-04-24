
var popupMessage = "";
function setup() {

  createCanvas(windowWidth,windowHeight);
  createGraph();
  //showCSVData();
}

var table;
  var startX;
  
function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable("data/facebook_data.csv", "csv", "header");
}


function showCSVData()
{
  var rows = table.getRows();

 
 //print the results
 for (var r = 0; r < table.getRowCount(); r++)
   for (var c = 0; c < table.getColumnCount(); c++)
     print(table.getString(r, c));
}
function createGraph()
{
  
  colorMode(HSB);
  
  var div= createDiv("<a target =_blank href='data/facebook_data.csv' style ='color:white'>CSV link</a>")
  div.position(100,300);
  
  var margin=10;
  var size=18;
   startX=width/2.0-5*(size+margin)/2.0;
  var startY=20;
  var i=0,j=0;
  var hoursText = table.getColumn(0);
  var daysText = ["Mon","Tue","Wed","Thu","Fri"];
  for(var x=0;x<5*(size+margin);x+=(size+margin)){
    hoursText = table.getColumn(i);
    if(j==0)
      {
        noStroke();
        fill(0);
        textSize(10);
        
        text(daysText[i],startX+x,startY-15,50.0,50.0);
      }
    var dayHoursData = table.getColumn(i+1);
    for(var y=0;y<24*(size+margin); y+=(size+margin)){
      if(i==0)
      {
        //print(hoursText);
        fill(0);
        textSize(10);
        text(hoursText[j],startX+x-60.0,startY+y,50.0,50.0);
      }
      
       //fill(221, sin( radians (dayHoursData[j] ) )*55+20, cos( radians (dayHoursData[j] ))*62+38,100 );
      var colorVal = color(221, sin( radians (dayHoursData[j] ) )*55+20, cos( radians (dayHoursData[j] ))*62+38,100 );
      /*
     var myP = createP('Time  spent:'+hoursText[j]).size(size,size);
     myP.position(x+startX,y+startY);
     myP.mouseOver(showMessage);
    // myP.style("display","none");
     myP.style("color","white");
     */
     var myP = createDiv(dayHoursData[j]).size(size,size);
     myP.position(x+startX,y+startY);
     myP.mouseOver(showMessage);
     myP.innerHTML = dayHoursData[j];
    // myP.style("display","none");
    
    myP.style('background-color',colorVal);
    myP.style("color",colorVal);
     
     
    
      //rect(x+startX,y+startY,size,size);   
   j++;
    }
    j=0;
   i++; 
  }
  
  popupMessage = createDiv("").size(100,30);
  popupMessage.attribute("id", "popupDiv");
  popupMessage.style("color","black");
  popupMessage.style("border-style","solid")
  popupMessage.style("border-width","1px");
  popupMessage.style("padding-left","5px");
  popupMessage.style("padding-right","5px");
  popupMessage.style("padding-top","5px");
  popupMessage.style("padding-bottom","5px");
  
  popupMessage.style("background-color","white");
  popupMessage.style("font-size","13px");
  popupMessage.style("z-index","10");
  
}

function showMessage()
{
  //var myImg = document.getElementById("myImageID");
 // print("hi"+this);
  //this.innerHTML = "hi therex x   x x x x  x x  x !";
  
  
  popupMessage.position(0,0);
  popupMessage.innerText = "Time Spent:"+this.innerHTML;
  this.child(popupMessage);
   var popupDiv = document.getElementById("popupDiv");
   popupDiv.innerHTML = "Time Spent:"+this.innerHTML+"mins";
  
  /*
  fill(255);
  textSize(20);
  ellipse(650,300,200,100);  
  fill(0);
  text(textBox.value().toString(),610,260,100,100);
  */
}
function draw() {
  fill(221,55,62);
  rect(0,0,startX-100,height);
  fill(0,0,100);
  textSize(20);
  text("TIME SPENT ON FACEBOOK",50,100,250,50);
  fill(221,20,100);
  textSize(15);
  text("A Data-Visualization of my time spent on Facebook.This is a 5 day analog data visualization project.And here's is the link to the data.", 50,200,200,400);
  
}