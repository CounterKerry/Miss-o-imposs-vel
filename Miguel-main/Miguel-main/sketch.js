var innocent, innocentRun, innocentJump, innocentDeath;
var delegate, delegateImg;
var assassin, assassinImg;
var ground;
var invisibleGround;

function preload() {
    innocentRun = loadImage("assets/innocentRun.gif");
    innocentJump = loadAnimation("assets/innocentJump.gif");
    innocentDeath = loadImage("assets/innocentDeath.gif");
}

function setup() {
    createCanvas(600, 600);

  innocent = createSprite(50, 560, 20, 30);
  innocent.addAnimation("innocentImg", innocentRun);
  innocent.scale = 2;
  innocent.addAnimation("innocentJumperson", innocentJump);
  
  ground = createSprite(292, 550, 600, 20);

  invisibleGround = createSprite(350, 560, 500, 20);
  invisibleGround.visible = false;
}

function draw() {
    background(51);

    if (keyDown("space")) {
        innocent.velocityY = -7;
        innocent.changeAnimation("innocentJumperson", innocentJump);
    } else if (keyDown("space")) {
        innocent.changeAnimation(innocentImg);
    }

    innocent.velocityY += 0.7;
    innocent.collide(invisibleGround);

    drawSprites();
}

