
let star;
let rocket;
let rockets;
let skipGens;
let slider;
let boundarySlider;

function setup() {
  createCanvas(800,500);
  let starLocation = createVector(width/2,height/2);
  star = new Star(starLocation, 100, 500);

  rocket = new Rocket();
  rockets = new Population(300);

  slider = createSlider(1,200,1);

  skipGens = 1000;
}

function draw() {

  // if(slider.value() < 5){
  //   console.log("Generation: " + rockets.generation );
  // }
  // rockets.gravitate(star);
  // rockets.update();
  //
   // while(rockets.generation%skipGens != 0){
   //   rockets.gravitate(star);
   //   rockets.update();
   // }
   for(let n=0; n<slider.value();n++){
     rockets.gravitate(star);
     rockets.update();
   }

   background(0);
   rockets.show();
   star.show();
   textSize(32);
   fill(255);
   text("Generation: " + rockets.generation, 10,50);

}

function skipGeneration(numberOfGenrations){
  while(rockets.generation%numberOfGenrations != 0){
    rockets.gravitate(star);
    rockets.update();
  }
}

// function(){
//
// }
