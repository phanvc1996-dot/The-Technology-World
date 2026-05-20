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
