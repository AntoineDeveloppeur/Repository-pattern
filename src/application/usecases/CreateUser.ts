import User from "../../domain/Entities/user"
import { PostSQLUserRepository } from "../../infrastructure/repository/PostSQLUserRepository"

export async function createUser(user: User) {
  const db = new PostSQLUserRepository(user)
  await db.create()
}
