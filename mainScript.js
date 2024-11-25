document.querySelector(".first-button").addEventListener("click", function () {
  document.querySelector(".animated-icon1").classList.toggle("open");
});

window.addEventListener("load", function () {
  document.body.classList.add("loaded");
});

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");

  const currentPath = window.location.pathname
    .replace(/\/$/, "")
    .split("/")
    .pop();

  navLinks.forEach((link) => {
    const linkPath = link
      .getAttribute("href")
      .replace(/\/$/, "")
      .split("/")
      .pop();

    link.classList.remove("active");

    if (linkPath === currentPath) {
      link.classList.add("active");
    }
  });
});

// scroll to top button functionality
const toTop = document.querySelector("#to-top");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
}
toTop.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
