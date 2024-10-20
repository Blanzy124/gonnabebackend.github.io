const fs = require('node:fs')
fs.readFile('./inputs.js', 'utf8', (err, input) => {
  if (err) {
    console.error('dio error esta mierda');
    return;
  }
  eval(input);
  console.log(entrada);
})