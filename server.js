const express = require('express')
const path = require('path')
const history = require('connect-history-api-fallback')
const app = express()

const index = (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'))
}

app.get('/', index)

app.use(history())
app.use(express.static(path.join(__dirname, 'dist')))

app.listen(8080)
