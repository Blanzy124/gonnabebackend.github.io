import http from 'node:http'
const server = http.createServer((req, res) => {
  console.log('request resivida')
  res.end('hola mundo, que tal, como estan, todo bien?')
  server.close(() => {
    console.log(`Server cerrado`)
  })
})

server.listen(0, () => {
  console.log(`escuchando al puerto 3900 http://localhost:${server.address().port}`)
})
