import { Car } from './car'

class SportCar extends Car {
  currentSpeed = 0
  isWorking = false

  constructor (props) {
    super(props)
    this.maxSpeed = props.maxSpeed || 2
  }

  start () {
    this.isWorking = true
    return `${this.brand} - заведена`
  }

  speedUp (value) {
    if (!this.isWorking) {
      console.warn('Запусти двигатель')
      return
    }

    const newSpeed = this.currentSpeed + value

    if (newSpeed >= this.maxSpeed) {
      const message = new Error(`Ткущая скорость ${newSpeed}
     больше максимально допустимой ${this.maxSpeed}`)

     console.log(message)
      return
    }

    this.currentSpeed += value
  }
}

export { SportCar }
