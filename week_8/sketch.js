
var field;
var button;
var counts;
var total;
var allWords = [];
var result;
var nouns = [];
var adjectives = [];
var rs;
var img;
var divText;
function preload() {
  
  img = loadImage("assets/picture9.jpg");
  
  result = loadStrings('assets/TheGreatAsoka.txt');
  
}
function setup() {
  
  
   createCanvas(windowWidth, windowHeight+300)
   
   divText = createDiv("");
   
   var params = {
    ignoreStopWords: true,
    ignoreCase: true,
    ignorePunctuation: true
  };
   counts = RiTa.concordance(result.join(" "),
    params); 
   total = totalValues(counts);

   noStroke();
  
}


function draw() {
  clear();
  frameRate(0.6)
  tint(220,204,179,127);
  image(img, 0, 0, width, height);
  textSize(26);
  
  
  rs = RiString(result.toString().toLowerCase()); //result variable string stored in Rita rs variable
  var randomNounIndex = random(nouns.length);
  
  var randomNoun = nouns[floor(randomNounIndex)];//getting random nouns
 var posNounWord = getWordPositionIndex(randomNoun,result.toString().toLowerCase())//getting postion of that noun in the sentence


  nouns = shuffle(nouns); 
  randomNounIndex = random(nouns.length);
  var randomNounForReplace = nouns[floor(randomNounIndex)];//and now replcaing the same position with a new random noun  
  rs = rs.replaceWord(posNounWord,"<span style='color:maroon;font-size:35px'>"+randomNounForReplace+"</span>")
  newText = rs.text();
  divText.html(newText);
  
  //same with adjective
  
  var randomAdjective = adjectives[floor(random(adjectives.length))];
  var posAdjectiveWord = getWordPositionIndex(randomAdjective,newText.toString().toLowerCase())
  adjectives = shuffle(adjectives);
  var randomAdjectiveForReplace = adjectives[floor(random(adjectives.length))];
  
  rs = rs.replaceWord(posAdjectiveWord,"<span style='color:"+color(101, 67, 33)+";font-size:35px'>"+randomAdjectiveForReplace+"</span>");
  rs = rs.replaceAll("< span", "<span"); //fixing the html tag format
  rs = rs.replaceAll("< /span >", "</span >"); //fixing the html tag format
  newText = rs.text();

  //using div tag for displaying text along with noun in maroon and adjective in dark brown color
  divText.style("color", color(139,69,19));
  divText.html(newText);
  divText.style("font-size", "20px");
  divText.style("font-family", "Helvetica");
  divText.style("margin-right", "50px");
  divText.style("margin-bottom", "250px");
  divText.position(50, 50);
  
  var nounRhyms = getRhymesForWord(randomNounForReplace);
  textSize(20);
  fill('maroon');
  
   text(randomNounForReplace+"(Noun):" ,50,divText.size().height+100,width,height);
   
  textSize(18);
  fill(50);
  text(nounRhyms,50+randomNounForReplace.length*25+25,divText.size().height+105,width-300,height+100);
  
  var adjectiveRhyms = getRhymesForWord(randomAdjectiveForReplace);
  textSize(20);
  fill(101, 67, 33);
  text(randomAdjectiveForReplace+"(Adjective):",50,divText.size().height+145+RiString(nounRhyms).wordCount()*3,width,height);
  
  textSize(18);
  fill(50);
  text(adjectiveRhyms,50+randomAdjectiveForReplace.length*25+40,divText.size().height+145+RiString(nounRhyms).wordCount()*3,width-300,height);
}

//using Rita function to get noun and adjectives

function totalValues(obj) {
  var total = 0;
  for (var k in obj) {
    if (obj.hasOwnProperty(k)) {
      total += obj[k];
      
      
      var tags = RiTa.getPosTags(k);
      
      if (tags[0] == 'nn') {
        nouns.push(k); //storing in noun array
        
      }
      else if (tags[0] == 'jj') {
        adjectives.push(k); //storing in adjective array
      }
    }
  }
  return total;
}

function getWordPositionIndex(randomWord,allWordsString) //get word position from the sentence 
{
  allWords = RiTa.tokenize(allWordsString.toString().toLowerCase()); //splits the sentence into array of words
  if(frameCount%2==0)
  {
  for(var i =0; i<allWords.length;i++) //scans from top to bottom for even frame count 
   {
     var word = allWords[i];
      
     if(RiString(word.toLowerCase()).equals(RiString(randomWord)))
     {
       return i;
     }
    
   }
  }
  else if(frameCount%2==1) 
  {
    for(var i = allWords.length-1; i>0;i--) //scans from bottom to top for odd frame count 
   {
     var word = allWords[i];
      
     if(RiString(word.toLowerCase()).equals(RiString(randomWord)))
     {
       return i;
     }
    
   }
  }
  
}

function getRhymesForWord(word) {
  //background(50);
  var lexicon = new RiLexicon();
  var rhymes = lexicon.rhymes(word);
  if (rhymes.length > 0) {
    return rhymes.join(", ");
  }
  
  return "No rhymes";
  
}

function keyPressed() {
  if (keyCode === RETURN) {
    findRhymes()
  } 
}