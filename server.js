const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const noteRoute = require('./routes/noteRoute');
const app = express();
const port = 3000;

app.use(cors());
app.use (bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('welcome to Home!'));

app.use('/api/v1', noteRoute);






app.listen(port, () => console.log(`app listening on port ${port}!`));