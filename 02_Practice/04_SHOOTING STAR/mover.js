class Mover {
  constructor(location) {
     this.loc = location
     this.vel = createVector(0, 0);
     this.acc = createVector(0, 0);
     this.gra = createVector(0, 0.08);
  }

  applyForce(force){
    this.acc.add(force);
  }

  updateHater() {
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.vel.mult(0.999899);
    this.acc.mult(0);

    // Add velocity to the location.
    this.loc.add(this.vel);
    // Add gravity to velocity
    this.vel.add(this.gra);
  }

  // updateLover() {
  //   this.vel.add(this.acc);
  //   this.loc.add(this.vel);
  //   this.vel.mult(0.98);
  //   this.acc.mult(0);
  // }


  checkBound() {
    if (this.loc.x > width || this.loc.x < 0) {
      this.vel.x = this.vel.x * -1;
    }

    if (this.loc.y > height || this.loc.y < 0) {
      this.vel.y = this.vel.y * -1;
    }
  }

  // displayLover() {
  //   ellipse(this.loc.x, this.loc.y, 20 * 2);
  // }

  displayHater(){
    // strokeWeight(5);
    // stroke(255);
    ellipse(this.loc.x, this.loc.y, 10 * 2);
  }
}
