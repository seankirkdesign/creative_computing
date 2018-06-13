var ironMan;
var enemy;


function setup() {
  createCanvas(windowWidth, windowHeight);

  ironMan = new IronMan();
  enemy = new Enemy(500,500,20);

}

function draw() {
  background(51, 149, 255, 30);

  //Iron Man
  ironMan.turn();
  ironMan.update();
  ironMan.edges();
  ironMan.displayInfo();
  ironMan.mouseClicked();
  ironMan.render();

  //Enemy
  enemy.displayEnemy();
}

function keyReleased() {
  ironMan.setRotation(0);
  ironMan.boosting(false);
}

function keyPressed() {
  if(keyCode == '68') {
    ironMan.setRotation(0.1);
  } else if (keyCode == '65') {
    ironMan.setRotation(-0.1);
  } else if (keyCode == '87') {
    ironMan.boosting(true);
  }
}
