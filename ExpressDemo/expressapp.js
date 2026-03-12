const express = require('express');
const routes = require('./routes/routes')

const port = 5555;

const app = express();

app.use('/api/v1', routes);


//server listen
app.listen(port, function(){
    console.log("Express Server is listening on Port : " + port);
});