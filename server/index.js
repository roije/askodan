//Libraries
let express = require('express');
let app = express();
var cors = require('cors')
let path = require('path');

let bodyParser = require('body-parser');

const port = 8000;

app.use(cors());
app.options('*', cors())
//Apply middleware
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

let routes = require('./api/combinedRoutes');
app.use(routes);

app.use(express.static(__dirname + '/../public'));

app.get('/', function (req, res) {
    console.log(__dirname)
    res.sendfile(__dirname + '/../public/index.html');
});

app.listen(port, (err) => {
    if(err) {
        console.log('Error when starting server: ', err);
    }
    console.log('Server is listening at port', port);
})