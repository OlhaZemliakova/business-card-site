function toogleMenu() {
  const menu = document.querySelector(".header__nav");
  menu.classList.toggle("active");
}

function handleMobileNavigation() {
  const button = document.querySelector(".burger-button");
  button.addEventListener("click", toogleMenu);
}

handleMobileNavigation();
