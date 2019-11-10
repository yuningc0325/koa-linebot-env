const Koa = require('koa')
const koaLogger = require('koa-logger')
const app = new Koa()
const config = require('@config/index.js')
const router = require('@route/index.js')

const env = config.env

if (env !== 'test') app.use(koaLogger())
app.use(router.allowedMethods())
app.use(router.routes())

require('@database/index.js')
// start line bot notification runner
require('@runner/index.js')

const server = app.listen(config.port, () => {
  console.log(`start server on port ${server.address().port}`)
})
