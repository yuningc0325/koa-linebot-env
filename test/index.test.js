require('./extend.test.js')
const reply = require('../controller/reply/index.js')

/* eslint-env jest */
const { textReply } = reply
test('reply type check', () => {
  expect(textReply('123')).toBeType('string')
})
