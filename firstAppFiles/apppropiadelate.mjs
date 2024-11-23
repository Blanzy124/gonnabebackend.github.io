import fss from 'node:fs'
import fs from 'node:fs/promises';
import path from 'node:path';
import { folder } from './app.mjs';
 



export function deleter(){
 const folderName = path.basename(folder)
 let filesNames;
 console.log('Cargando...');

 try{
  filesNames = fss.readdirSync(folder)
  if(filesNames === 0){
   console.error(`No hay nada en: ${folderName}`)
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
   async function borrar() {
    try{
     await fs.rm(filesLocation);
     printerSwitch--;
    if(printerSwitch === 0){
     console.log(`se borraron los archivos de ${folderName}`)
    }
    }catch{
     console.error(`algo salio mal al borrar`)
     return
    }
   }
   borrar() 
  })
 }catch{
  console.error(`algo asalio mal en la operacion`)
  process.exit(1)
 }

}

