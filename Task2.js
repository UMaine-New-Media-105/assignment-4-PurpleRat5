function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
}

function draw() {
  background("cyan");
  translate(200, 200)
  fill("blue")
  noStroke()
  
  
for(let j = -300; j <= 400; j+=90){  
  for(let i = -150; i <=150; i+=100){
    drawShape(0.2, j+i, i, 0)
    drawShape(0.2, j+i+25, i+25, 1)
    drawShape(0.2, j+i+60, i+60, 2)
  }
}
}

function drawShape(size, x, y, type){
  push()
  translate(x, y)
  scale(size)
  if(type==0){
    fill("blue")
  for(let i = 0; i<30; i++){
    rotate(13)
    triangle(0, 0, 60, 0, 0, 60)
  }
  }
  if(type==1){
    fill("yellow")
    for(let i = 0; i<10; i++){
    triangle(0, 10, 30, 30, 0, -10)
    rotate(36)
    
  }
  }
  if(type==2){
    fill("green")
    triangle(-30, -15, 0, 30, 30, -15)
    
  }
  pop()

}
