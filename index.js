const addressbtn = document.querySelector("#address-form");
const addressClose = document.querySelector("#Close");

console.log(addressbtn);
console.log(addressClose);

addressbtn.addEventListener("click", function () {
  document.querySelector(".address-form").style.display = "flex";
});

addressClose.addEventListener("click", function () {
  document.querySelector(".address-form").style.display = "none";
});

// Slider ===============================================================
const rightbtn = document.querySelector(".fa-chevron-right");
const leftbtn = document.querySelector(".fa-chevron-left");
const imgNumber = document.querySelectorAll(".slider-content-left-top img");
console.log(imgNumber.length);

let index = 0;

rightbtn.addEventListener("click", function () {
  index = index + 1;
  if (index > imgNumber.length - 1) {
    index = 0;
  }
  document.querySelector(".slider-content-left-top").style.right =
    index * 100 + "%";
});

leftbtn.addEventListener("click", function () {
  index = index - 1;
  if (index <= 0) {
    index = imgNumber.length - 1;
  }
  document.querySelector(".slider-content-left-top").style.right =
    index * 100 + "%";
});
