var haters;

var circle ={
  x:1,
  xSpeed:40.5,
  y:2,
  ySpeed:14,
};


function setup() {
  createCanvas(windowWidth, windowHeight);

  haters = [];
  for (var i = 0; i < 10; i++){
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

    let overlapping = false;
    for (let other of haters) {
      if (haters[i] !== other && haters[i].intersects(other)) {
        overlapping = true;
      }
    }
    if (overlapping) {
      haters[i].changeColor(255);
    } else {
      haters[i].changeColor(0);
    }
  }
}
