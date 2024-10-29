import fss from 'node:fs'
import fs from 'node:fs/promises';
import path from 'node:path';
console.log('ejecutando...');
 
const folder = path.join('C:', 'Users', 'samue', 'OneDrive', 'Desktop', 'back');
const folderName = path.basename(folder)


let filesNames;
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
let numbersAvailables = parseFloat(filesNames.length);
let filesLocation;
let showResult = 0;
try{
 filesNames.forEach(fileName =>{ 
  filesLocation = path.join(folder, fileName);
  fs.readFile(filesLocation, 'utf-8',).then(fileRead =>{
   let numbers = parseFloat(fileRead);
   if(isNaN(fileRead)){
    console.error(`alguno de los archivos en ${folderName} no contiene datos, por favor, increse archivos validos.`)
   return;
   }
   numbersAvailables--; 
   showResult += numbers;
   if(numbersAvailables === 0){
    console.log(showResult)
   }
  })
 })
}catch{
 console.error(`algo asalio mal en la operacion`)
 process.exit(1)
}



//meter todo readfile en una variable







//asegurarse que tengan algun tipo de informacion,
//alternativa en caso de que este bacio (NaN) el archivo(sera igual a cero)
//asegurarse que sean numeros y no letras







