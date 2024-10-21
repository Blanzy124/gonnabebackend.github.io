const fs = require('node:fs/promises');
const path = require('node:path');
const carpetas = process.argv[2] ?? '.';
async function ls(carpetas) {
  let files;
  try {
    files = await fs.readdir(carpetas);
  } catch {
    console.error(`No se pudo leer el directorio ${carpetas}`);
    process.exit(1);
  }
  const filesPromises = files.map(async (file) => {
    const filePath = path.join(carpetas, file);
    let stats;
    try {
      stats = await fs.stat(filePath);
    } catch {
      console.error(`No se pudo leer el archivo ${filePath}`);
      process.exit(1);
    }
    const fileSize = stats.size;
    const fileModified = stats.mtime.toLocaleString();
    return `${file} ${fileSize.toString()} ${fileModified}`;
  });
  const filesInfo = await Promise.all(filesPromises);
  filesInfo.forEach((fileInfo) => console.log(fileInfo));
}
ls(carpetas);






