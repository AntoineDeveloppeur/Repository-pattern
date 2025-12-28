import { createUser } from "../../application/useCases/CreateUser.js"
import { Response, Request } from "express"
import { PostSQLUserRepository } from "../../infrastructure/repository/PostSQLUserRepository.js"
import { UserDoesntExist } from "../../domain/errors/UserDoesntExist.js"
import { EmailAlreadyUsed } from "../../domain/errors/EmailAlreadyUsed.js"
import { StorageError } from "../../infrastructure/repository/errors/StorageError.js"
import modifyPassword from "../../application/useCases/ModifyPassword.js"
import { UserInfoFromFrontend } from "../../../types/index.js"

const userCtrl = {
  handleCreateUser: async (req: Request, res: Response) => {
    console.log("dans le controller")
    try {
      await createUser(
        req.body as unknown as UserInfoFromFrontend,
        new PostSQLUserRepository()
      )
      return res.status(201).json({ message: "utilisateur créé avec succès" })
    } catch (error) {
      if (error instanceof EmailAlreadyUsed) {
        return res.status(error.status).json({ error: error.message })
      }
      if (error instanceof StorageError) {
        return res.status(error.status).json({ error: error.message })
      }
      console.error(error)
      return res.status(500).json({ error: "Erreur interne au serveur" })
    }
  },
  handleModifyPassword: async (req: Request, res: Response) => {
    try {
      await modifyPassword(
        req.body.email,
        req.body.password,
        new PostSQLUserRepository()
      )
      return res
        .status(200)
        .json({ message: "mot de passé modifié avec succès" })
    } catch (error) {
      if (error instanceof UserDoesntExist) {
        return res.status(error.status).json({ error: error.message })
      }
      console.error(error)
      res.status(500).json({ message: "Erreur interne du serveur" })
    }
  },
}

export default userCtrl
