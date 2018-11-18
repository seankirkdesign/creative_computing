var stars = [];
var angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);



  for (var i = 0; i < 1300; i++){
    stars[i] = new Star();
  }

}


function draw() {
  background(0, 75);


  // push();
  // fill(255);
  // rectMode(CENTER);
  // rect(width/2, height/2, width/3, height/3);
  // pop();

  translate(width/2, height/2);
  for (var i = 0; i < stars.length; i++){
    stars[i].update();
    stars[i].show();
  }

}
