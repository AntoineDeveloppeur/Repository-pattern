import { createUser } from "../../application/useCases/CreateUser"
import User from "../../domain/Entities/user"

const user = {
  create: async (req: Request, res: Response) => {
    try {
      await createUser(req.body as unknown as User)
      res.status(201).json({ message: "utilisateur créé avec succès" })
    } catch (error) {
      res.status(500).json({ error })
    }
  },
}

export default user
