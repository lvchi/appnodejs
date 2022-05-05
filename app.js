const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('codestar devops!!!'))
app.listen(3000, () => console.log('Check container ecs!!!'))