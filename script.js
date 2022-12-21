const menuIcon = document.querySelector(".mobile-menu");
const mobileNavigation = document.querySelector(".mobile-navigation");

menuIcon.addEventListener("click", function (e) {
  console.log("HI");
  if (e.target.closest(".mobile-menu")) {
    mobileNavigation.classList.toggle("hidden");
  }
});
