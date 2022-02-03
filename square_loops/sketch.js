function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 0, 255);
  noStroke();

  var x = 10;

  while (x < width) {
    fill('red');
    square(x, 50, 55, 20);
    x = x + 80
  }

    for (var x = 10; x < width; x = x + 80) { 
      fill('magenta');
      square(x, 170, 55, 20);
    }
  
    for (var x = 10; x < width; x = x + 80) {
      fill('pink');
      square(x, 300, 55, 20);
    }

}

