const path = require('path')
const Express = require('express')

const app = Express()

app.use(Express.static(path.join(__dirname, '../build'), {maxAge: '10 days'}))

app.get('/', (req, res) => {
  res.set('Cache-Control', 'no-cache')
  res.sendFile(path.join(__dirname, 'build/index.html'))
})

app.listen(8080, () => {
  console.log(`Listening on 8080`)
})
