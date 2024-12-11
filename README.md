<h1 align="center"> auto-gbo-service</h1>

![](/images/for_readme.png)

### Про проект

---

<p>  Сайт з авто сервіс послуг. Сайт розроблений для авто майстра з метою його представлення й реклами його послуг. Ресурс складається з чотирьох сторінок.</p>
<ul> А саме:
  <li><a href="https://julishubina.github.io/trainingWebsite_GBO/#">Головна</a> розміщує інформацію чим займається авто мастер</li>
  <li><a href="https://julishubina.github.io/trainingWebsite_GBO/services.html">Послуги</a> розміщує більш детальний опис послуг які надає СТО</li>
  <li><a href="https://julishubina.github.io/trainingWebsite_GBO/about.html">Про нас</a> інформація про СТО</li>
  <li><a href="https://julishubina.github.io/trainingWebsite_GBO/about.html">Контакти</a> контактна інформація майстра.</li>
</ul>

### Про адоптацію сторінок та їх елементів

---

 <p>Для того щоб сторінки були адаптивні використовуються медіа запити, відносні одиниці для задання розмірів, а також функція calc() для  перерахування розміру шрифту при зміні розміру view port , ця же функція використовується для позиціювання popup при зміні розміру view port. Адаптив деяких секцій реалізовано за допомогою Grid</p>

### Про CSS

---

<ul>Стилі розбила на компоненти для зручності:
	<li><a href="./css/style.css">style.css</a> файл  стилів для головної сторінки</li>
	<li><a href="./css/services.css">services.css</a> файл стилів для сторінки "Послуги"</li>
	<li><a href="./css/about.css">about.css</a> файл стилів для сторінки "Про нас"</li>
	<li><a href="./css/contacts.css">contacts.css</a> файл стилів для сторінки "Контакти"</li>
	<li><a href="./css/reset.css">reset.css </a>скидання стилів</li>
	<li><a href="./css/popup.css">popup.css</a> файл який містить стилі для іконки info , а також інформації яку вона відображає.</li>
	<li><a href="./css/hero__icon.css">hero_icon.css</a> стилі іконки "прапорця" (checkmark) в hero  секції.</li>
	<li><a href="./css/header.css">header.css</a> стилі "шапки" (далі header)сайта.</li>
	<li><a href="./css/footer.css">footer.css</a> стилі "підвалу"(далі footer) сайта.</li>
	<li><a href="./css/burger.css">burger.css</a> стилі "бургер" меню.</li>
	<li><a href="./css/base.css">base.css</a> базові стилі, які притаманні для всіх сторінок.</li>
</ul>

### Про скрипти

---

<p>За допомогою java script на сайте реализовано  декілька подій.</p>
	 <ul>
		А саме:
			<li> "бургер" меню (<a href="./js/burger.js">burger.js</a>)</li>
			<li>зміна кольору фона header  при скролі (<a href="./js/header.js">header.js</a>)</li>
			<li>з'являється іконка  "прапорця" при альбомній орієнтації мобільних телефонів  (<a href="./js/hero_icon_visibility.js">hero_icon_visibility.js</a>)</li>
			<li>скролить фон hero section(<a href="./js/hero_icon.js">hero_icon.js</a>)</li>
			<li> додає стилі при наведенні мишки на hero_icon (по типу hover) (<a href="./js/info_icon-hover.js">info_icon-hover.js</a>)</li>
			<li>змінює колір фону іконки info_icon при перетині її з header та footer(<a href="./js/intersection.js">intersection.js</a>)</li>
			<li>при скролі повільніше скролить hero__background (<a href="./js/parallax.js">parallax.js</a>)</li>
			<li>при клікі на іконці info_icon з’являється повідомлення (<a href="./js/popup.js">popup.js</a>)</li>
			<li> згортає та розгортає спойлер на сторінці "Послуги" (<a href="./js/spoiler.js">spoiler.js</a>)</li>
	 </ul>
	 
### Плани
---
<ol>
	Планую переробити:
	<li>Увесь сайт на single page за  допомогою React.</li>
	<li>Хочу щоб усі одиниці виміру були відносні.</li>
	<li>Parallax переробити бо логіка не дуже.</li>
	<li>Pозібратися з БЕМ та перейменувати класи.</li>
</ol>
