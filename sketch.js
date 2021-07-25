var level = 0;
var gameState = "Intro"
var button1,button2,button3,button4,button5,subject;
var classroom,math,english,law,social,science;
var geometry,algebra,numbertheory,arithmatic,equations;
var rock,animal,silicon,stringtheory,medical;
var con,tax,inheritence,divorce,ammendment;
var pre,classic,middle,early,modern
var describe,grammer,explit,persuade,narrate
var bg;
function preload(){
 classroom = loadImage("background.png")
  math=loadImage("math.jpg")
  english=loadImage("english.jpg")
  social=loadImage("history.jpg")
  law=loadImage("law.jpg")
  science=loadImage("science.jpg")
  geometry = loadImage("geo.jpg")
  algebra = loadImage("al.jpg")
  numbertheory = loadImage("12.jpg")
  arithmatic = loadImage("11.jpg")
  equations = loadImage("Quad.jpg")
  rock=loadImage("earth.jpg")
  animal=loadImage("bio.jpg")
  silicon=loadImage("chem.jpg")
  stringtheory=loadImage("physics.jpg")
  medical=loadImage("health.jpg");
  con = loadImage("usa.png")
  tax = loadImage("tax.jpg")
  inheritence = loadImage("inheritence.jpg")
  divorce = loadImage("divorce.jpg")
  ammendment = loadImage("ammendment.jpg")
  pre = loadImage("pre.jpg")
  classic = loadImage("classic.jpg")
  middle = loadImage("middle.png")
  early = loadImage("early.jpg")
  modern = loadImage("modern.webp")
  describe = loadImage("describe.jpg")
  grammer = loadImage("grammer.jpg")
  explit = loadImage("expit.png")
  persuade = loadImage("persuade.jpg")
  narrate = loadImage("narrate.jpg")
}
function setup(){
  createCanvas(windowWidth,windowHeight)
  bg = createSprite(0,0,windowWidth*5,windowHeight*5)
  bg.addImage(classroom)
   bg.scale = 11
  bg.visible = false; 
  subject = createGroup()
  button1 = createSprite(windowWidth/3,0,windowWidth,windowHeight/5);
  button2 = createSprite(windowWidth/3,windowHeight/5+25,windowWidth,windowHeight/5)
  button3 = createSprite(windowWidth/3,windowHeight/5*2,windowWidth,windowHeight/5)
  button4 = createSprite(windowWidth/3,windowHeight/5*3,windowWidth,windowHeight/5)
  button5 = createSprite(windowWidth/3,windowHeight/5*4,windowWidth,windowHeight/5)
  subject.add(button1)
  subject.add(button2)
  subject.add(button3)
  subject.add(button4)
  subject.add(button5)
  subject.setVisibleEach(false);
}
function draw(){
  if(level===0){
  background(0)
  fill("green")
  textSize(20)
 text("AnyDreams",windowWidth/2-100,windowHeight/4);
 text("press Space to continue",windowHeight/2+200,windowHeight/3)
 if(keyDown("space")){
  level = 1
}
  }
  if(level===1){
    bg.visible = true;
    subject.setVisibleEach(true);
    button1.addImage(social); 
    button2.addImage(english);
    button2.scale = 0.5;
    button3.addImage(science);
    button4.addImage(math);
    button5.addImage(law);
    if(mousePressedOver(button1)){
      level = 2;
    }
    if(mousePressedOver(button2)){
      level = 3;
    }
    if(mousePressedOver(button3)){
      level = 4;
    }
    if(mousePressedOver(button4)){
      level = 5;
    }
    if(mousePressedOver(button5)){
      level = 6;
    }
  }
  if(level===2){
    bg.visible = true;
    subject.setVisibleEach(true);
    button1.addImage(pre)
    button1.scale = 0.1
    button2.addImage(classic)
    button2.scale = 0.5
    button3.addImage(middle)
    button3.scale = 0.5;
    button4.addImage(early)
    button4.scale = 0.7
    button5.addImage(modern)
    button5.scale = 0.2;
    if(mousePressedOver(button1)){
      level = 7;
    }
    if(mousePressedOver(button2)){
      level = 8;
    }
    if(mousePressedOver(button3)){
      level = 9;
    }
    if(mousePressedOver(button4)){
      level = 10;
    }
    if(mousePressedOver(button5)){
      level = 11;
    }
  }
  if(level===3){
    bg.visible = true;
    subject.setVisibleEach(true);
    button1.addImage(describe)
    button1.scale = 0.5
    button1.y = 80
    button2.addImage(grammer)
    button2.scale = 0.2
    button3.addImage(explit)
    button3.scale = 0.2;
    button4.addImage(narrate)
    button4.scale = 0.2
    button5.addImage(persuade)
    button5.scale = 0.4;
    if(mousePressedOver(button1)){
      level = 12;
    }
    if(mousePressedOver(button2)){
      level = 13;
    }
    if(mousePressedOver(button3)){
      level = 14;
    }
    if(mousePressedOver(button4)){
      level = 15;
    }
    if(mousePressedOver(button5)){
      level = 16;
    }
  }
  if(level===4){
    bg.visible = true;
    subject.setVisibleEach(true);
    button1.addImage(animal)
    button2.addImage(rock)
    button2.scale = 0.2
    button3.addImage(silicon)
    button3.scale = 0.3;
    button4.addImage(stringtheory)
    button4.scale = 0.7
    button5.addImage(medical)
    button5.scale = 0.2;
    if(mousePressedOver(button1)){
      level = 17;
    }
    if(mousePressedOver(button2)){
      level = 18;
    }
    if(mousePressedOver(button3)){
      level = 19;
    }
    if(mousePressedOver(button4)){
      level = 20;
    }
    if(mousePressedOver(button5)){
      level = 21;
    }
    }
  if(level===5){
    bg.visible = true;
    subject.setVisibleEach(true);
    button1.addImage(geometry);
    button1.scale = 0.1
    button2.addImage(algebra);
    button3.addImage(numbertheory);
    button3.scale = 0.3
    button4.addImage(arithmatic);
    button4.scale = 0.3
    button5.addImage(equations);
    button5.scale = 0.5
    if(mousePressedOver(button1)){
      level = 22;
    }
    if(mousePressedOver(button2)){
      level = 23;
    }
    if(mousePressedOver(button3)){
      level = 24;
    }
    if(mousePressedOver(button4)){
      level = 25;
    }
    if(mousePressedOver(button5)){
      level = 26;
    }
  }
  if(level===6){
    bg.visible = true;
    subject.setVisibleEach(true);
    button1.addImage(con)
    button1.scale = 0.2;
    button2.addImage(tax)
    button2.scale = 0.2
    button3.addImage(inheritence)
    button3.scale = 0.2;
    button4.addImage(divorce)
    button4.scale = 0.4
    button5.addImage(ammendment)
    button5.scale = 0.3
    if(mousePressedOver(button1)){
      level = 27;
    }
    if(mousePressedOver(button2)){
      level = 28;
    }
    if(mousePressedOver(button3)){
      level = 29;
    }
    if(mousePressedOver(button4)){
      level = 30;
    }
    if(mousePressedOver(button5)&&level===6){
      level = 31;
    }
  }
  if(level===30){
    bg.visible = false;
    subject.setVisibleEach(false);
    background(0)
    textSize(20)
    text("First Ammendment",windowWidth/3,25)
    textSize(10)
    text("The First Amendment guarantees freedoms concerning religion, expression, assembly, and the right to petition.",windowWidth/3,windowHeight/5+25)
    text("It doesn’t allow Congress from both allow one religion over another and also imposes limits on an individual’s religious practices.",windowWidth/3,windowHeight/5*2)
    text("It guarantees freedom of expression by prohibiting Congress from restricting the press or the rights of individuals to use their freedom of speech.",windowWidth/3,windowHeight/5*3)
    text("It also guarantees the right of citizens to assemble peaceably and to petition their government.",windowWidth/3,windowHeight/5*4)
  }
  drawSprites();
  console.log(level);
}