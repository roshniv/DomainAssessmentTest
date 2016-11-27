

var http = require('http');
var app = require('./app')();
require('./mocks/user/user-api')(app);
require('./mocks/survey/survey-api')(app);
require('./mocks/dashboard/dashboard-api')(app);

var port = process.env.PORT || 3000; 		// set our port

http.createServer(app).listen(port, function () {
  console.log("Server ready at http://localhost:" + port);
});


