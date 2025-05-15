import { helpers, minLength, maxLength, required } from '@vuelidate/validators'

export const requiredField = helpers.withMessage('This field is required', required)

export const regex = (pattern: RegExp, message: string) =>
  helpers.withMessage(message, (value: unknown) => {
    if (!helpers.req(value)) return true
    return typeof value === 'string' && pattern.test(value)
  })

export const emailValidator = regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Must be a valid email')

export const passwordStrength = helpers.withMessage(
  'Password must be at least 6 characters and include a number',
  (value: string) => !!value && /[0-9]/.test(value) && value.length >= 6,
)

export const minLen = (len: number) =>
  helpers.withMessage(`Minimum ${len} characters`, minLength(len))

export const maxLen = (len: number) =>
  helpers.withMessage(`Maximum ${len} characters`, maxLength(len))
