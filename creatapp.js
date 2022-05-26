

const express = require('express')

const app = express()
app.use(express.static('public'))

const port = 5001



// root route 
app.get('/', (req, res) => {
   res.send('testing')

})





app.listen(port,() => {
    console.log(`run forest! ${port}`)
}) 