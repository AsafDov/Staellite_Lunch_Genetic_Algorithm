class Population {

  constructor(size) {
      this.allAlive = true;
      this.generation = 0;
      this.population = [];
      this.size = size;
      for(let i=0;i<size;i++){
        append(this.population, new Rocket(p5.Vector.random2D().mult(3)));
      }
  }

  gravitate(star){
    for(let i=0;i<this.population.length;i++){
      this.population[i].gravitate(star);
    }
  }

  update(){
    let deadCount = 0;
    for(let i=0;i<this.population.length;i++){
      let current = this.population[i];
      if(current.isAlive()){
        current.update();
      }
      else{
        deadCount++;
      }
    }
    if(this.population.length == deadCount){
      this.generation++;
      this.repopulate();
    }
  }

  show(){
    for(let i=0;i<this.population.length;i++){
      let current = this.population[i];
      if (current.isAlive()){
        current.show();
      }
    }
  }

  repopulate(){
    this.population.sort((a,b)=>a.fitness<b.fitness ?1:-1);
    // console.log(this.population);
    let newPopulation = [];
    //Do not mutate the best one
    append(newPopulation, this.population[0].copy());
    for(let i=1;i<this.size;i++){
      // this.population[i].reset();
      append(newPopulation, this.population[0].copy());
      // append(newPopulation, this.population[1].copy());
      newPopulation[i].mutate(0.01);
      // newPopulation[i+1].mutate(0.02);
    }
    // console.log(newPopulation);
    newPopulation.splice(this.size);
    this.population = newPopulation;
    // console.log(this.population);
  }

}
