// function navOpen() {  const navBar = document.getElementById("primary-navigation");
//   navBar.classList.toggle("open-navbar");}

const navBar = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {

  const visibility = navBar.getAttribute("data-visible");
  if (visibility === "false") {
    navBar.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  }
  else {
    navBar.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
}})
