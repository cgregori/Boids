// TODO: Make a flock class
const flock = [];

function setup() {
  createCanvas(400, 400);
  // Instantiate flock/boids
  for (let i = 0; i < 15; i++) {
    flock.push(new Boid());
  }
}

function draw() {
  background(220);

  for(let boid of flock) {
    boid.update()
    boid.show()
  }
}
