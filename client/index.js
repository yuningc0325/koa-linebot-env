const Client = require('@line/bot-sdk').Client
const config = require('@config/index.js')

const client = new Client({
  channelAccessToken: config.line_token,
  channelSecret: config.line_secret
})

module.exports = client
