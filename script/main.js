let navbarToggle = document.querySelector(".toggle i");
let closeSideMenu = document.querySelector(".close i");
let sideMenu = document.querySelector(".links");
let overlay = document.querySelector(".overlay");
let searchForm = document.querySelector(".search-form");
let searchBtn = document.querySelector(".search i");
let deptBtn1 = document.getElementById("dept1");
let deptBtn2 = document.getElementById("dept2");
let deptBtn3 = document.getElementById("dept3");
let deptBtn4 = document.getElementById("dept4");
let deptBtn5 = document.getElementById("dept5");
let deptBtn6 = document.getElementById("dept6");
let deptBody = document.querySelector(".dept__content");
let deptSidebar = document.querySelectorAll(".dept__sidebar li");

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

deptBtn1.addEventListener("click", () => {
  deptBody.innerHTML = `
  <div class="content__header">
  <img src="images/dept-1.jpg" alt="content-img">
</div>
<div class="content__body">
  <h3>About the Cardiology</h3>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis mollitia dolor molestiae
      eveniet unde consectetur laborum debitis, ipsum error nulla reiciendis quasi qui natus
      impedit at saepe quidem asperiores voluptate.</p>
  <ul class="content__feature">
      <li>
          <i class="icofont-check-circled"></i>
          <span>Care About Your Health</span>
      </li>
      <li >
          <i class="icofont-check-circled"></i>
          <span>Fast and Flex Service</span>
      </li>
      <li>
          <i class="icofont-check-circled"></i>
          <span>Professional Doctor’s </span>
      </li>
      <li>
          <i class="icofont-check-circled"></i>
          <span>Professional Nurs   es</span>
      </li>
  </ul>
  <a href="#" class="__btn">Contact Us</a>
</div>
  `;
});
deptBtn2.addEventListener("click", () => {
  deptBody.innerHTML = `
  <div class="content__header">
  <img src="images/dept-4.jpg" alt="content-img">
</div>
<div class="content__body">
  <h3>About the Neuter</h3>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis mollitia dolor molestiae
      , ipsum error nulla reiciendis quasi qui natus
      voluptate.</p>
  <ul class="content__feature">
      <li>
          <i class="icofont-check-circled"></i>
          <span>Care About Your Health</span>
      </li>
      <li >
          <i class="icofont-check-circled"></i>
          <span>Fast and Flex Service</span>
      </li>
      <li>
          <i class="icofont-check-circled"></i>
          <span>Professional Doctor’s </span>
      </li>
      <li>
          <i class="icofont-check-circled"></i>
          <span>Professional Nurs   es</span>
      </li>
  </ul>
  <a href="#" class="__btn">Contact Us</a>
</div>
  `;
});
deptBtn3.addEventListener("click", () => {
  deptBody.innerHTML = `
  <div class="content__header">
  <img src="images/dept-3.jpg" alt="content-img">
</div>
<div class="content__body">
  <h3>About the Diagnostics</h3>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis mollitia dolor molestiae
      voluptate.</p>
  <ul class="content__feature">
      <li>
          <i class="icofont-check-circled"></i>
          <span>Care About Your Health</span>
      </li>
      <li >
          <i class="icofont-check-circled"></i>
          <span>Fast and Flex Service</span>
      </li>
      <li>
          <i class="icofont-check-circled"></i>
          <span>Professional Doctor’s </span>
      </li>
      <li>
          <i class="icofont-check-circled"></i>
          <span>Professional Nurs   es</span>
      </li>
  </ul>
  <a href="#" class="__btn">Contact Us</a>
</div>
  `;
});
deptBtn4.addEventListener("click", () => {
  deptBody.innerHTML = `
  <div class="content__header">
  <img src="images/dept-2.jpg" alt="content-img">
</div>
<div class="content__body">
  <h3>About the Dental</h3>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis mollitia dolor molestiae
      voluptate.</p>
  <ul class="content__feature">
      <li>
          <i class="icofont-check-circled"></i>
          <span>Care About Your Health</span>
      </li>
      <li >
          <i class="icofont-check-circled"></i>
          <span>Fast and Flex Service</span>
      </li>
      <li>
          <i class="icofont-check-circled"></i>
          <span>Professional Doctor’s </span>
      </li>
      <li>
          <i class="icofont-check-circled"></i>
          <span>Professional Nurs   es</span>
      </li>
  </ul>
  <a href="#" class="__btn">Contact Us</a>
</div>
  `;
});
deptBtn5.addEventListener("click", () => {
  deptBody.innerHTML = `
  <div class="content__header">
  <img src="images/dept-5.jpg" alt="content-img">
</div>
<div class="content__body">
  <h3>About the Ophthalmology</h3>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis mollitia dolor molestiae
      voluptate.</p>
  <ul class="content__feature">
      <li>
          <i class="icofont-check-circled"></i>
          <span>Care About Your Health</span>
      </li>
      <li >
          <i class="icofont-check-circled"></i>
          <span>Fast and Flex Service</span>
      </li>
      <li>
          <i class="icofont-check-circled"></i>
          <span>Professional Doctor’s </span>
      </li>
      <li>
          <i class="icofont-check-circled"></i>
          <span>Professional Nurs   es</span>
      </li>
  </ul>
  <a href="#" class="__btn">Contact Us</a>
</div>
  `;
});
deptBtn6.addEventListener("click", () => {
  deptBody.innerHTML = `
  <div class="content__header">
  <img src="images/dept-6.jpg" alt="content-img">
</div>
<div class="content__body">
  <h3>About the Emergency</h3>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis mollitia dolor molestiae
      voluptate.</p>
  <ul class="content__feature">
      <li>
          <i class="icofont-check-circled"></i>
          <span>Care About Your Health</span>
      </li>
      <li >
          <i class="icofont-check-circled"></i>
          <span>Fast and Flex Service</span>
      </li>
      <li>
          <i class="icofont-check-circled"></i>
          <span>Professional Doctor’s </span>
      </li>
      <li>
          <i class="icofont-check-circled"></i>
          <span>Professional Nurs   es</span>
      </li>
  </ul>
  <a href="#" class="__btn">Contact Us</a>
</div>
  `;
});
deptSidebar.forEach((el)=>{
  el.addEventListener('click',RemoveClassActive)
})
function RemoveClassActive(){
  deptSidebar.forEach((el)=>{
    el.classList.remove('active');
    this.classList.add('active')
  })
}