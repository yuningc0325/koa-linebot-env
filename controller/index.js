const client = require('@client/index.js')
const HTTPError = require('@line/bot-sdk').HTTPError
const api = require('@api/index.js')
const db = require('@database/index.js')
const controller = {}

controller.reply = async (event) => {
  const type = event.type || null
  const message = event.message.text || null
  const messageType = event.message.type || null
  const userId = event.source.userId || null
  const replyToken = event.replyToken || null

  // store user id
  if (type === 'follow') {
    if (typeof userId === 'string') {
      try {
        const userProfile = await api.fetchUserProfile(userId)
        const name = userProfile.displayName || 'N/A'
        const pic = userProfile.pictureUrl || null
        const queryObj = { userId, name, pic }
        db.writeUser(queryObj)
      } catch (err) {
        throw new Error(err.message)
      }
    }
  }
  if (type === 'message') {
    switch (messageType) {
      case 'text' :
        client.replyMessage(replyToken, {
          type: 'text',
          text: textReply(message)
        }).catch(err => {
          if (err instanceof HTTPError) {
            console.log(err)
          }
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
    return 'test'
  }
}

module.exports = controller
