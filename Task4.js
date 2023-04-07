leaves = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("lightgreen");

  fill("blue");
  noStroke();
  angleMode(DEGREES);
  noLoop();

  leaf_colors = [0, 30, 60];
  

  translate(200, 200);

  for (let j = -250; j <= 400; j += 50) {
    for (let i = -150; i <= 150; i += 100) {
      
      drawShape(0.4, j + 60, i, leaves);
      
    }
    leaves = leaves + 1;
    if(leaves == 4)  leaves = 0;
  }
}

function drawShape(size, x, y, leafs) {
  push();
  translate(x, y);
  scale(size);
  fill("brown");

  rect(0, 0, 20, 100);
  rotate(40);
  rect(-90, 40, 15, 40);
  rotate(-80);
  rect(-20, -50, 15, 80);
  rect(40, -20, 10, 40);
  
  rotate(40)
  fill("green")
  for(let i = 0; i <= leafs; i++){
    if(i==1||i==2){
      ellipse(-30+(i*30), -50, 60)  
    }
    else  ellipse(-30+(i*30), -20, 60)
    
  }

  pop();
}
