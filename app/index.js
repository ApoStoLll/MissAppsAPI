// подключение express
const express = require("express");
//const { request } = require("node:http");

// создаем объект приложения
const app = express();
app.use(express.urlencoded({ extended: true }))
//Создание информации о пользователе после установки прилы(на сервере)
app.post("/install", (request, response) => {
    const userId = request.body.user_id
    const timezone = request.body.timezone
    const appPackage = request.body.app_package
    response.send({ 'allow' : true, 'entity' : "kek", goto : "pornhub.com" })
});

//Получение информации о пользователе(надо вернуть инфу)
app.post("/install/:userId", (request, response) => {
    const userId = request.params.userId
    response.send({ 'allow' : true, 'entity' : "kek", goto : "pornhub.com" })
});

//Обновить пуш токен
app.post("/install/:userId/push-token", (request, response) => {
    const userId = request.params.userId
    const pushToken = request.body.push_token
    console.log(pushToken)
    response.send({'entity' : "kek"})
});

//Клик на пуш
app.post("/notifications/clicked", (request, response) => {
    const installId = request.body.install_id
    const notificationId = request.body.notification_id
    const sentAt = request.body.sent_at
    const sentId = request.body.sent_id
});

// начинаем прослушивать подключения на 3000 порту
app.listen(3000);
