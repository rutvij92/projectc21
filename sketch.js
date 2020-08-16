
var wall,thickness;
var bullet,weight,speed;


function setup() {
  createCanvas(1600,400);

thickness=random(22,83);
speed=random(223,321);
weight=random(30,52);
  bullet=createSprite(50, 200, 50, 30);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255); 
  
  if(hascollided(bullet,wall))
  {
    var damage =0.5*weight*speed*speed/thickness*thickness*thickness;
bullet.velocityX=0;
if(damage>10){
  wall.shapeColor=color(225,0,0);
}

if(damage<10){
  wall.shapeColor=color(0,225,0);
}
  }
  




  drawSprites();
}

function hascollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
  }


















