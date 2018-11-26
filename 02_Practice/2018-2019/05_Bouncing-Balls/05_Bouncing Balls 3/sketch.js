var haters;


function setup() {
  createCanvas(windowWidth, windowHeight);

  haters = [];
  for (var i = 0; i < 500; i++){
    var hater = new Mover(createVector(width/2, height/2));
    haters.push(hater);
  }

}

function draw() {
  background('#2283FF');
  noCursor();

  for (var i = 0; i < haters.length; i++){
    haters[i].updateHater();
    haters[i].displayHater();
    haters[i].checkBound();
  }
}
