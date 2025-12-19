import userRoutes from "./routes/user"

const express = require("express")
const app = express()

const port = 4000

app.use("/user", userRoutes)
app.get("/", (req, res) => {
  res.send("Hello World")
})

app.listen(port, () => {
  console.log(`Listening on porc ${port}`)
})
