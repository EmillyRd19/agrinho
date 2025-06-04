let farmers = [];

function setup() {
  createCanvas(800, 400);
  
  // Criar alguns agricultores
  for (let i = 0; i < 5; i++) {
    farmers.push(new Farmer(50, 100 + i * 50));
  }
}

function draw() {
  background(200, 240, 255);
  
  drawField();
  drawCity();
  drawBoundary();
  
  for (let farmer of farmers) {
    farmer.update();
    farmer.display();
  }
}

function drawField() {
  // Céu e solo
  fill(100, 200, 100);
  noStroke();
  rect(0, height/2, width/2, height/2);

  // Trigo
  for (let i = 20; i < width/2; i += 20) {
    drawWheat(i, 300);
  }
}

function drawCity() {
  // Solo urbano
  fill(180);
  rect(width/2, height/2, width/2, height/2);
  
  // Prédios
  fill(100);
  for (let i = width/2 + 20; i < width; i += 60) {
    let h = random(80, 150);
    rect(i, height/2 - h, 40, h);
  }
}

function drawBoundary() {
  stroke(0);
  strokeWeight(2);
  line(width/2, 0, width/2, height);
}

function drawWheat(x, y) {
  stroke(218, 165, 32);
  strokeWeight(2);
  line(x, y, x, y - 20);
  noStroke();
  fill(255, 215, 0);
  ellipse(x, y - 25, 5, 10);
}

class Farmer {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = random(0.5, 1.5);
  }

  update() {
    if (this.x < width - 30) {
      this.x += this.speed;
    } else {
      this.x = 0; // Recomeça a travessia
    }
  }

  display() {
    fill(150, 75, 0);
    ellipse(this.x, this.y, 20, 20); // Cabeça
    rect(this.x - 5, this.y + 10, 10, 20); // Corpo
    fill(0);
    rect(this.x - 10, this.y + 30, 5, 10); // Perna esquerda
    rect(this.x + 5, this.y + 30, 5, 10); // Perna direita
  }
}
