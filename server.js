var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
const swaggerUi = require('swagger-ui-express');
const openApiDoc = require('./openApiDoc')

//Swagger documentation route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiDoc["openApiDoc"]));

app.get('/',(req,res)=>{
  res.send('Welcome to my imaginary stocks REST API! \n To see the docs, please route to /api-docs')
})

var routes = require('./api/routes/stocksRoutes'); //importing route
routes(app);

app.listen(port);

console.log('Stocks RESTful API server started on: ' + port);


