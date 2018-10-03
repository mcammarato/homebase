var express     = require('express'),
    path        = require('path'),
    proxy       = require('http-proxy-middleware'),
    morgan      = require('morgan'),
    bodyParser  = require('body-parser'),
    multer      = require('multer'),
    mysql       = require('mysql'),
    app         = express();
    router      = express.Router();


// HTTP Logs
app.use(morgan('short'))

// Body Parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

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
// Services
app.use('/services', express.static(__dirname + '/client/js/services'));
// Directives
app.use('/directives', express.static(__dirname + '/client/js/directives'));
// Templates
app.use('/templates', express.static(__dirname + '/client/views/templates'));
// Pages
app.use('/pages', express.static(__dirname + '/client/views/pages'));
// Foundation
app.use('/foundation', express.static(__dirname + '/node_modules/foundation-sites/dist/css'));
// Images
app.use('/images', express.static(__dirname + '/client/assets/images'));
// Less
app.use('/less', express.static(__dirname + '/client/assets/source/less'));
// Dist
app.use('/css', express.static(__dirname + '/client/assets/dist/css'));

/* Connect to mysql
******************/
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'hexi fate',
  database: 'todos'
})

// Get connection
function getConnection(){
  return pool
}

/* Routes
*********/
app.use(router);

router.post('/api/todo', function(req, res, next){

  for (var i = 0; i < req.body.length; i++) {
    todo = req.body[i].title
    done = req.body[i].done
  }

  // Write user to db
  const queryString = 'INSERT IGNORE INTO todos (todo, done) VALUES (?, ?)';
  getConnection().query(queryString, [todo, done], function(err, results, fields){
    if (err) {
      console.log('Failed to insert new todo ' + err);
      return
    }
    console.log('inserted a new todo with id: ' + results.insertId)    
  })
    
  res.end()
})


// Root - Handle serving both client side angular and server side node routes from the same app
app.use(function(req, res) {
    res.sendFile(path.join(__dirname, '/client/views', 'index.html'));
});

// Server
app.set('port', (process.env.PORT || 6300));
app.listen(app.get('port'), function() {
  console.log('Listening on ' + app.get('port'));
});
