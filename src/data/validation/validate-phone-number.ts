import { ParseError, parsePhoneNumberWithError } from 'libphonenumber-js'
import { isString } from 'lodash-es'

export const validatePhoneNumber = (value: unknown, opts: { required?: boolean }) => {
  if (!opts.required && !value) return true
  if (!isString(value)) return 'Invalid value type'
  if (!value) return true

  try {
    const parsed = parsePhoneNumberWithError(value, 'US')
    if (!parsed.isValid()) return 'Invalid phone number!'
    return true
  } catch (error) {
    if (error instanceof ParseError) {
      return error.message
    } else {
      throw error
    }
  }
}
