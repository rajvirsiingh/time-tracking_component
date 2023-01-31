document.querySelector("#w").addEventListener("click", function () {
  document.querySelector("#w").style.opacity = 1;
  document.querySelector("#m").style.opacity = 0.5;
  document.querySelector("#d").style.opacity = 0.5;

  for (let i = 0; i <= 6; i++) {
    document.querySelectorAll(".weekly")[i].classList.remove("hide");
    document.querySelectorAll(".daily")[i].classList.add("hide");
    document.querySelectorAll(".monthly")[i].classList.add("hide");
  }
});
document.querySelector("#m").addEventListener("click", function () {
  document.querySelector("#m").style.opacity = 1;
  document.querySelector("#d").style.opacity = 0.5;
  document.querySelector("#w").style.opacity = 0.5;
  for (let i = 0; i <= 6; i++) {
    document.querySelectorAll(".monthly")[i].classList.remove("hide");
    document.querySelectorAll(".daily")[i].classList.add("hide");
    document.querySelectorAll(".weekly")[i].classList.add("hide");
  }
});
document.querySelector("#d").addEventListener("click", function () {
  document.querySelector("#d").style.opacity = 1;
  document.querySelector("#w").style.opacity = 0.5;
  document.querySelector("#m").style.opacity = 0.5;
  for (let i = 0; i <= 6; i++) {
    document.querySelectorAll(".daily")[i].classList.remove("hide");
    document.querySelectorAll(".weekly")[i].classList.add("hide");
    document.querySelectorAll(".monthly")[i].classList.add("hide");
  }
});
