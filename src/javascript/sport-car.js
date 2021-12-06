import { Car } from "./car";

class SportCar extends Car {
  currentSpeed = 0;
  isWorking = false;

  constructor(brand, year, fuelRate, distance, maxSpeed) {
    super(brand, year, fuelRate, distance);
    this.maxSpeed = maxSpeed;
  }

  start() {
    this.isWorking = true;
    return `${this.brand} - заведена`
  }

  speedUp(value) {}
}
export { SportCar };
