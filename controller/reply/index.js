const reply = {}
module.exports = reply

reply.textReply = (req = '') => {
  if (typeof req !== 'string') throw new Error('Data format error')
  if (req) {
    return 'test'
  }
}
