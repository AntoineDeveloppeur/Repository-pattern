export default class User {
  id: string
  name: string
  email: string
  hash: string
  accessRight: "administrator" | "moderator" | "user" = "user"
  constructor(user: { id: string; name: string; email: string; hash: string }) {
    this.id = user.id
    this.name = user.name
    this.email = user.email
    this.hash = user.hash
  }
}
