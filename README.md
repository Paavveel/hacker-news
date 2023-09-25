<div align="center">
 <img src="https://img.shields.io/badge/React-202124?logo=react&logoColor=61DAFB&style=flat-square" />
 <img src="https://img.shields.io/badge/Redux-593D88?style=flat-square&logo=redux&logoColor=white" />
 <img src="https://img.shields.io/badge/Redux%20Toolkit-593D88?style=flat-square&logo=redux&logoColor=white" />
 <img src="https://img.shields.io/badge/RTK%20Query-593D88?style=flat-square&logo=redux&logoColor=white" />
 <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" />
 <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" />
 <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" />
 <img src="https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white" />
 <img src="https://img.shields.io/badge/Node.JS-339933?style=flat-square&logo=node.js&logoColor=white" />
 <img src="https://img.shields.io/badge/Express.js-464646?style=flat-square&logo=express&logoColor=white" />
</div>

<h3 align="center">
  <a href="#about">О проекте</a>
  •
  <a href="#techs">Технологии</a>
  •
  <a href="#functionality">Функциональность</a>
  •
  <a href="#install">Установка</a>
</h3>

<h4 align=center>Тестовое задание для Avito. Сервис с новостями.</h4>

<h3 align="center">
  <a href="https://hacker-news-paavveel.onrender.com" title="Link">Demo</a> 
  •
  <a href="https://github.com/avito-tech/internship_frontend_2022">Ссылка на тестовое задание</a>
</h3>

<h1 id="about">О проекте</h1>

<table>
  <tbody>
    <tr>
      <td>
        <p align="center"><b>Выполнен <br>как тестовое задание для Avito internship frontend 2022</b><p>
        <p align="center">Новостной сервис на основе Hacker News API. Написана как Frontend, так и Backend часть (BFF для инкапсуляции запросов к основному API).</p>
      </td>
      <td width="70%"><img src="https://user-images.githubusercontent.com/65166970/204088725-8f67c689-26d2-49cd-ac1f-4d48c5437e54.gif"/></td>
    </tr>
  </tbody>
</table>

<h1 id="techs">Технологии</h1>

<table>
  <thead>
    <tr>
      <th width="200px">Frontend</th>
      <th width="200px">Backend</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <ul>
          <li>TypeScript</li>
          <li>React</li>
          <li>React Router</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Reduxt</li>
          <li>Redux Toolkit</li>
          <li>RTKQuery</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>TypeScript</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

<h1 id="functionality">Функциональность</h1>

<h3>Backend</h3>

<table>
  <thead>
    <tr>
      <th>Метод</th>
      <th width="150px">Маршрут</th>
      <th>Описание</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>GET</code></td>
      <td><code>/posts</code></td>
      <td>возвращает массив <code>id[]</code> последних 100 новостей</td>
    </tr>
    <tr>
      <td><code>GET</code></td>
      <td><code>/post?id={id}</code></td>
      <td>Возвращает объект новостного поста с деревом коментариев, в каждом узле которого содержится информация о количестве дочерних узлов
      </td>
    </tr>
    <tr>
      <td><code>GET</code></td>
      <td><code>/item?id={id}</code></td>
      <td>Возвращает объект по его <code>id</code></td>
    </tr>
  </tbody>
</table>

<h3>Frontend</h3>

<ul>
  <li>Показывает последние 100 новостей в виде списка, отсортированного по дате, самые свежие сверху (реализована бесконечная прокрутка - загружается по 10 новостей)</li>
  <li>Список новостей обновляется каждые 60 секунд без участия пользователя, так же есть кнопка для принудительного обновления списка новостей</li>
  <li>По клику на новость происходит переход на страницу новости</li>
  <li>На странице новости: отображается новость, колличетво комментариев, сами комментарии</li>
  <li>Корневые комментарии загружаются сразу, все подкомментарии по клику - посомтреть ответы, есть кнопка для принудительного обновления комментариев</li>
  <li>Отзывчивая верстка, адаптированная под различные разрешения экрана</li>
</ul>

<h1 id="install">Установка</h1>
<ol>
<li>
  <p>Создаем рабочую директорию с произвольным именем:</p>
<pre>
mkdir <имя рабочей директории>
</pre>
</li>
<li>
  <p>Клонируем репозиторий в рабочую директорию:</p>
  <ul>
  <li>
    <p>Переходим в рабочую директорию:</p>
<pre>
cd <имя рабочей директории>
</pre>
  </li>
  <li>
    <p>Клонируем репо:</p>
<pre>
git clone https://github.com/Paavveel/hacker-news.git
</pre>
  </li>
    <li>
      В рабочей директории должна появиться папка проекта <code>hacker-news</code>
    </li>
  </ul>
</li>
<li>
  <p>Переходим в папку с проектом:</p>
<pre>
cd hacker-news
</pre>
</li>
<h3>Backend</h3>
<li>
  <p>Переходим в директорию с бэкендом:</p>
<pre>
cd server
</pre>
</li>
<li>
  <p>Устанавливаем зависимости:</p>
<pre>
yarn install
</pre>
</li>
<li>
  <p>Запускаем сервер:</p>
<pre>
yarn start
</pre>
</li>
<h3>Frontend</h3>
<li>
  <p>Переходим в директорию с фронтендом:</p>
<pre>
cd client
</pre>
</li>
<li>
  <p>Устанавливаем зависимости:</p>
<pre>
yarn install
</pre>
</li>
<li>
  <p>Запускаем проект:</p>
<pre>
yarn start
</pre>
</li>
</ol>
