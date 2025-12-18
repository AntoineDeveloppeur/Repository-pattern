import Routes from "express"
import { createUser } from "../../application/useCases/CreateUser"

const routes = new Routes()

routes.post("/create", (req: Request, res: Response) => createUser)

export default routes
