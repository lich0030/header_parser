var express = require('express')
var app = express()

app.get('/', function(req, res) {
    var ip = req.headers['x-forwarded-for']
    var language = req.headers["accept-language"].split(',')[0]
    var software = req.headers["user-agent"].split('(')[1].split(')')[0]
    
    var obj = {
        "ipaddress": ip,
        "language": language,
        "software": software
    }
    
    
   res.send(obj)
    //res.send(req.headers)
    
})


app.listen(8080, function(){
    console.log("listening on port 8080!")
})