import { UserRepository } from "../../domain/Repositories/userRepository.js"
import { UserDoesntExist } from "../../domain/errors/UserDoesntExist.js"
import { PasswordHasher } from "../../domain/services/PasswordHasher.js"

export default async function modifyPassword(
  email: string,
  password: string,
  userRepository: UserRepository,
  passwordHasher: PasswordHasher
) {
  const userID = await userRepository.findUserId(email)
  if (!userID) {
    throw new UserDoesntExist(email)
  }
  const hash = passwordHasher.hash(password)
  await userRepository.modifyPassword(userID, hash)
}
