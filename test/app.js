var request = require('request');
request('http://localhost:9739/Handler.ashx?type=getAllClass', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body)
    }
});
