import fss from 'node:fs'
import fs from 'node:fs/promises';
import path from 'node:path';
import { folder } from './app.mjs';
 




export function reader(){
 const folderName = path.basename(folder)
 let filesNames;
 console.log('Cargando...');
 try{
  filesNames = fss.readdirSync(folder)
  if(filesNames == 0){
   console.error(`no hay nada en: ${folderName}`)
   process.exit(1)
  }
 }catch{
  console.error(`algo salio mal en la lectura de archivos del folder: ${folderName}`)
  process.exit(1)
 }
 let printerSwitch = parseFloat(filesNames.length);
 let filesLocation;
 let showResult = 0;
 try{
  filesNames.forEach(fileName =>{ 
   filesLocation = path.join(folder, fileName);
   fs.readFile(filesLocation, 'utf-8',).then(fileRead =>{
    let numbers = parseFloat(fileRead);
    if(isNaN(numbers)){
     console.error(`alguno de los archivos en ${folderName} no contiene datos o contiene caracteres que no son numeros, por favor, increse caracteres validos validos.`)
    return;
    }
    printerSwitch--; 
    showResult += numbers;
    if(printerSwitch === 0){
     console.log(showResult)
    }
   })
  })
 }catch{
  console.error(`algo asalio mal en la operacion`)
  process.exit(1)
 }

}
