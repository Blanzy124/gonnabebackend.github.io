import fs from 'node:fs/promises'
import { console } from 'node:inspector'
import path from 'node:path'


function mostrar (){
 console.log('ejecutando')
 let folder
 try{
  let folder = path.join('C:', 'Users', 'samue', 'OneDrive', 'Desktop', 'back')
  console.log('se leyo')
 }catch{
  const folderName = path.basename(folder)
  console.error(`no hay o no son lejibles los elemos de ${folderName}`)
 }
}
mostrar()










console.log('ejecutando raiz')






































