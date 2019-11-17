/* eslint-env jest */
expect.extend({
  toBeType (received, type) {
    let pass = false
    switch (type) {
      case 'number':
        pass = typeof received === 'number' || received instanceof Number
        break
      case 'string':
        pass = typeof received === 'string' || received instanceof Number
        break
      case 'date':
        pass = received instanceof Date
        break
      case 'array':
        pass = received instanceof Array
        break
      case 'object':
        pass = received !== null &&
        typeof received === 'object' &&
        Object.getOwnPropertyNames(received).length
    }
    return {
      message: `type check ${pass ? 'pass' : 'failed'}`,
      pass
    }
  }
})
