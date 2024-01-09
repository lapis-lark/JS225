function makeCar(rate, brakerate) {
  return {
    speed: 0,
    rate,
    brakerate,
    accelerate() {
      this.speed += this.rate;
    },
    brake() {
      this.speed -= brakerate;
      if (this.speed < 0) {
        this.speed = 0;
      }
    },
  }
}

let sedan = makeCar(8, 6);
sedan.accelerate();
console.log(sedan.speed);
sedan.brake();
console.log(sedan.speed);

let hatchback = makeCar(9, 8);