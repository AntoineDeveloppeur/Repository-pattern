export class StorageError extends Error {
  status: number = 500
  constructor(message: string) {
    super(message)
  }
}

export class EmailAlreadyUsed extends Error {
  status: number = 400
  constructor(email: string) {
    super(`${email} est déjà utilisé`)
  }
}

export class UserDoesntExist extends Error {
  status: number = 400
  constructor(email: string) {
    super(`${email} doesn't have an account`)
  }
}
