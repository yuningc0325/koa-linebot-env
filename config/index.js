require('dotenv').config()

const env = process.env

module.exports = {
  env: env.NODE_ENV || 'dev',
  port: env.PORT || 8080,
  line_token: env.LINE_CHANNEL_TOKEN || '',
  line_secret: env.LINE_CHANNEL_SECRET || ''
}
