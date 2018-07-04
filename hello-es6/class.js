class People {
  static name = 'echo'

  getName(name) {
    console.log(name)
  }
}

let person = new People()
// person.getName('echo')
console.log(People.name)
