const { Pool } = require('pg')
const config = require('@config/index.js')

const db = {}
module.exports = db
const pool = new Pool({
  host: config.db_host,
  user: config.db_user,
  database: config.db_database,
  password: config.db_password,
  port: config.db_port,
  min: 2,
  max: 10
})

;(async () => {
  try {
    await pool.connect()
    console.log('postgres db connected')
  } catch (err) {
    console.log(err)
  }
})()

// collect line user and store in database
db.writeUser = async (q) => {
  const name = q.name || 'N/A'
  const pic = q.pic || null
  const userId = q.userId
  if (typeof name !== 'string') throw new Error('data format error')
  if (typeof pic !== 'string' && pic !== null) throw new Error('data format error')
  if (!userId) throw new Error('data format error')
  const query = `
  insert into public.account 
  (id_account,name,pic_url)
  values ($1, $2, $3)
  on conflict (id_account)
  do update set
  mtime = now(),
  name = $2,
  pic_url = $3
  `
  const replacement = [userId, name, pic]
  try {
    const data = await pool.query(query, replacement)
    console.log(`${data.command} done`)
  } catch (err) {
    console.log(err)
    throw new Error(err.message)
  }
}

db.queryUser = async () => {
  const query = `
  select id_account, name from public.account
  `
  try {
    const data = await pool.query(query)
    console.log(`${data.command} done`)
    return data
  } catch (err) {
    console.log(err)
    throw new Error(err.message)
  }
}
