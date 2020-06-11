const express = require('express');
const app = express();
const morgan = require('morgan');

console.log('Server is on')

//settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middleweares
app.use(morgan('combined'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//routes
app.use(require('./routes/index'));
app.use('/api/horses',require('./routes/horses'));
app.use('/api/users', require('./routes/users'));


//starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});
