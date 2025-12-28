import { UserRepository } from "../../domain/Repositories/userRepository.js"
import { UserDoesntExist } from "../../domain/errors/UserDoesntExist.js"
import hashPassword from "../../domain/utils/hashPassword.js"

export default async function modifyPassword(
  email: string,
  password: string,
  userRepository: UserRepository
) {
  const userID = await userRepository.findUserId(email)
  if (!userID) {
    throw new UserDoesntExist(email)
  }
  const hashedPassword = hashPassword(password)
  await userRepository.modifyPassword(userID, hashedPassword)
}
