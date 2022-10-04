const navbarToggle = document.querySelector(".toggle svg");
const closeSideMenu = document.querySelector(".close i");
const sideMenu = document.querySelector(".links");
const overlay = document.querySelector(".overlay");
const searchForm = document.querySelector(".search-form");
const searchBtn = document.querySelector(".search i");


if (navbarToggle) {
    navbarToggle.addEventListener("click", () => {
      sideMenu.style.left = "0";
      overlay.style.display = "block";
    });
  }
  if (closeSideMenu) {
    closeSideMenu.addEventListener("click", () => {
      sideMenu.style.left = "-105%";
      overlay.style.display = "none";
    });
  }
  if (overlay) {
    overlay.addEventListener("click", () => {
      sideMenu.style.left = "-105%";
      overlay.style.display = "none";
    });
  }
  
  searchBtn.addEventListener("click", () => {
    searchForm.classList.toggle("formPos");
  });