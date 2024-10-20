//const { Console } = require('node:console')
//const { text } = require('express')
const { readFile } = require('node:fs/promises');
//const { console } = require('node:inspector')
//IIFE = Inmediatly Invoked function expression
(
  async()=> {
    const xd = await readFile('./xd.text', 'utf8')
console.log(xd)

  }
)()



//fs.readFile('./inputs.js', 'utf8').then (input => {
//  eval(input)
//  
//  console.log(entrada)
//})
//.catch(error => {
//  console.log('dio error esta mierda', error)
//})
//.finally(finish => {
//  console.log('terminamos.', finish)
//})