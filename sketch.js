var wall, car;
var speed, weight;
var deformation;


function setup() {
  createCanvas(1000,400);

  speed = random(55,90);
  weight = random(500,1400);
  car = createSprite(50,200,50,50);
  wall = createSprite(800, 200, 60, height/2);
  wall.shapeColor = color(80,80,80);

  car.velocityX = speed;  
}


function draw() {
  background(255,255,255);  

  drawSprites();
  if(wall.x-car.x <= wall.width/2+car.width/2){
    car.velocityX = 0;
    deformation =   (0.5*weight*speed*speed)/22500;
    if(deformation < 100){
      car.shapeColor = "green"
    }
     if(deformation > 100 && deformation < 180){
      car.shapeColor = "yellow"
    }
     if(deformation > 180){
      car.shapeColor = "red"
    }
  }
}