var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed = random(20,90);
  weight = random(400,1500);
 car =  createSprite(50, 200, 50, 50);
 car.velocityX = speed;
 car.shapeColor="white";
 wall = createSprite (1500,200,60,height/2);
}

function draw() {
  background(0); 
  if (wall.x - car.x< car.width/2 + wall.width/2){
    car.velocityX= 0;
    var deformation = 0.5*weight*speed*speed/2250
    if(deformation > 180){
      car.shapeColor = "red";
    }
    if (deformation >90 && deformation <=180){
      car.shapeColor ="yellow";
    }
    if (deformation <=90){
      car.shapeColor = "lightgreen";
    }
  } 
  drawSprites();
  fill("lightblue");
  textSize(18);
  text("speed : "+speed ,1200,50);
  text("weight : "+weight,1200,100);
  text("deformation : "+deformation,1200,150);
} 