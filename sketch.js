var fixedRect, movingRect;
var car , wall;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
 // fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
 // movingRect.debug = true;
  car=createSprite(200,200,40,40);
  wall=createSprite(600,200,10,100);

car.velocityX=2;
  
  car.shapeColor='red';
  wall.shapeColor='blue';

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (istouching(movingRect,wall)){
    textSize(40);
     text('Sanchit',200,200);

  }

  collide(car,wall);

  drawSprites();
}

