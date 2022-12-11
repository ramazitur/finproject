let list = document.querySelector(".fa-list")
let menu = document.querySelector(".headmenu")

list.addEventListener("click", function () {
    menu.classList.toggle("actives");
})