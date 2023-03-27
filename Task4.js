function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("cyan");
  translate(200, 200)
  fill("blue")
  noStroke()
  drawShape(160)
}
//Draw star shape
function drawShape(size){
  for(let i = 0; i<30; i++){  //draw loop
    rotate(13)
    triangle(0, 0, size, 0, 0, size)
  }
}
