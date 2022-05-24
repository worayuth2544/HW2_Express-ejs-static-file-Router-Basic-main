const express = require('express')
const game24solver = require('24game-solver/dist/24game-solver')

const app = express()
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to javascript' });
});

app.get('/:n1/:n2/:n3/:n4', (req, res) => {
  console.log(req.params)

  const Regex = /^[1-9]{1,1}$/

  if (!Regex.exec(req.params.n1)) return res.status(403).send('error')
  if (!Regex.exec(req.params.n2)) return res.status(403).send('error')
  if (!Regex.exec(req.params.n3)) return res.status(403).send('error')
  if (!Regex.exec(req.params.n4)) return res.status(403).send('error')

  const result = game24solver([
    parseInt(req.params.n1),
    parseInt(req.params.n2),
    parseInt(req.params.n3),
    parseInt(req.params.n4),
  ], 24)

  res.send({
    msg: result.length > 0 ? "Suceess" : "Fail",
    results: result
  })
})

app.listen(9000, () => {
  console.log('Server is Running')
})
