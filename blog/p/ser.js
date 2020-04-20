const http = require("http");
const fs = require("fs");
const express = require('express');
const bodyParser = require('body-parser');

const app = express();



  
http.createServer(function(request, response){
      
    console.log(`Запрошенный адрес: ${request.url}`);
    // получаем путь после слеша
    const filePath = request.url.substr(1);
    // смотрим, есть ли такой файл
    fs.access(filePath, fs.constants.R_OK, err => {
        // если произошла ошибка - отправляем статусный код 404
        if(err){
            response.statusCode = 404;
            response.end("Resourse not found!");
        }
        else{
            fs.createReadStream(filePath).pipe(response);
        }


const par = bodyParser.urlencoded({extended: false});


app.get("/reg", par, (req, res) => 
{
    res.sendFile(__dirname + "/reg.html");
});

app.post("/reg", par, (req, res) =>
{
    if(!req.body)
    {
        return res.sendStatus(400);
    }
    console.log(req.body);
    fs.writeFile("log.txt", `${req.body.mail} - ${req.body.pas}`);
    fs.writeFile("log.txt", "ghbdtn");

});

});



}).listen(3002, function(){
    console.log("Server started at 3000");
});