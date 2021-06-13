export class InvalidParamError extends Error {
  constructor() {
    super('There must be an invalid field!')
    this.name = 'InvalidParamError'
  }
}
