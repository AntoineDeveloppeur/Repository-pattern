import { createUser } from "../../application/useCases/CreateUser"
import User from "../../domain/Entities/user"

const user = {
  create: async (req: Request, res: Response) => {
    await createUser(req.body as unknown as User)
  },
}

export default user
