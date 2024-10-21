import fs from 'node:fs/promises';
import path from 'node:path';
const nu1 = path.join('C:', 'Users', 'samue', 'OneDrive', 'Desktop', 'pruebaxd.txt');
const nu2 = path.join('C:', 'Users', 'samue', 'OneDrive', 'Desktop', 'prueba2.txt');
Promise.all([
 fs.readFile(nu1, 'utf8'),
 fs.readFile(nu2, 'utf8')
]).then(([nu1, nu2]) =>{
 var nu1 = parseFloat(nu1);
 var nu2 = parseFloat(nu2);
 const re = nu1 + nu2;
 if(isNaN(re)){
  console.log('deben ser solo numeros')
  return;
 }
 console.log(re)

}).catch(err =>{
 if(err){
  console.log('algo salio mal')
  return;
 }
})
console.log('esto esta de ultimo')