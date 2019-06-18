const path = require('path') 
const express = require('express')
const app = express()

app.use(express.static(path.join(__dirname, 'client')))
//
// app.get('/profile', (req, res) => {
//   res.send('Hi')
// })
//
// app.get('/first', (req, res) => {
//   res.send('Hi, how are you doing?')
// })

app.get('/', (req, res) => {
  res.sendfile('client/profile.html')
})

app.listen(3000, ()=>{
  console.log('server listening to port 3000')
})
