class Mover {
  constructor(location) {
     this.loc = location
     this.vel = createVector(0, 0);
     this.acc = createVector(0, 0);
     this.gra = createVector(random(-0.2, 0.2),random(-0.2, 0.2));
     this.size = random(20, 50);
     this.color = random(0, 255);
  }

  applyForce(force){
    this.acc.add(force);
  }

  updateHater() {
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.vel.mult(1);
    this.acc.mult(1);
    this.gra.mult(0.9);
    // Add velocity to the location.
    this.loc.add(this.vel);
    // Add gravity to velocity
    this.vel.add(this.gra);
  }

  checkBound() {
    if (this.loc.x + this.size > width || this.loc.x - this.size < 0) {
      this.vel.x = this.vel.x * -1;
    }

    if (this.loc.y + this.size > height || this.loc.y - this.size < 0) {
      this.vel.y = this.vel.y * -1;
    }
  }

  intersects(other){
    let d = dist(this.x, this.y, other.x, other.y);
    return (d < this.size + other.size);
  }

  changeColor(bright) {
  this.brightness = bright;
  }

  contains(px, py) {
  let d = dist(px, py, this.x, this.y);
  if (d < this.size) {
    return true;
  } else {
    return false;
  }
}

  displayHater(){
    noStroke();
    fill(230, this.color, 120);
    ellipse(this.loc.x, this.loc.y, this.size * 2);
  }
}
