import { Car } from "./car";

class SportCar extends Car {
  currentSpeed = 0;
  isWorking = false;

  constructor(brand, year, fuelRate, maxSpeed) {
    super(brand, year, fuelRate);
    this.maxSpeed = maxSpeed;
  }

  start() {
    this.isWorking = true;
    return `${this.brand} - заведена`;
  }

  speedUp(value) {
    if (this.isWorking == true) {
      this.currentSpeed += value;

      if (this.currentSpeed > this.maxSpeed) {
        console.error("не работает");
      }
    } else alert("Нужно завести машину");
  }
}

export { SportCar };
