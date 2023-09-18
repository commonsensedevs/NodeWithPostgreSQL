const express = require('express');
const debug = require('debug')('app');
const path = require('path');
const app = express();
const ejs = require('ejs');
const port = 3000;
const sessionRouter = require('./src/routers/sessionRouter');
const sessions = require('./src/data/sessions.json');
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', './src/views');
app.set('view engine', 'ejs');



app.use('/sessions', sessionRouter);

app.get('/', (req, res) =>{
    res.render('index', {title: 'Home', data: [{name: 'Gomti', gender: 'Woman'}, {name: 'Flavio', gender: 'Man'}, {name: 'Parth', gender: 'Man'}]});
});

app.listen(port, () => 
{
debug("Server is running on port ${port}")
});