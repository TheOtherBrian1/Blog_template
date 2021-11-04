const express = require('express');
const testData = require('./public/test_data');
const app = express();
const port = 3000;
app.set('view engine', 'pug');

app.use(express.static('public'));
app.get('/', (req, res) => {
    console.log(testData);
    //res.send('nothing');
    res.render('index', testData)
})
  
app.listen(port, () => console.log('listening', port));