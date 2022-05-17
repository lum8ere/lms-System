# lumiere
## Создание lms системы для университета

## Что использовалось 
 

- [React](https://ru.reactjs.org/) - Frontend часть проекта
- [NodeJS](https://nodejs.org/en/) - backend часть проект
- [express](https://expressjs.com/ru/) - Фреймворк для серверной части проекта
- [postgresql](https://www.postgresql.org/) - База данных

## Installation

[Node.js](https://nodejs.org/) v14+ для запуска.

Для запуска клиента и сервера нужно прописать следующие команды в корневой папке проекта.

Для сервера:
```sh
cd server
npm i
npm run dev
```
В папке *server* нужно создать файл *.env* с данными параметрами:
```sh
PORT=ПОРТ ДЛЯ СЕРВЕРА
DB_name=НАЗВАНИЕ ДБ
DB_user=ИМЯ ПОЛЬЗОВАТЕЛЯ postgresql
DB_password=ПАРОЛЬ ОТ БД
DB_host=ХОСТ БД
DB_PORT=ПОРТ БД
SECRET_KEY=СЕКРЕТНЫЙ КЛЮЧ ДЛЯ JWT
timeToken=ВРЕМЯ ЖИЗНИ ТОКЕНА
```
Для клиента:
```sh
cd client
npm i
npm start
```
