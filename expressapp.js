const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h3>Hello World! Practicing Nodejs</h3>')
})

app.get('/about', (req, res) => {
  res.send('<h2>Hey, Dipesh Kundnani</h2> <br> <h3> I am learning nodejs and express for back-end.</h3>')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})