import User from "../../domain/Entities/user"
import { PostSQLUserRepository } from "../../infrastructure/repository/PostSQLUserRepository"

type UserInfoFromFrontend = { name: string; email: string }

export async function createUser(UserInfoFromFrontend: userInfoFromFrontend) {
  const user = new User(UserInfoFromFrontend)
  const db = new PostSQLUserRepository(user)
  await db.create()
}
