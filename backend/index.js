const connectToMongo =  require("./db");
const express = require('express')

//connecting to the mongodb server
connectToMongo();

const app = express()
const port = 3000

//middle-vare to use (req body in api's) or any json format in api's
app.use(express.json())

//available routes
app.use("/api/user", require("./routes/auth"))
app.use("/api/notes", require("./routes/notes"))

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})