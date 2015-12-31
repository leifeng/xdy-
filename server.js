var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();
var compiler = webpack(config);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/data', function (req, res) {
    res.type('application/json');
    request('http://localhost:9739/Handler.ashx?type=getAllClass', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.end(body)
        }else{
            res.end(error)
        }
    });

});
app.post('/addClass', function (req, res) {
    request('http://localhost:9739/Handler.ashx?type=addClass&name='+req.body.name, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.end(body)
        }else{
            res.end(error)
        }
    });
});
app.post('/delClass', function (req, res) {
    request('http://localhost:9739/Handler.ashx?type=delClass&id='+req.body.id, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.end(body)
        }else{
            res.end(error)
        }
    });
});
app.post('/reDelClass', function (req, res) {
    request('http://localhost:9739/Handler.ashx?type=reDelClass&id='+req.body.id, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.end(body)
        }else{
            res.end(error)
        }
    });
});
app.post('/editClass', function (req, res) {
    console.log(req.body)
    request('http://localhost:9739/Handler.ashx?type=editClass&name='+req.body.name+'&id='+req.body.id, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.end(body)
        }else{
            res.end(error)
        }
    });
});

app.listen(3000, 'localhost', function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Listening at http://localhost:3000');
});

