var ironMan;
var enemy;


function setup() {
  createCanvas(windowWidth, windowHeight);

  ironMan = new IronMan(width/2, height/2, 5, 0,0);
  enemy = new Enemy(500,500,20);

}

function draw() {
  background(204, 0, 0, 50);

  //Iron Man
  ironMan.displayInfo();
  ironMan.mouseClicked();
  ironMan.wallHit();
  ironMan.displayMouse();
  ironMan.displayIM();

  //Enemy
  enemy.displayEnemy();
}


function keyPressed() {
  ironMan.power();
}
