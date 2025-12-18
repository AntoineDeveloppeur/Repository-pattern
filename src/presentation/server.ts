import userRoutes from "./routes/user"

const express = require("express")
const app = express()

const port = 4000

app.get("/", (req, res) => {
  res.send("Hello World")
})

app.get("/user", userRoutes)

app.listen(port, () => {
  console.log(`Listening on porc ${port}`)
})
