import fss from 'node:fs'
import fs from 'node:fs/promises';
import path from 'node:path';
console.log('ejecutando...');

const folder = path.join('C:', 'Users', 'samue', 'OneDrive', 'Desktop', 'back');
const folderName = path.basename(folder)

let filesNames;

try{
 filesNames = await fs.readdir(folder);
}catch{
 console.error(`algo salio mal en la lectura de la carpeta ${folderName}`)
}


const fichersPromises = 




































