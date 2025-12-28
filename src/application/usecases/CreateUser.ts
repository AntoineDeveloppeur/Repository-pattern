import User from "../../domain/Entities/user.js"
import { UserRepository } from "../../domain/Repositories/userRepository.js"
import { EmailAlreadyUsed } from "../../domain/errors/EmailAlreadyUsed.js"
import hashPassword from "../../domain/utils/hashPassword.js"
import { UserInfoFromFrontend } from "../../../types/index.js"
export async function createUser(
  userInfoFromFrontend: UserInfoFromFrontend,
  userRepository: UserRepository // je trouve ça étrange d'injecter une interface et non une instance de class
) {
  const emailAlreadyUsed = await userRepository.isEmailAlreadyUsed(
    userInfoFromFrontend.email
  )
  if (emailAlreadyUsed) {
    throw new EmailAlreadyUsed(userInfoFromFrontend.email)
  }
  const hash = hashPassword(userInfoFromFrontend.password)
  const user = new User({
    name: userInfoFromFrontend.name,
    email: userInfoFromFrontend.email,
    hash: hash,
  })
  await userRepository.create(user)
}
