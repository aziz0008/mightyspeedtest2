const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')

const app = express()
app.use(morgan('combine'))
app.use(bodyparser.json())
app.use(cors())

app.get('/files/1', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../files/1'))
  console.log('file sent')
})

app.listen(process.env.PORT || 8081)
