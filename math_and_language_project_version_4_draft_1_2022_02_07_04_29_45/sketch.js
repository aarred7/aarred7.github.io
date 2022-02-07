
let x, y;
let color1;
let color2;
let color3;
let source_text = "My favorite part of art is creating it, but what scares me the most is sharing it. I've sat on this project thinking of what to write to it. I'm writing this to realize that the time is coming in which this will be shared with the world. At the right moment this project will be completed, there is no rush. In due time just like these fireworks, that spark in your soul will come. It came to me as I wrote these words, satisfying the completion of my work and now it's release.";



function setup() {
  createCanvas(600, 400);
  background(0);
  frameRate(10);
}

// I created the dots to represent the fireworks. I only kept the dots on the lower half of the screen to show how the fireworks are starting at the bottom. I also wanted the fireworks to be warm colors so I used the random function to show random warm colors which the ones shown are red, pink, magenta, purple. 
function draw() {
  color1 = random (0, 255);
  color2 = 0;
  color3 = random (0, 100);
  x = random (0, 600)
  y = random (225, 400)
  noStroke();
  fill(color1, color2, color3, 100);
  circle(x, y, 12);
  

//  I used the if(mouseIsPressed) function to show the text that I wanted to be displayed. The code starts of by just showing the dots representing the fireworks, and once the mouse is pressed, the text uppers in the upper half of the screen. The dots stop just below the words so you can clearly see the text and the dots beneath the text. 
  if(mouseIsPressed) {
      textFont('Futura');
  textSize(20);
    text(source_text, 5, 10, width*0.99)
    backgroundColor = 'black';
    textColor = 'magenta';
  }
  
}