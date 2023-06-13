const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hi This is Narendra, its my 1st Gitlab CI-CD practice Lab-1')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
