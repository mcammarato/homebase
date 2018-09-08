var express = require('express'),
    path    = require('path'),
    proxy   = require('http-proxy-middleware'),
    app     = express();

/* Static Shortcuts
********************/

// Angular
app.use('/angular', express.static(__dirname + '/node_modules/angular'));
// Angular Route
app.use('/angular-route', express.static(__dirname + '/node_modules/angular-route'));
// JS
app.use('/js', express.static(__dirname + '/client/js'));
// Routes
app.use('/routes', express.static(__dirname + '/client/js/routes'));
// Controllers
app.use('/controllers', express.static(__dirname + '/client/js/controllers'));
// Templates
app.use('/templates', express.static(__dirname + '/client/views/templates'));
// Pages
app.use('/pages', express.static(__dirname + '/client/views/pages'));
// CSS
app.use('/css', express.static(__dirname + '/client/css'));
// less
app.use('/less', express.static(__dirname + '/client/less'));
// Foundation
app.use('/foundation', express.static(__dirname + '/node_modules/foundation-sites/dist/css'));
// Images
app.use('/images', express.static(__dirname + '/client/images'));


/* Routes
*********/

// Root - Handle serving both client side angular and server side node routes from the same app
app.use(function(req, res) {
    res.sendFile(path.join(__dirname, '/client/views', 'index.html'));
});

// Server
app.set('port', (process.env.PORT || 6300));
app.listen(app.get('port'), function() {
  console.log('Listening on ' + app.get('port'));
});
