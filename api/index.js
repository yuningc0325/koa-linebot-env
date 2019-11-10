const axios = require('axios')
const config = require('@config/index.js')

const baseUrl = 'https://api.line.me/v2/bot/'

const request = axios.create({
  baseUrl,
  timeout: 20000,
  headers: {
    Authorization: `Bearer ${config.line_token}`,
    'Content-Type': 'application/json'
  }
})

const api = {}
module.exports = api

api.fetchUserProfile = async (userId) => {
  try {
    const { data } = await request.get(`${baseUrl}profile/${userId}`)
    console.log(data)
    return data
  } catch (err) {
    console.log('invalid request with status code', err.response.status)
    throw new Error(err.message)
  }
}
