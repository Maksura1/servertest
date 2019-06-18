const express = require('express')
const app = express()

app.get('/profile', (req, res) => {
  res.send('Hi')
})


app.listen(3000, ()=>{
  console.log('server listening to port 3000')
})
