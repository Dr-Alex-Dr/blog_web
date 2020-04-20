const express = require('express');

const app = express();
let port = 8080;

app.all('*', (req, res) =>
{
	console.log('method: ' + req.method);
	console.log('query: ' + req.query);
	console.log('protocol: ' + req.protocol);
	console.log('secure: ' + req.secure);
	console.log('accept: ' + req.accepts(['text/html', 'aplication/json']));
	console.log('content type: ' + req.get('Content-Type'));

	console.log('-------------------------------');
	res.end();

});

app.listen(port);