### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


### `Описание тестового задания`

Разработка JavaScript приложения по авторизации пользователя и отображению его профиля, с использованием бекенда ConnectyCube

Предварительные действия:
● Зарегистрировать аккаунт в ConnectyCube Admin panel, создать приложение и
сохранить credentials (app id, auth key, auth secret)
https://admin.connectycube.com
Задача:
● Создать простое Web приложение с 3мя ‘экранами/блоками’:
a. User Sign Up
b. User Sign In
c. Show user profile
● Базовый блок для отображения - User Sign Up - где юзер может ввести login,
fullname, password и нажать кнопку Register для создания пользователя.
● После регистрации пользователя - показываем блок User Sign In - где юзер может
ввести login, password и нажать кнопку LogIn.
● После LogIn - показываем 3й блок - профиль залогиненого пользователя.
Технические детали работы с ConnectyCube бекенд:
Entry point по работе с JS SDK ConnectyCube https://developers.connectycube.com/js/
● Первым делом необходимо подключить библиотеку
● Далее - выполнить инициализацию, используя credentials полученные выше
https://developers.connectycube.com/js/?id=initialize
● Далее, перед любым использованием ConnectyCube API - создать сессию
https://developers.connectycube.com/js/authentication-and-users?id=create-session-tok
en
● Операции с пользователями:
○ Sign up
https://developers.connectycube.com/js/authentication-and-users?id=user-signup
○ Sign In
https://developers.connectycube.com/js/authentication-and-users?id=upgrade-se
ssion-token-user-login

Для разработки можно использовать любой фреймворк/подход (React, Angular, Vanilla JS,
Bootstrap etc..)
