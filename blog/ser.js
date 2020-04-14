const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

var File = '/ht.html';
app.use(express.static(path.join(__dirname + 'blog')));

app.use("/", (req, res) =>
{
	console.log(File);
});

app.listen(3000);