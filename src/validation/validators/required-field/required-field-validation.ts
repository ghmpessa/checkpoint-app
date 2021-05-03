import { RequiredFieldError } from '../../errors'
import { FieldValidation } from '../../protocols/field-validation'

export class RequiredFieldValidation implements FieldValidation {
  constructor (readonly field: string) {}

  validate (input: object): Error {
    return input[this.field] ? null : new RequiredFieldError()
  }
}
