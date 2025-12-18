import User from "./Entities/user"

export interface UserRepository {
  save(user: User): Promise<void>
  delete(user: User): Promise<void>
}

export class UserDB {
  static save(user: User) {
    User.find(user.id).then((id) => {
      id.update((user.id, user))
    })
  }
}
