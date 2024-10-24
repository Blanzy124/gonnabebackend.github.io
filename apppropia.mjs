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


let filesLocation;
try{
 filesNames.forEach(fileName =>{
  filesLocation = path.join(folder, fileName)
  fs.readFile(filesLocation, 'utf-8',).then(fileRead =>{
   let number = parseFloat(fileRead) + parseFloat(fileRead);
   
   console.log(number)
  })

 })

}catch{
 console.error(`algo asalio mal en la operacion`)
 process.exit(1)
}

















try{
 //if(filesNames == 0){
  // console.log(`no hay nada en "${folderName}"`)
  // return;
  //};
  
 }catch{
  console.error(`algo salio mal`)
  process.exit(1)
 }
 
 
 
 
 
 

 


//meter todo readfile en una variable







//asegurarse que tengan algun tipo de informacion,
//alternativa en caso de que este bacio (NaN) el archivo(sera igual a cero)
//asegurarse que sean numeros y no letras







