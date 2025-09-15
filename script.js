// ==== MENÚ HAMBURGUESA ====
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");

  toggle.addEventListener("click", () => {
    nav.style.display = nav.style.display === "block" ? "none" : "block";
  });

  // ==== LOGO DIFUMINADO SOLO EN INDEX ====
  const logo = document.getElementById("logo");
  if (logo) {
    setTimeout(() => {
      logo.classList.add("visible");
    }, 2000);
  }
});
