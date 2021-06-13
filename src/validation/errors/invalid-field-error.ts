export class InvalidFieldError extends Error {
  constructor() {
    super('Invalid value!')
    this.name = 'InvalidFieldError'
  }
}
