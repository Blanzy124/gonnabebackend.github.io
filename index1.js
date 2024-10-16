const fs = require('node:fs')

const { promisify } = require('node:util')

const promisi = promisify(fs.readFile)

promisi('./xd1.text', 'utf-8',).then(read1 => {
 console.log(read1)
})

console.log("Esto en el codigo es el segundo console.log, lo que significa que se imprimira de primero ya que arriba de este se esta leyendo otro archivo")
console.log('Esta linea de codigo esta de cuarto, lo que significa que deberia aparecer de segundo')

 