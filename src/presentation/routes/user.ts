import express, { Request, Response } from "express"
import user from "../controllers/user.js"
const router = express.Router()

router.post("/create", (req: Request, res: Response) => {
  console.log("dans le router")
  user.create(req, res)
})

export default router
