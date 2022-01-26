function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (mouseIsPressed){
    var col = color(255-mouseY*(255/400), 0, mouseY*(255/400))
    fill(col);
    stroke(col);
    stroke(mouseX,90,0);
    stroke(mouseY, 0,90);
  
  } else {

    var col = color(255-mouseX*(255/400), 0, mouseX*(255/400))
    fill(col);
    stroke(mouseX,90,0);
    stroke(mouseY,0,90);
  }
  ellipse(mouseX, mouseY, 75, 75);  
  
}