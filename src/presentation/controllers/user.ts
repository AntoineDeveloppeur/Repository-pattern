import { createUser } from "../../application/useCases/CreateUser.js"
import User from "../../domain/Entities/user.js"
import { Response, Request } from "express"

const user = {
  create: async (req: Request, res: Response) => {
    console.log("dans le controller")

    try {
      await createUser(req.body as unknown as User)
      res.status(201).json({ message: "utilisateur créé avec succès" })
    } catch (error) {
      res.status(500).json({ error })
    }
  },
}

export default user
