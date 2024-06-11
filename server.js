const express = require('express')
const {resolve} = require('patch')
const app = express()

app.use('/', 
    express.static(
      resolve(
        --dirname,
        './build'
      )
    )
)

app
.listen(process.env.PORT || 3000, (err) => {
  if (err) {return console.log(err) }

  console.log('Tudo funcionando!')
})