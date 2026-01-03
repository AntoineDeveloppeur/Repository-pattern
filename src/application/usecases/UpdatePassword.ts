import { UserRepository } from "../../domain/Repositories/userRepository.js"
import { IncorrectCurrentPassword } from "../../domain/errors/IncorrectCurrentPassword.js"
import { UserDoesntExist } from "../../domain/errors/UserDoesntExist.js"
import { PasswordHasher } from "../../domain/services/PasswordHasher.js"

export default async function updatePassword(
  email: string,
  currentPassword: string,
  newPassword: string,
  userRepository: UserRepository,
  passwordHasher: PasswordHasher
) {
  // find the user
  const userId = await userRepository.findUserId(email)
  if (!userId) {
    throw new UserDoesntExist(email)
  }

  // Verify if user gives the correct password
  const storedHash = await userRepository.getHash(userId)
  const isCorrectCurrentPassword = passwordHasher.verify(
    currentPassword,
    storedHash
  )
  if (!isCorrectCurrentPassword) throw new IncorrectCurrentPassword()

  // Modify Password
  const hash = passwordHasher.hash(newPassword)
  await userRepository.updatePassword(userId, hash)
}
