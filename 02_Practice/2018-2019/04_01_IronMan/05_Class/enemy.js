class Enemy {
  constructor(enemyX, enemyY, size) {
    this.x = enemyX;
    this.y = enemyY;
    this.size = size;
  }

//Iron Man Object
  displayEnemy (){
    noStroke();
    fill(0);
    ellipse(this.x, this.y, this.size, this.size);
  }
}
