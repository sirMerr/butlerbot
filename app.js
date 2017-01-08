const express = require('express');
const bodyParser = require('body-parser');
const butlerbot = require('./butlerbot');

const app = express();
const port = process.env.PORT || 3000;

// body parser middleware
app.use(bodyParser.urlencoded({extended: true}));

// test route
app.get('/', (req, res) => {
	res.status(200).send('Hello World!');
});

// error handler
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(400).send(err.message);
});

app.listen(port, () => {
	console.log('Slack bot listening on port' + port);
});

app.post('/hello', butlerbot);
