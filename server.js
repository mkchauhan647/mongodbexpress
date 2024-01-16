const express = require('express')

const app = express();
const indexRoutes = require('./routes/index')


app.set('view engine','ejs')

app.use(express.static('public'))
app.use('/',indexRoutes)
app.get('/',(req,res,next)=>{

    res.render('index')

// res.sendFile(__dirname + '/public/index.html')
    // res.send("Hello Manoj")
})





app.listen(8000,"127.0.0.1",()=>{
    console.log("Server is listening at 8000")
});