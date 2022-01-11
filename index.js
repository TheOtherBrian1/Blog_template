const express = require('express');
const testData = require('./public/test_data');
const app = express();
const port = process.env.PORT || 3000
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', testData)
    console.log('rendered');
})
app.use(express.static('public'));

app.use((err, res, req, next)=>console.log(err));
  
app.listen(port, () => console.log('listening', port));