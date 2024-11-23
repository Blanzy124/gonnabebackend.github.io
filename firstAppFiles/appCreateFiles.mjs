import fss from 'node:fs'
import fs from 'node:fs/promises';
import path from 'node:path';
import { folder } from './app.mjs'; 



export function creation(quantity){
  const folderName = path.basename(folder)
  console.log('Cargando...');

  var quantity = parseInt(quantity)

  if(quantity > 0 && quantity <= 8000){
  let filesNames;
  var switchs = quantity;
  
  try{
   filesNames = fss.readdirSync(folder);
   if(filesNames == 0){
   
    for (let id = 1; id <= quantity; id++){
     const fileName = path.join(folder, `e_${id}.txt`)
     const nunAleatorio = Math.floor(Math.random() * 9999999999999999) + 1; 
     switchs = switchs - 1;
     fs.writeFile(fileName, nunAleatorio.toString(), 'utf8')
     if(switchs == 0){
      console.log(`archivos creados`)
     }
    }
   }
    else{
     console.error(`ya hay archivos en la carpeta "${folderName}"`);
    }
  }catch{
    console.error(`algo salio mal en la creacion de archivos`);
    process.exit(1);
  }
  console.log(`finalizado`)
}
else{
  console.log(`El numero debe ser mayor o igual que 1 y solo se pueden crear un maximo de 8000 valores`)
}

}


























//const quantity = parseInt(100)
//let filesNames;
//var switchs = quantity;
//
//export async function creation(){
//  
//  try{
//   filesNames = fss.readdirSync(folder);
//   if(filesNames == 0){
//   
//    for (let id = 1; id <= quantity; id++){
//     const fileName = path.join(folder, `e_${id}.txt`)
//     const nunAleatorio = Math.floor(Math.random() * 1000) + 1; 
//     switchs = switchs - 1;
//     fs.writeFile(fileName, nunAleatorio.toString(), 'utf8')
//     if(switchs == 0){
//      console.log(`archivos creados`)
//     }
//    }
//   }
//    else{
//     console.error(`ya hay archivos en la carpeta`);
//    }
//  }catch{
//    console.error(`algo salio mal en la creacion de archivos`);
//    process.exit(1);
//  }
//  console.log(`finalizado`)
//}
//
//









