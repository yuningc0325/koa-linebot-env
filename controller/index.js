const client = require('@client/index.js')
const controller = {}

controller.reply = async (event) => {
  const type = event.type || null
  const message = event.message.text || null
  const messageType = event.message.type || null
  // const userId = event.source.userId || null
  // const roomId = event.source.roomId || null
  // const groupId = event.source.groupId || null
  const replyToken = event.replyToken || null
  console.log('execute')
  if (type === 'message') {
    switch (messageType) {
      case 'text' :
        console.log('text')
        client.replyMessage(replyToken, {
          type: 'text',
          text: textReply(message)
        })
        break
      case 'sticker' :
        // do something
        break
      case 'image' :
        // do something
        break
      case 'video':
        // do something
        break
    }
  }
}

const textReply = (req = '') => {
  if (typeof req !== 'string') throw new Error('Data format error')
  if (req) {
    return 'hello world'
  }
}

module.exports = controller
