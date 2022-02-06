const menuBar = document.getElementById('menu-bar');
const menu = document.querySelector('.dropdown-menu');
const rMenu = document.querySelector('.right-menu');
const exitForm = document.getElementById('exit-rm-form');
const searchBtn = document.getElementById('search-btn');
const rmForm = document.querySelector('.rm-form');

menu.style.display = "none";

menuBar.addEventListener('click', function(){
    menuBar.classList.toggle("active")
})

$(document).ready(function(){
    $(menuBar).click(function(){
      $(menu).toggle();
    });
});

/* Tasks

- Search Button
- Login

*/ 