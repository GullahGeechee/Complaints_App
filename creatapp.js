

const express = require('express')

const app = express()

const port = 5000

//set up view engine
app.set('view engine', 'ejs')
app.set('views', './Views')

// root route 
app.get('/', (req, res) => {
    res.render("311info", {


    })

})



app.listen(port,() => {
    console.log(`run forest! ${port}`)
}) 