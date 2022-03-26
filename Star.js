
class Star {
  constructor(loc, radius, gForce) {
    this.gForce = gForce;
    this.loc = loc;
    this.radius = radius;
    boundarySlider = createSlider(2,4,0.01);
    this.boundary = radius;

  }

  show(){
    fill(255);
    ellipse(this.loc.x,this.loc.y,this.radius,this.radius);
    this.boundary = 4*this.radius;
    noFill();
    stroke(255);
    ellipse(this.loc.x,this.loc.y,4*this.radius,4*this.radius);

  }

}
