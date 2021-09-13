
function setup() {


  createCanvas(400,400);
  background(51);
  box=creatSprite(200,200,30,30)


}

function draw() 
{
if(keyIsDown(UP_ARROW)){
  background("red")

}
if(keyIsDown(LEFT_ARROW)){
  background("Blue")
}
if(keyIsDown(RIGHT_ARROW)){
  background("green")
}
if(keyIsDown(DOWN_ARROW)){
  background("red")
}
  drawSprites()

}




