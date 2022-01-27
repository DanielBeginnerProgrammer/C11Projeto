//Variáveis Globais
//VG <game elements>
var runner,runnerImg;
var street,streetImg;

//função preload
function preload(){
  //imagens pré-carregadas
  runnerImg = loadAnimation("Runner-1.png","Runner-2.png");
  streetImg = loadImage("path.png");
}

//função setup
function setup(){
  createCanvas(400,400);
  //FS <elementos do jogo>
  street = createSprite(200,200);
  runner = createSprite(200,360);
  //FS/elementos do jogo<imagem e animação>
  runner.addAnimation("running",runnerImg);
  street.addImage(streetImg);
  //FS/elementos do jogo<config do sprite>
  runner.scale = 0.05;
  street.velocityY = 20;
}

//function draw
function draw() {
//fiz uma outra maneira de fazer o corredor "colidir" com as paredes invisíveis
  runner.x = World.mouseX;
  if (runner.position.x > 300) {
    runner.position.x = 300;
  }
  if (runner.position.x <110) {
    runner.position.x = 110;
  }
  //if statment para fazer o efeito da rua se movimentando 
  if (street.y > 400) {
    street.position.y = street.position.y - 400;
  }
  //cor do plano de fundo
  background("black"); 
  //draw sprites
  drawSprites();
}