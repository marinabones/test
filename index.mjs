// подключение express
import express from 'express';

//Это пакет node.js его устанавливать не надо, он уже входит в node.js
import process from 'process';

// указывает корневой путь проекта (Это в проекте указывается /)
let __dirname = process.cwd();

// создаем объект приложения
const app = express();

//Входящие сообщения преобразуются в json
app.use(express.json());

// этой строкой говорим, но у нас сервер будет видеть все файлы в папке /static, но путь не учитывается
app.use(express.static(`${__dirname}/static`));

// определяем обработчик для маршрута "/". Если в статической папке лежит файл, то это не обязательно. Всеравно прочитает
app.get("/*", function(request, response){
    // отправляем ответ
    response.send("<h2>Не найденно файла</h2>");
});

// начинаем прослушивать подключения на 3021 порту или то что указанно в env файле
const port = (process.env.PORT)
    ? process.env.PORT
    : 3021;

process.on('SIGINT', function () {
    process.exit(0);
});

app.listen(port, () => {
    console.log('__dirname', __dirname)
    console.log('pid: ', process.pid);
    console.log('listening on http://localhost:' + port);
});