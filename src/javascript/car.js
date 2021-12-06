class Car {
  constructor(brand, year, fuelRate) {
    this.brand = brand;
    this.year = year;
    this.fuelRate = fuelRate;
  }

  getInfo() {
    console.log(
      "Модель:" +
        this.brand +
        " : " +
        this.year +
        ". Расход топлива: " +
        this.fuelRate +
        " л/100 км."
    );
  }

  calcFuel(distance) {
    const calcFuel = (this.fuelRate * distance) / 100;
    return calcFuel + ` л на ${distance} км`;
  }
}

export { Car };
