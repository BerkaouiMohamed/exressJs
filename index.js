const express = require('express')
const { join } = require('path')

const app = express()
app.set('views', "public")
app.use(express.static(join(__dirname, "styles")))

app.use((req, res, next) => {
    var date = new Date()
    var day = 6
    var hour = date.getHours()

    if (day <= 5 && hour > 9 && hour < 18) {
        next()
    }
    res.render('error.ejs')
})


app.get('/', function (req, res) {
    res.render('index.ejs')
})

app.get('/ourservices', function (req, res) {
    res.render('ourServices.ejs')
})

app.get('/contact', function (req, res) {
    res.render('contact.ejs')
})

app.listen(5000, () => console.log("hello"))