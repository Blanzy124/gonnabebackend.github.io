import fs from 'node:fs/promises';
import path from 'node:path';
 console.log('ejecutando...');
 
 const folder = path.join('C:', 'Users', 'samue', 'OneDrive', 'Desktop', 'back');
 const folderName = path.basename(folder)
 const folderStatus = await fs.stat(folder)

fs.readdir(folder)
.then(files =>{
 files.forEach(file =>{
  Promise.all(file =>{
   fs.readFile(file, 'utf-8')
  })
  
 })
})

 try{

 }catch{

  console.error(`no hay o no son lejibles los elementos en tu carpeta ${folderName}`);
  process.exit(1)
 }

//BUSCAR LA MANERA DE PODER USAR EL READFILE JUNTO CON AWAIT
 
 
 

 
 
 
 

 
 
 











//asegurarse que tengan algun tipo de informacion,
//alternativa en caso de que este bacio (NaN) el archivo(sera igual a cero)
//asegurarse que sean numeros y no letras







