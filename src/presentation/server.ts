import express from "express"
import userRoutes from "./routes/user.js"

const app = express()

const port = 4000

// Middleware permettant de comprendre le format json
app.use(express.json())
// Permet de traiter les formulaire, l'option extended à true autorise l'analyse d'objets complexes et imbriqués
app.use(express.urlencoded({ extended: true }))

// Affiche la requête reçue
app.use((req, res, next) => {
  const fullUrl = `${req.protocol}://${req.get("host")}${req.url}`
  const origin = req.get("Origin") || req.get("Referer") || "Direct access"
  console.log(
    `${req.method} ${fullUrl} - Origin: ${origin} - ${new Date().toISOString()}`
  )
  next()
})

app.use("/user", userRoutes)
app.get("/", (req, res) => {
  res.send("Hello World")
})

app.listen(port, () => {
  console.log(`Listening on porc ${port}`)
})
