require('dotenv').config()

const env = process.env

module.exports = {
  env: env.NODE_ENV || 'dev',
  port: env.PORT || 8080,
  line_token: env.LINE_CHANNEL_TOKEN || '',
  line_secret: env.LINE_CHANNEL_SECRET || '',
  db_host: env.DB_HOST || 'localhost',
  db_user: env.DB_USER || 'postgres',
  db_database: env.DB_DATABASE || 'postgres',
  db_port: env.DB_PORT || 5432,
  db_password: env.DB_PASSWORD || ''
}
