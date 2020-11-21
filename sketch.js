var wall, bullet;
var speed, weight, damage;
var thickness, bulletRightEdge, wallLeftEdge;


function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200,50, 50);

  speed = random(223, 321);
  weight = random(30, 52);

  wall = createSprite(1200, 200, thickness, height/2);
  
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  thickness = random(22, 83);
  //console.log(damage);

}

function draw() {
  background("black");
  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    damage = (0.5 * weight * speed * speed)/wall.width * wall.width * wall.width;
    if(damage < 10){
      bullet.shapeColor = color(0, 255, 0);
    }
    if(damage > 10){
      bullet.shapeColor = color(255, 0, 0);
      
    }
    
    drawSprites();
  }
}

function hasCollided(lbullet, lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;

  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }


}