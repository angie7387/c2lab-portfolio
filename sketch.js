
function setup() {
  let cvn = createCanvas(1536, 2048);
  background("red");
  cvn.position(0,0);
    textSize(14);
  textAlign(CENTER);
    text('GIVE ME HAIR !', 20, 20, 200, 50);
    // Set colors
  fill(255, 0, 0, 255);
  stroke(127, 63, 120);


  
  ellipse(240, 240, 240, 240);
  ellipse(240, 290, 90, 30);

  fill(55, 0, 0, 255);
  rect(240, 240, 40, 120)
  let c = color('white');
  fill(c);
  ellipse(280, 240, 50, 50);
  ellipse(240, 240, 50, 50);

  ellipse(280, 240, 10, 10);
  ellipse(240, 240, 10, 10);

}

function mouseClicked() {

    fill('grey');
    circ(mouseX, mouseY, 100, 100);
}

function draw() {
  if (mouseIsPressed === true) {
    let h = (0, 150);
    let d1 = (0, 150); 
    let d2 = (0, 150);

    fill(h);
    rect(mouseX, mouseY, 100,100, d1, d2);
    // ellipse(mouseX, mouseY, d1, d2);
  }
}

