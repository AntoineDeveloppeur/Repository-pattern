import User from "../../domain/Entities/user.js"
import { PostSQLUserRepository } from "../../infrastructure/repository/PostSQLUserRepository.js"

type UserInfoFromFrontend = { name: string; email: string }
type CreateUserReturn = Promise<{
  error: string | null
}>

export async function createUser(
  UserInfoFromFrontend: UserInfoFromFrontend
): CreateUserReturn {
  try {
    const user = new User(UserInfoFromFrontend)
    const db = new PostSQLUserRepository(user)
    await db.create()
    return { error: null }
  } catch (error) {
    return { error: error }
  }
}
