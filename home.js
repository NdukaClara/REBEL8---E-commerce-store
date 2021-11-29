//js for navbar
const menuIcon = document.querySelector(".menu_icon");
const menuClose = document.querySelector(".menu_close");
const navList = document.querySelector(".nav_list");

const navOpen = () => {
  navList.classList.add("show");
  document.body.style =
    "visibility: visible; height: 100vh;  width: 100vw; overflow: hidden;";
};

const navClose = () => {
  navList.classList.remove("show");
  document.body.style =
    "visibility: visible; height: initial; width: 100%; overflow-x: hidden;";
};

menuIcon.addEventListener("click", navOpen);
menuClose.addEventListener("click", navClose);





// initial js for product carousel

// let span = document.getElementsByTagName('span');
// let product = document.getElementsByClassName("featured_products_info");
// let  $1 = 0;

// span[1].onclick = () => {
//   $1--;
//   for(var i of product)
//   {
//     if ($1 == 0) { i.style.left = "0px"; }
//     if ($1 == 1) { i.style.left = "-740px"; }
//     if ($1 == 2) { i.style.left = "-1480px"; }
//     if ($1 == 3) { i.style.left = "-2220px"; }
//     if ($1 < 0) { $1 = 0;}
//   }
// }

// span[2].onclick = () => {
//   $1++;
//   for (var i of product) {
//     if ($1 == 0) {
//       i.style.left = "0px";
//     }
//     if ($1 == 1) {
//       i.style.left = "-740px";
//     }
//     if ($1 == 2) {
//       i.style.left = "-1480px";
//     }
//     if ($1 == 3) {
//       i.style.left = "-2220px";
//     }
//     if ($1 == 4) {
//       i.style.left = "-2960px";
//     }
//     if ($1 > 4) {
//       $1 = 4;
//     }
//   }
// };


// js for carousel button

const featuredProductsWrapper = [
  ...document.querySelectorAll(".featured_products_wrapper"),
];
const nxtBtn = [...document.querySelectorAll(".nxt_btn")];
const preBtn = [...document.querySelectorAll(".pre_btn")];

featuredProductsWrapper.forEach((item, i) => {
  let containerDimenstions = item.getBoundingClientRect();
  let containerWidth = containerDimenstions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});





// js for deal of the week countdown
const countdown = () => {
  const countDate = new Date("December 10, 2021 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  document.querySelector(".day").innerText = textDay;
  document.querySelector(".hour").innerText = textHour;
  document.querySelector(".minute").innerText = textMinute;
  document.querySelector(".second").innerText = textSecond;

};

setInterval(countdown, 1000);





// product slider js
const productImg = document.getElementById("product_img");
const smallImg = document.getElementsByClassName("small_img");

smallImg[0].onclick = () => {
  productImg.src = smallImg[0].src;
};

smallImg[1].onclick = () => {
  productImg.src = smallImg[1].src;
};

smallImg[2].onclick = () => {
  productImg.src = smallImg[2].src;
};

smallImg[3].onclick = () => {
  productImg.src = smallImg[3].src;
};






// js for account toggle form

function register() {
  const LoginForm = document.getElementById("loginForm");
  const RegForm = document.getElementById("regForm");
  const Indicator = document.getElementById("indicator");

  RegForm.style.transform = "translateX(0px)";
  LoginForm.style.transform = "translateX(0px)";
  Indicator.style.transform = "translateX(60px)";
}
function login() {
  const LoginForm = document.getElementById("loginForm");
  const RegForm = document.getElementById("regForm");
  const Indicator = document.getElementById("indicator");

  RegForm.style.transform = "translateX(300px)";
  LoginForm.style.transform = "translateX(300px)";
  Indicator.style.transform = "translateX(-60px)";
}

