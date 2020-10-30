// создаем переменную, в которую вложим кнопку меню
let menuToggle = document.querySelector("#menu-toggle");
//создаем переменну в которую положим кнопку меню
let menu = document.querySelector(".sidebar");
//отслеживаем клик по кнопке меню и запускаем функцию
menuToggle.addEventListener("click", function (event) {
  //отменяем стндартное поведение ссылки
  event.preventDefault();
  //вешаем класс на меню, когда кликнули по кнопке
  menu.classList.toggle("visible");
});
