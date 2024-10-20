//const { Console } = require('node:console')
//const { text } = require('express')
import { readFile} from 'node:fs/promises';
//const { console } = require('node:inspector')

const xd = await readFile('./xd.text', 'utf8')
console.log(xd)

