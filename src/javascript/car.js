class Car {
  constructor (props) {
    this.brand = props.brand || ''
    this.year = props.year || 0
    this.fuelRate = props.fuelRate || 0
  }

  getInfo () {
    console.log(
      'Модель:' +
        this.brand +
        ' : ' +
        this.year +
        '. Расход топлива: ' +
        this.fuelRate +
        ' л/100 км.'
    )
  }

  calcFuel (distance) {
    return this.fuelRate * distance / 100
  }
}

export { Car }
