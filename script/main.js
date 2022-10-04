
const deptBtn1 = document.getElementById("dept1");
const deptBtn2 = document.getElementById("dept2");
const deptBtn3 = document.getElementById("dept3");
const deptBtn4 = document.getElementById("dept4");
const deptBtn5 = document.getElementById("dept5");
const deptBtn6 = document.getElementById("dept6");
const deptBody = document.querySelector(".dept__content");
const deptSidebar = document.querySelectorAll(".dept__sidebar li");



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
    el.classList.remove('active1');
    this.classList.add('active1')
  })
}
