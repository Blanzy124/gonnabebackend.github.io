import fss from 'node:fs'
import fs from 'node:fs/promises';
import path from 'node:path';
import readLine from 'readline';
import { folderName } from './appCreateFiles.mjs';
import { creation } from './appCreateFiles.mjs';
import inquirer from 'inquirer';
import { type } from 'node:os';
import { response } from 'express';
import { reader } from './appRead.mjs';
import { deleter } from './apppropiadelate.mjs';


console.log(`starting...`)

let o3 = 'eliminar la lista de archivos';
let o1 = 'Crear una cantidad de archivos con un valor aleatorio';
let o2 = 'Leer el valor de los archivos';

//cretion case


inquirer.prompt([{
 type: "list",
 name: "options",
 message: "Que te gustatia hacer",
 choices: [o1, o2, o3]
}]).then((selection) => {
 console.log(selection)
 var objectSeleted = selection.options;



 switch(objectSeleted){
  case o1: {
   inquirer.prompt([{
    type: 'number',
    name: 'quantity',
    message: 'Cuantos deseas crear?',
   }]).then((response) => {
    let quantity = parseInt(response.quantity)
    console.log(quantity)
    creation(quantity)
   });
   break;
  }

  case o3: {
   deleter();
   break;
  }

  case o2: {
   reader();
   break;
  }
 }
})



























































