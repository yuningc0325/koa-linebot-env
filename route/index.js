const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const lineMiddleware = require('@line/bot-sdk').middleware
const validateSignature = require('@line/bot-sdk').validateSignature
const config = require('@config/index.js')
const controller = require('@controller/index.js')
const home = new Router()

const lineConfig = {
  channelAccessToken: config.line_token,
  channelSecret: config.line_secret
}

home.get('/', async (ctx, n) => {
  ctx.body = 'root route'
  ctx.status = 200
})

home.use('/webhook', async (ctx, n) => {
  lineMiddleware(lineConfig)
  await n()
})

home.use(bodyParser())

home.post('/webhook', async (ctx, n) => {
  const body = JSON.stringify(ctx.request.body)
  const signature = ctx.request.header['x-line-signature']
  const isValid = await validateSignature(body, lineConfig.channelSecret, signature)
  if (!isValid) {
    ctx.status = 401
  } else {
    ctx.status = 200
  }
  const event = ctx.request.body.events[0]
  controller.reply(event)
})

module.exports = home
