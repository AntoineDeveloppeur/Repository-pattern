import { User } from "../entities/user.js"

export interface UserRepository {
  create(user: User): Promise<void>
  isEmailAlreadyUsed(email: string): Promise<boolean>
  getHash(id: string): Promise<string>
  updatePassword(id: string, hashedPassword: string): Promise<void>
  findUserId(email: string): Promise<string>
}
