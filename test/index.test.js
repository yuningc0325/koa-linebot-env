require('./extend.test.js')
const reply = require('../controller/reply/index.js')

/* eslint-env jest */
const { textReply } = reply
test('reply type check1', () => {
  expect(textReply('123')).toBeType('string')
})
test('reply type check2', () => {
  expect(textReply('1234')).toBeType('string')
})
