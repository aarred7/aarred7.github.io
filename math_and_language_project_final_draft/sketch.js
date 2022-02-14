//The Coding Train fireworks video referrence to use basic code for fireworks with my added on text and color. 
//https://www.youtube.com/watch?v=CKeyIbT3vXI&t=191s - coding train video explaining how to code fireworks. 


//setting up an array of fireworks and a gravity variable for the fireworks to show up. 
var fireworks = [];
var gravity;



function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 80);
  gravity = createVector(0, 0.2);
  
  stroke(255, 0, 40);
  strokeWeight(3);
  
}

function draw() {
  
  //colors for sparks. using warm colored sparks with some cool toned sparks. 
  colorMode(RGB, 255)
  
  //details for text
  textFont('Didot');
  textSize(25);
  text("the completion of my work",windowWidth*0.15,windowHeight*0.85);
  background(0, 0, 0, 25);
  
  //code sourced from coding train video about creating the fireworks. 
  if (random(1) < 0.03) {
    fireworks.push(new Firework());
   }
  for (var i = fireworks.length-1; i >= 0; i--) {
     fireworks[i].update();
     fireworks[i].show();
     if (fireworks[i].done()) {
       //fireworks.spilce(i, 1);
     }
    
    //if mouse is pressed function to show the rest of my text in the center of the screen. 
     if(mouseIsPressed) {
      text("and now it's release",windowWidth*0.40,windowHeight*0.5)
     }
  
    
   }
   console.log(fireworks.length);
  
  

  
  
}