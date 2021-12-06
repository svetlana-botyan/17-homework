import "../scss/app.scss";

import { Car } from "./car";
import { Truck } from "./truck";
import { SportCar } from "./sport-car";

// №1
const carBMV = new Car("BMV X6", 2019, 6.6);
carBMV.getInfo();

const distanse = 150;
console.log("Расход топлива: " + carBMV.calcFuel(distanse));

// №2
const carVolvo = new Truck("Volvo XC 90", 2019, 7.7, 4);
carVolvo.getInfo();

console.log("Расход топлива: " + carVolvo.calcFuel(distanse));

carVolvo.addCargo(8);
console.log(carVolvo.cargoCabin); //вывод массив

// №3
const carFerrari = new SportCar("Ferrari Roma", 2020, 9.7, 320);
carFerrari.getInfo();

console.log("Расход топлива: " + carFerrari.calcFuel(distanse));

console.log(carFerrari.start()); //завели машину

const value = 250;
carFerrari.speedUp(value);

console.log(carFerrari.currentSpeed + " км/ч");
