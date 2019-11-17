const cron = require('cron')
const db = require('@database/index.js')
// const client = require('@client/index.js')
// require('./crawl')

// line push api
new cron.CronJob({ //eslint-disable-line
  cronTime: '00 20 * * * *',
  start: true,
  runOnInit: true,
  onTick: async () => {
    const { rows } = await db.queryUser()
    if (rows.length > 0) {
      rows.forEach(el => {
        // client.pushMessage(el.id_account, {
        //   type: 'text',
        //   text: `${el.name}, morning!`
        // })
        console.log(el)
      })
    }
  }
})
