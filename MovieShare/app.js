var express = require('express')
var port = process.env.PORT || 3000
var app = express()

app.set('views', './views/pages')
app.set('view engine', 'jade')
//app.use(express.bodyParser())
//app.use(express.static(path.join(__dirname, 'bower_components')))
app.listen(port)

console.log('movienight started on port' + port)

app.get('/', function(req, res){
	res.render('index', {
		title: 'movienight firstpage',
        movies:
            [{title: 'robotCorp',
            _id: 1,
            poster: "https://lh3.googleusercontent.com/-FDvcNGBFrd0/UuL6ppaK9eI/AAAAAAAAAMY/o09eXc8fQUE/%25255BUNSET%25255D.jpg"}]
    })
})

app.get('/admin/movie', function(req, res){
        res.render('admin', {
                title: 'movienight admin'})
})

app.get('/admin/list', function(req, res){
        res.render('list', {
                title: 'movienight list'})
})

app.get('/movie/:id', function(req, res){
        res.render('detail', {
                title: 'movienight detailpage'})
})

