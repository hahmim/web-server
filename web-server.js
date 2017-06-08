/**
 * Created by hahmim on 6/8/2017.
 */
var express = require('express');
var app = express();
require('dotenv').load()

var middleware ={
    requireAuthentication:function (req,res,next) {
        console.log('private route hit');
        next();
    },
    logger:function (req,res,next) {

        console.log('Request: '+new Date().toString()+' '+req.method+' '+ req.originalUrl);

        next();
    }
};
// app.use(middleware.requireAuthentication)
app.use(middleware.logger)

var port = process.env.Port;

app.get('/about',middleware.requireAuthentication,function (req,res) {
    res.send("About Us")
})
app.use(express.static(__dirname+'/public'));
// console.log(__dirname);
app.listen(port,function () {
   console.log('express server listening on port '+port)
});


