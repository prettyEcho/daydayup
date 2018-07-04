class People {
  constructor(name) {
    this.name = name
  }

  getName() {
    console.log(this.name)
  }
}

const me = new People('echo')
me.getName()

console.log(me.__proto__ === me.constructor.prototype)

console.log(me.constructor.prototype.__proto__ === Object.prototype)

console.log(Object.prototype.__proto__)