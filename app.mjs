import fss from 'node:fs'
import fs from 'node:fs/promises';
import path from 'node:path';
import readLine from 'readline';
import { folderName } from './appCreateFiles.mjs';
import { creation } from './appCreateFiles.mjs';


console.log(`starting...`)








const rl = readLine.createInterface({
 input: process.stdin,
 output: process.stdout
});

let option;

console.log(`What you like to do?`)
console.log(`1----create files.`)
console.log(`2----Read and have the total of the created files.`)
console.log(`3----Delete files.`)
console.log(`-----------------------------------`)
/////////////////////////////
rl.question(`Selection =  `, (options) => {
 option = parseInt(options)
 rl.question(`Who many file you what to create?` , (quantityy) => {
  quantity = parseInt(quantityy)
  creation(quantity)
  console.log(`algo`)
  rl.close()
 })
 rl.close();
})


//switch (option) {
// case 1:
// }
//  
//  break;
//
// default:
//  break;
//}






























































