const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://soNomad:222888ma@cluster0.9v9d232.mongodb.net/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

const express = require('express')
const app = express()
const PORT = 3500
app.use(express.json())

app.use(require("./routes/students.route"));

app.listen(PORT, () => {
    console.log('Порт запущен по адресу http://localhost:' + PORT);
})