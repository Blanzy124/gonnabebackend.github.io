import fs from 'node:fs'
import { folder } from './userApps.mjs'
import path from 'node:path'
import pico from 'picocolors'

export function create (userName, password, date) {
  const fileUserPath = path.join(folder, `${userName}.txt`)
  fs.writeFile(fileUserPath, `N:${userName} P:${password} D:${date}`, 'utf8', (err) => {
    if (err) {
      console.error('algo salio mal en la escritura del archivo')
      return
    }
    console.log(pico.green('Creacion del usuario exitosa'))
  })
}
