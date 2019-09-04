class Mover {
  constructor(location) {
     this.loc = location;
     this.vel = createVector(random(-0.5, 0.5), random(-0.5, 0.5));
     this.acc = createVector(0, 0);
     this.gra = 0, 20;
     // this.gra = createVector(random(-0.015, 0.015), random(-0.015, 0.015));
     this.size = 50;
     this.color = random(70, 255);

     this.mx = mouseX;
     this.my = mouseY;

     this.a = 0;
     this.aVel = 2;
     this.aAcc = random(random(-0.005, -0.005), random(0.005, 0.005));
  }

  applyForce(force){
    this.acc.add(force);
  }

  update() {
    this.a = this.a + 10;

    this.a += this.aVel;
    this.aVel += this.aAcc;

    this.loc.add(this.vel);
    this.vel.add(this.acc);
    this.vel.mult(0.98)
    this.acc.mult(0);
    this.vel.add(this.gra);
  }

  // spin(){
  //
  // }

  checkBound() {
    // if (this.loc.x > width) {
    //   this.loc.x = 0;
    // } else if (this.loc.x < 0) {
    //   this.loc.x = width;
    // }
    //
    // if (this.loc.y > height) {
    //   this.loc.y = 0;
    // } else if (this.loc.y < 0) {
    //   this.loc.y = height;
    // }

    if (this.loc.x + this.size/2 > width || this.loc.x - this.size/2 < 0) {
      this.vel.x *= -1;
    }

    if (this.loc.y + this.size/2 > height || this.loc.y - this.size/2 < 0) {
      this.vel.y *= -1;
    }
  }

  displayLover() {
    image(cursor, this.loc.x, this.loc.y, 286/5, 429/5);
    noCursor();
    // ellipse(this.loc.x, this.loc.y, this.size + 20);
    // fill(255);
    // textSize(20);
    // textFont('helvetica');
    // text("AH!", this.loc.x, this.loc.y);
  }


  displayHater(){
    // rectMode(CENTER);
    // fill(230, this.color, 80);
    // push();
    // // ellipse(this.loc.x, this.loc.y, this.size, this.size);
    // translate(this.loc.x, this.loc.y)
    // rotate(this.a);
    // rect(0, 0, this.size, this.size);
    // pop();

    imageMode(CENTER);
    push();
    translate(this.loc.x, this.loc.y);
    rotate(this.a);
    image(loading, 0, 0, 40 * 2, 30 * 2);
    pop();


  }
}
