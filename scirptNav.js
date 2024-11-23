document.querySelector(".first-button").addEventListener("click", function () {
  document.querySelector(".animated-icon1").classList.toggle("open");
});

window.addEventListener("load", function () {
  document.body.classList.add("loaded");
});

// active link
document.addEventListener("DOMContentLoaded", () => {
  // Select all nav links
  const navLinks = document.querySelectorAll(".nav-link");

  // Normalize the current path (remove trailing slashes, etc.)
  const currentPath = window.location.pathname
    .replace(/\/$/, "")
    .split("/")
    .pop();

  navLinks.forEach((link) => {
    // Normalize the href of the link
    const linkPath = link
      .getAttribute("href")
      .replace(/\/$/, "")
      .split("/")
      .pop();

    // Remove 'active' class from all links
    link.classList.remove("active");

    // Add 'active' class if the paths match
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
