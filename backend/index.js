const connectToMongo =  require("./db");
const express = require('express')

//connecting to the mongodb server
connectToMongo();

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! whta tl hstjo asodj')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})