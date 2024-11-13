import fss from 'node:fs'
import fs from 'node:fs/promises';
import path from 'node:path';
console.log('cargando...');
 
const folder = path.join('C:', 'Users', 'samue', 'OneDrive', 'Desktop', 'back');
const folderName = path.basename(folder)

const quantity = parseInt(100)
let filesNames;
var switchs = quantity;

try{
 filesNames = fss.readdirSync(folder);
 if(filesNames == 0){
 
  for (let id = 1; id <= quantity; id++){
   const fileName = path.join(folder, `e_${id}.txt`)
   const nunAleatorio = Math.floor(Math.random() * 1000) + 1; 
   switchs = switchs - 1;
   fs.writeFile(fileName, nunAleatorio.toString(), 'utf8')
   if(switchs == 0){
    console.log(`archivos creados`)
   }
  }
 }
  else{
   console.error(`ya hay archivos en la carpeta`);
  }
 
 
 
 
}catch{
  console.error(`algo salio mal en la creacion de archivos`);
  process.exit(1);
}




console.log(`finalizado`)


















