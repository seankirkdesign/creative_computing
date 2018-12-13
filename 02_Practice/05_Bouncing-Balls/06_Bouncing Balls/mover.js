class Mover {
  constructor(location) {
     this.loc = location;
     this.vel = createVector(random(-0.5, 0.5), random(-0.5, 0.5));
     this.acc = createVector(0, 0);
     this.gra = createVector(random(-0.001, 0.001), random(-0.001, 0.001));
     this.size = random(40,70);
     this.color = random(70, 255);
  }

  applyForce(force){
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.vel.mult(.98)
    this.acc.mult(0);

    this.vel.add(this.gra);

    if (this.loc.y > height){
      this.loc.y = 0;
    } else if (this.loc.y < 0) {
      this.loc.y = height;
    }

    if (this.loc.x > width){
      this.loc.x = 0;
    } else if ( this.loc.x < 0) {
      this.loc.x = width;
    }

  }

  checkBound() {
    if (this.loc.x > width) {
      this.loc.x = 0;
    } else if (this.loc.x < 0) {
      this.loc.x = width;
    }
    if (this.loc.y > height) {
      this.loc.y = 0;
    } else if(this.loc.y < 0) {
      this.loc.y = height;
    }
  }

  displayLover() {
    //ellipse(this.loc.x, this.loc.y, 30, 30);
    fill(255);
    textSize(20);
    textFont('helvetica');
    text("AH!", this.loc.x, this.loc.y);
  }

  displayHater(){
    fill(230, this.color, 80);
    ellipse(this.loc.x, this.loc.y, this.size, this.size);
  }
}
