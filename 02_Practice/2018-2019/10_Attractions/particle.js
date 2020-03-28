function Particle (x, y){
  this.pos = createVector(x, y);
  this.vel = createVector();
  this.acc = createVector();

  this.update = function (){
    this.pos.add(this.vel);
    this.vel.add(this.acc);
  }

  this.show = function () {
    stroke(255);
    strokeWeight(4);
    point(this.pos.x, this.pos.y)
  }

  this.attracted = function(target) {
    // var dir = target - this.pos
    var force = p5.Vector.sub(target, this.pos);
    var dsquared = force.mag();
    dsquared = constrain(dsquared, 25, 500);
    var G = 50;
    var strength = G / dsquared;
    force.setMag(strength);
    this.acc = force;
  }

}
