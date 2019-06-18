const express = require('express')
const app = express()

// app.get('/profile', (req, res) => {
//   res.send('Hi')
// })
//
// app.get('/first', (req, res) => {
//   res.send('Hi, how are you doing?')
// })

app.get('/profile', (req, res) => {
  res.sendfile('./profile.html')
})

app.listen(3000, ()=>{
  console.log('server listening to port 3000')
})
