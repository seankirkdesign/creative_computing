class BouncingBall {
  constructor(x, y, size, speedX, speedY,color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speedX = random(-5, 5);
    this.speedY = random(-5, 5);
    this.color = color;
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  display() {
    ellipse(this.x, this.y, this.size, this.size);
    noStroke();
    fill(this.color);
  }

  bounce() {
    if (this.x < 0 || this.x > width){
      this.speedX *= -1;
    }
    if (this.y < 0 || this.y > height){
      this.speedY *= -1;
    }
  }

  clicked(){
    let d = dist(mouseX, mouseY, this.x, this.y);
    if (d < this.size){
      console.log("clicked on balls!");
    }
  }

}
