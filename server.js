const express = require('express')
const cors = require('cors')
const data = require('./rwot.json')
const app = express()

const PORT = 8082 

app.use(cors())
app.get('/tweets', (req, res) =>{
    const tweets = data.RWOT?.sort((a,b) => b.likes_count - a.likes_count)
    res.json(tweets)
})

app.listen(PORT, () => console.log(`App listening on ${PORT}`))