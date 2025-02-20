const preloader = document.getElementById("preloader");
preloader.style.display = "flex"; // Show the preloader

// Hide the preloader once the page has fully loaded
window.addEventListener("load", () => {
    preloader.classList.add("preloader_hidden");

    preloader.addEventListener("transitionend", () => {
        document.body.removeChild(preloader); // Correct way to remove the loader
    });
});



// sticky Navigation
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });



  // Ham Menu
const hamMenu = document.querySelector(".menu");
const offMenu = document.querySelector(".offScreenMenu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offMenu.classList.toggle("active");
});