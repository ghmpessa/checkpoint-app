export class UnexpectedError extends Error {
  constructor() {
    super('Something went wrong, try again later.')
    this.name = 'UnauthorizedError'
  }
}
