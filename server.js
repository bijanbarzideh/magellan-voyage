var express = require('express');
var bodyParser = require('body-parser');


var app = express();

app.use(express.static(__dirname + '/public'));


app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function(req, res){
	// res.send('<h1> Hello Squirrel </h1>');
	console.log('ET phone home...', req.query);
	res.sendFile('index.html', {root : './public/html'});
});

app.use(function( req, res, next){ // error-handler
    console.log('!!!')
    // console.error(err.stack)
    // https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
    res.status(404).send({
        status: 404,
        message: 'Hold the door!'
    })
});
app.listen(process.env.PORT || 9000, function() {
    console.log('Server up and running!');
})
