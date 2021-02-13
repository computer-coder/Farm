const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var log1;
var apple1;
var apple;
var money = 100;
var applep = 20;
var apples = 30;
var stateop = "seed";
var m = money;
var button;
var state = "intro";
var display1;
var water;
var fertilizer;
var pesticides;
var w = 0;

function preload() {
  bg = loadImage("Plants/background.svg");
}

function setup() {
  var canvas = createCanvas(1440, 800);
  engine = Engine.create();
  world = engine.world;
  log1 = new Dirt(1300, 358.5, 150, 150, 205);
  log2 = new Dirt(1164, 294, 150, 150, 205);
  log3 = new Dirt(1435, 420, 150, 150, 205);
  log4 = new Dirt(1300, 358.5, 150, 150, 205);
  log5 = new Dirt(1164, 294, 150, 150, 205);
  log6 = new Dirt(1435, 420, 150, 150, 205);
  log7 = new Dirt(1300, 358.5, 150, 150, 205);
  log8 = new Dirt(1164, 294, 150, 150, 205);
  log9 = new Dirt(1435, 420, 150, 150, 205);
  log10 = new Dirt(1300, 358.5, 150, 150, 205);
  log11 = new Dirt(1164, 294, 150, 150, 205);
  log12 = new Dirt(1435, 420, 150, 150, 205);

  apple1 = new Plant(1300, 358.5, 150, 150, 205);
  apple1.depth = log12.depth + 100;
  apple2 = new Plant(1164, 294, 150, 150, 205);
  apple2.depth = log12.depth + 100;
  apple3 = new Plant(1435, 420, 150, 150, 205);
  apple3.depth = log12.depth + 100;
  apple4 = new Plant(935, 520, 500, 500, 205);
  apple4.depth = log12.depth + 100;
  apple5 = new Plant(835, 520, 500, 500, 205);
  apple5.depth = log12.depth + 100;
  apple6 = new Plant(735, 520, 500, 500, 205);
  apple6.depth = log12.depth + 100;
  apple7 = new Plant(635, 520, 500, 500, 205);
  apple7.depth = log12.depth + 100;
  apple8 = new Plant(535, 520, 500, 500, 205);
  apple8.depth = log12.depth + 100;
  apple9 = new Plant(435, 520, 500, 500, 205);
  apple9.depth = log12.depth + 100;
  main = new Plant(1100, 358.5, 500, 500);
  main.image = loadImage("Plants/logo.png");
  button = createButton("Start");
  button.mousePressed(change);
  button.position(88, 56);
  buttons = createButton("Shop");
  buttons.mousePressed(changes);
  buttonb = createButton("Back");
  buttonb.mousePressed(change);
  buttona = createButton("Apples");
  buttona.mousePressed(mona());
  display1 = new Plant(1300, 358.5, 40, 40, 205);
  display1.image = loadImage("Plants/apple.png");
  title = new Plant(500, 300, 700, 100);
  title.image = loadImage("Plants/name.png");
}

function draw() {
  if (state === "intro") {
    background("white");
    textSize(50);
    button.show();
    buttons.hide();
    buttonb.hide();
    buttona.hide();
    main.display();
    title.display();
  }
  if (state === "play") {
    background(bg);
    Engine.update(engine);

    log1.display();
    log2.display();
    log3.display();
    log4.display();
    log5.display();
    log6.display();
    log7.display();
    log8.display();
    log9.display();
    log10.display();
    log11.display();
    log12.display();
    button.hide();
    buttons.show();
    buttonb.hide();
    buttona.hide();
  }
  if (state == "shopping") {
    background("white");
    display1.display();
    button.hide();
    buttons.hide();
    buttonb.show();
    buttona.show();
  }
}
function mona() {
  if (money >= applep) {
    apple1.display();
    var money1 = money - applep;
    var m = money1;
  }

  if (money1 >= applep) {
    apple2.display();
    var money2 = money1 - applep;
    var m = money2;
  }
  if (money2 >= applep) {
    apple3.display();
    var money3 = money2 - applep;
    var m = money3;
  }
  if (money3 >= applep) {
    apple4.display();
    var money4 = money3 - applep;
    var m = money4;
  }
  if (money4 >= applep) {
    apple5.display();
    var money5 = money4 - applep;
    var m = money5;
  }
  if (money5 >= applep) {
    apple6.display();
    var money6 = money5 - applep;
    var m = money6;
  }
  if (money6 >= applep) {
    apple7.display();
    var money7 = money6 - applep;
    var m = money7;
  }
  if (money7 >= applep) {
    apple8.display();
    var money8 = money7 - applep;
    var m = money8;
  }
  if (money8 >= applep) {
    apple9.display();
    var money9 = money8 - applep;
    var m = money9;
  }
}
function change() {
  state = "play";
}
function changes() {
  state = "shopping";
}
