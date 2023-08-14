const connectToMongo =  require("./db");
const express = require('express')
var cors = require('cors')

//connecting to the mongodb server
connectToMongo();

const app = express()
const port = 5000

//to able to hit api directly from the browser
app.use(cors())

//middle-vare to use (req body in api's) or any json format in api's
app.use(express.json())

//available routes
app.use("/api/auth", require("./routes/auth"))
app.use("/api/notes", require("./routes/notes"))
app.use("/api/adminAuth", require("./routes/adminAuth"))
app.use("/api/orders", require("./routes/orders"))

app.listen(port, () => {
  console.log(`Resturant backend app listening on port http://localhost:${port}`)
})