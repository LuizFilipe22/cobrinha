function setup() {
    createCanvas(400,400);
    background("red")
  }
  
  function draw() {
    
    stroke("blue")
    fill("lime")
    
    if (mouseIsPressed) {
    rect(mouseX,mouseY,20,35);
   }
  }