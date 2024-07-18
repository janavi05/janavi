function setup() {
  createCanvas(700,480);
  
//R,G&B values
 background(255,204,0);
  
  //take a big brush
  strokeWeight(10);
//dip it in colour purple
  stroke('purple');
  frameRate(10);
}
function draw(){ 
  //declare variables;
 let posX= mouseX;
 let posY= mouseY;
  //place a dot on screen 
  point(posX,posY);
}