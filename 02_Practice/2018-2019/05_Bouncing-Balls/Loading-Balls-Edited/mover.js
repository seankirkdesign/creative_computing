class Mover {
  constructor(location) {
     this.loc = location;
     this.vel = createVector(random(-0.5, 0.5), random(-0.5, 0.5));
     this.acc = createVector(0, 0);
     this.gra = createVector(random(-0.015, 0.015), random(-0.015, 0.015));
     this.size = 50;
     this.color = random(70, 255);

     this.mx = mouseX;
     this.my = mouseY;

     // this.a = 0;
     // this.aVel = 2;
     // this.aAcc = random(random(-0.005, -0.005), random(0.005, 0.005));
  }

  applyForce(force){
    this.acc.add(force);
  }

  update() {
    // this.a = this.a + 10;
    //
    // this.a += this.aVel;
    // this.aVel += this.aAcc;

    this.loc.add(this.vel);
    this.vel.add(this.acc);
    this.vel.mult(0.98)
    this.acc.mult(0);
    this.vel.add(this.gra);
  }

  checkBound() {
    if (this.loc.x > width) {
      this.loc.x = 0;
    } else if (this.loc.x < 0) {
      this.loc.x = width;
    }

    if (this.loc.y > height) {
      this.loc.y = 0;
    } else if (this.loc.y < 0) {
      this.loc.y = height;
    }

    // if (this.loc.x + this.size/2 > width || this.loc.x - this.size/2 < 0) {
    //   this.vel.x *= -1;
    // }
    //
    // if (this.loc.y + this.size/2 > height || this.loc.y - this.size/2 < 0) {
    //   this.vel.y *= -1;
    // }
  }

  displayLover() {
    noStroke();
    fill(20,50,this.color);
    ellipse(this.loc.x, this.loc.y, this.size);
  }


  displayHater(){
    push();
    fill(this.color, this.color, this.color);
    ellipse(this.loc.x, this.loc.y, this.size);
    translate(this.loc.x, this.loc.y)
    // rotate(this.a);
    pop();

    // imageMode(CENTER);
    // push();
    // translate(this.loc.x, this.loc.y);
    // rotate(this.a);
    // image(loading, 0, 0, 40 * 1.5, 30 * 1.5);
    // pop();


  }
}
