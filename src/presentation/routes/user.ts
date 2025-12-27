import express, { Request, Response } from "express"
import userCtrl from "../controllers/user.js"
import { validateRequestCreateUser } from "../../domain/utils/validateForms.js"
const router = express.Router()

router.post(
  "/create",
  validateRequestCreateUser,
  async (req: Request, res: Response) => {
    console.log("dans le router")
    await userCtrl.handleCreateUser(req, res)
  }
)

router.post("/modifyPassword", async (req: Request, res: Response) => {
  console.log("dans le router")
  await userCtrl.handleModifyPassword(req, res)
})

export default router
