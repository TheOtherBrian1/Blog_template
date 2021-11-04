const express = require('express');
const testData = require('./public/test_data');
const app = express();
const port = 2000;
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    console.log('req');
    res.render('index', testData)
    console.log('rendered');
})
app.use(express.static('public'),()=>console.log('sc'));

app.use((err, res, req, next)=>console.log(err));
  
app.listen(port, () => console.log('listening', port));