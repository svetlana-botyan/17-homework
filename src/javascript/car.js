class Car {
  constructor(brand, year, fuelRate, distance) {
    this.brand = brand;
    this.year = year;
    this.fuelRate = fuelRate;
    this.distance = distance;
    this.getInfo();
    this.calcFuel();
  }

  getInfo() {
    console.log(
      "Модель:" +
        this.brand +
        "-" +
        this.year +
        ". Расход топлива: " +
        this.fuelRate +
        " л/100 км."
    );
  }

  calcFuel() {
    const calcFuel = (this.fuelRate * this.distance) / 100;
    return calcFuel;
  }
}

export { Car };
