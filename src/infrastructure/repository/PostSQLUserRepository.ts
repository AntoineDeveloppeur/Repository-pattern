import User from "../../domain/Entities/user.js"
import { UserRepository } from "../../domain/Repositories/userRepository.js"

export class PostSQLUserRepository implements UserRepository {
  user: User
  constructor(user: User) {
    this.user = user
  }
  async create() {
    setTimeout(() => {}, 1000)
    console.log("user created")
  }
}
