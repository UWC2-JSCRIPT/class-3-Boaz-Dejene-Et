// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`

class SpaceShip {
    constructor(name, topSpeed) {
        this.name = name;
        this.topSpeed = topSpeed;
    }
    accelerate() {
        console.log(`${this.name} moving to ${this.topSpeed}`)
    }
}

let Nebulon = new SpaceShip("Nebulon", 204);

Nebulon.accelerate()

// 2. Call the constructor with a couple ships,
// and call accelerate on both of them.

let Destroyer = new SpaceShip("Destroyer", 504);
Destroyer.accelerate()

let Ionic = new SpaceShip("Ionic", 150);
Ionic.accelerate()