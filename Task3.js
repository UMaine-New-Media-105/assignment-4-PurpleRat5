function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("lightgreen");
  
  fill("blue")
  noStroke()
  angleMode(DEGREES)
  noLoop()
  
  leaf_colors = [0, 30, 60]
  
  
for(let i = 0; i<=40; i++){
  drawLeaf(random(0, 400), random(0, 400), random(leaf_colors), random(0, 360), random(1.5, 3))
}
  
  
translate(200, 200)
for(let j = -250; j <= 400; j+=90){  
  for(let i = -150; i <=150; i+=100){
    drawShape(0.2, j+i, i, 0)
    drawShape(0.2, j+i+25, i+25, 1)
    drawShape(0.4, j+i+60, i+60, 2)
  }
}
}

function drawShape(size, x, y, type){
  push()
  translate(x, y)
  scale(size)
  if(type==0){
    fill("brown")
    rotate(120)
    rect(0, 0, 20, 300)
    rotate(70)
    rect(200, 50, 15, 150)
    rotate(70)
    rect(0, 200, 15, 100)
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
    rect(-5, -35, 5, 35)
    for(let i = 0; i<3; i++){
      triangle(0, 20, 30, 30, 0, -10)
      rotate(72)

    }
    
  }
  pop()

}

function drawLeaf(x, y, Lcolor, rot, size){
  push()
  translate(x, y)
  rotate(rot)
  scale(size)
  fill("hsla(" + int(Lcolor) + ", 60%, 60%, 0.6)")
  rect(-5, -35, 5, 35)
    for(let i = 0; i<4; i++){
      triangle(0, 20, 30, 30, 0, -10)
      rotate(50)

    }
  
  
  pop()
}
