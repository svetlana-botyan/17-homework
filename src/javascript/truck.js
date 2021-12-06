import { Car } from "./car";

class Truck extends Car {
  cargoCabin = [];

  constructor(brand, year, fuelRate, maxSlots) {
    super(brand, year, fuelRate);
    this.maxSlots = maxSlots;
  }

  addCargo(item) {
      if(this.cargoCabin.length<this.maxSlots) this.cargoCabin.push(item)
  }
}

export { Truck };
