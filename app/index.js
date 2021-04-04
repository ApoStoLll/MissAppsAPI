// подключение express
const express = require("express");
//const { request } = require("node:http");
// создаем объект приложения
const app = express();

//Создание информации о пользователе после установки прилы(на сервере)
app.post("/install", (request, response) => {
    response.send("request.body")
});

//Получение информации о пользователе(надо вернуть инфу)
app.post("/install/:userId", (request, response) => {
    response.send("request.body")
});

//Обновить пуш токен
app.post("/install/:userId/push-token", (request, response) => {
    response.send("request.body")
});

//Клик на пуш
app.post("/notifications/clicked", (request, response) => {
    response.send("request.body")
});

app.get("/test", (request, response) => {
    response.send(request.headers)
});
// начинаем прослушивать подключения на 3000 порту
app.listen(3000);