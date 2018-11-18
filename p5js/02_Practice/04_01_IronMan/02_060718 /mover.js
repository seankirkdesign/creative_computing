class Mover {
  constructor() {
     this.loc = createVector(ballX, ballY);
     this.vel = createVector(0, 0);
     this.acc = createVector(0, 0);
  }

  applyForce(force){
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.vel.mult(.98)
    this.acc.mult(0);

    if (ballY > height || ballY < 0) {
      this.vel.ballY *= -1;
    }

    if (ballX > width || ballX < 0){
      this.vel.ballX *= -1;
    }
  }

  display() {
    ellipse(ballX, ballY, radius * 2);
  }
}
