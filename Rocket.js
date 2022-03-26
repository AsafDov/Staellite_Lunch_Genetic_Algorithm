class Rocket {
  static startingLocation;

  constructor(initialVelocity=p5.Vector.random2D().mult(4)) {
    Rocket.startingLocation = createVector(width/2,147);
    this.loc = Rocket.startingLocation.copy();
    this.v0 =  initialVelocity.copy();
    this.vel = initialVelocity.copy();
    this.acc = createVector(0,0);
    this.thrust = 0.5;
    this.thrustTime = 30;

    this.fitness = 0;
    this.alive = true;
  }

  show(){
      // rectMode(CENTER);
      // push();
      // translate(this.loc.x,this.loc.y);
      // rotate(this.vel.heading()+PI/2);
      // rect(0,0,10,30);
      // fill(255);
      // pop();

    fill(30,200,10);
    stroke(0);
    push();
    translate(this.loc.x, this.loc.y);
    rotate(this.vel.heading()+PI/2);
    beginShape();
    vertex(0, -7);
    vertex(-5, 7);
    vertex(5, 7);
    endShape(CLOSE);
    pop();
  }

  applyForce(force){
    this.acc.add(force);
  }

  gravitate(star){
    let dir = p5.Vector.sub(star.loc, this.loc);
    if(dir.mag()<star.radius/2-10 ){//|| dir.mag()>star.boundary/2){
      this.alive = false;
    }
    let gravity = p5.Vector.sub(dir,this.vel).normalize();
    gravity.mult(star.gForce/(dir.mag()*dir.mag()));
    this.acc.add(gravity);
  }

  isAlive(){
    if(this.loc.x > width | this.loc.y>height | this.loc.x*this.loc.y<0){
      this.alive = false;
    }
    if(this.loc.x > width | this.loc.y>height | this.loc.x*this.loc.y<0){
      this.alive = false;
    }
    // console.log(star.loc.x - this.loc.x);
    // if(pow(star.loc.x - this.loc.x,2) + pow(star.loc.y -this.loc.y,2) > 14){
    //   this.alive = false;
    // }
    return this.alive;
  }

  update(){
    // Adding Thrust for a certain amount of time
    // if(this.fitness < this.thrustTime ){
    //   let thrustDir = this.vel.copy().normalize();
    //   thrustDir.mult(this.thrust);
    //   this.acc.add(thrustDir);
    // }
    // // this.acc.limit(2);

    //Updating location and Velocity
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    // this.vel.limit(3);
    // Resetting Forces
    this.acc.mult(0);

    // Update fitness
    this.fitness++;
  }

  mutate(mutationChance){
    if(random()<mutationChance){
      //this.thrustTime = abs(this.thrustTime + randomGaussian(0,1));
      this.v0.add(createVector(randomGaussian(0,0.6),randomGaussian(0,0.6)));
      this.vel = this.v0.copy();
    }
  }


  copy(){
    let toReturn = new Rocket(this.v0)
    // toReturn.thrustTime = this.thrustTime;
    // toReturn.v0 = this.v0.copy();
    // toReturn.vel = this.v0.copy();
    return toReturn;
  }


  reset(){
    this.alive = true;
    this.loc = Rocket.startingLocation.copy();
    this.vel = createVector(0,-1);
    this.acc = createVector(0,0);
    this.fitness = 0;
  }
}
