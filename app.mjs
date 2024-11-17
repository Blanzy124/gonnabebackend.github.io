import fss from 'node:fs'
import fs from 'node:fs/promises';
import path from 'node:path';
import readLine from 'readline';
import { folderName } from './appCreateFiles.mjs';
import { creation } from './appCreateFiles.mjs';


console.log(`programa inicializado...`)

const rl = readLine.createInterface({
 input: process.stdin,
 output: process.stdout
});

rl.question(`cuantos archivos deseas crear?`, (cantidad) => {

 creation(cantidad)




 rl.close();

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 



 
})






















































