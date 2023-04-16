const navMenu = document.getElementById("nav-menu"),
  toggleMenu = document.getElementById("nav-toggle"),
  body = document.getElementById("body"),
  links = document.querySelector(".nav-link"),
  onglets = document.querySelectorAll(".onglets"),
  buttonUp = document.getElementById("bouton-page-up"),
  contenu = document.querySelectorAll(".contenu"),
  loader = document.querySelector('.loader');
let index = 0;

window.addEventListener('load', () => {
  loader.classList.add('fondu-sortant');
  loader.classList.remove('loader-index');
});

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
  buttonUp.classList.toggle("block", window.scrollY > 0);
});

onglets.forEach((onglet) => {
  onglet.addEventListener("click", () => {
    if (onglet.classList.contains("onglet-actif")) {
      return;
    } else {
      onglet.classList.add("onglet-actif");
    }

    index = onglet.getAttribute("data-anim");

    for (i = 0; i < onglets.length; i++) {
      if (onglets[i].getAttribute("data-anim") != index) {
        onglets[i].classList.remove("onglet-actif");
      }
    }

    for (j = 0; j < contenu.length; j++) {
      if (contenu[j].getAttribute("data-anim") == index) {
        contenu[j].classList.add("activeContenu");
      } else {
        contenu[j].classList.remove("activeContenu");
      }
    }
  });
});

/*
toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  body.classList.toggle("hidden");
});*/

/*Menu Responsive Mobile*/
function menuMobile() {
  var x = document.getElementById("nav-menu");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}
function linkMenuMobile() {
  var x = document.getElementById("nav-menu");
  if (x.className === "responsive") {
    x.className = "none";
  } else {
    x.className = "nav";
  }
}
