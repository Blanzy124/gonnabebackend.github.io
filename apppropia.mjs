import fss from 'node:fs'
import fs from 'node:fs/promises';
import path from 'node:path';
console.log('ejecutando...');
 
const folder = path.join('C:', 'Users', 'samue', 'OneDrive', 'Desktop', 'back');
const folderName = path.basename(folder)
try{
 fs.readdir(folder).then(files =>{ //filtro de una carpeta vacia
  if(files == 0){
   console.log(`no hay nada en "${folderName}"`)
   return;
  };
  files.forEach(file =>{
   let filesLocation = path.join(folder, file)
   fs.readFile(filesLocation).then
  })
 
 })
}catch{
 console.error(`algo salio mal`)
 process.exit(1)
}



 
 


//BUSCAR LA MANERA DE PODER USAR EL READFILE JUNTO CON AWAIT
 
 
 

 
 
 
 

 
 
 











//asegurarse que tengan algun tipo de informacion,
//alternativa en caso de que este bacio (NaN) el archivo(sera igual a cero)
//asegurarse que sean numeros y no letras







