import '../scss/app.scss'

import { Car } from './car'
import { Truck } from './truck'
import { SportCar } from './sport-car'

// №1
const carBMV = new Car({
  brand: 'BMV X6',
  year: 2019,
  fuelRate: 6.6
})
carBMV.getInfo()

const distanse = 150
console.log('Расход топлива: ' + carBMV.calcFuel(distanse) + ` л на ${distanse} км`)

// №2
const carVolvo = new Truck({
  brand: 'Volvo XC 90',
  year: 2019,
  fuelRate: 7.7,
  maxSlots: 4
})
carVolvo.getInfo()

console.log('Расход топлива: ' + carVolvo.calcFuel(distanse))

carVolvo.addCargo(8)
console.log(carVolvo.cargoCabin) // вывод массив

// №3
const carFerrari = new SportCar({
  brand: 'Ferrari Roma',
  year: 2020,
  fuelRate: 9.7,
  maxSpeed: 320
})

carFerrari.getInfo()

console.log('Расход топлива: ' + carFerrari.calcFuel(distanse))

console.log(carFerrari.start()) // завели машину

const value = 250
carFerrari.speedUp(value)

console.log(carFerrari.currentSpeed + ' км/ч')
