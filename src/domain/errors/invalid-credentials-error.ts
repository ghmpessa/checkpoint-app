export class InvalidCredentialsError extends Error {
  constructor() {
    super('Invalid username or password.')
    this.name = 'InvalidCredentialsError'
  }
}
