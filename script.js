const roles = [

  "ASPIRING DATA SCIENTIST",

  "ASPIRING FINANCIAL ANALYST",

  "ASPIRING BUSINESS ANALYST",

  "ASPIRING STATISTICIAN"

];


let roleIndex = 0;

const role =
  document.getElementById("role");


setInterval(() => {

  role.style.opacity = "0";

  role.style.transform =
    "translateY(5px)";


  setTimeout(() => {

    roleIndex =
      (roleIndex + 1) % roles.length;


    role.textContent =
      roles[roleIndex];


    role.style.opacity = "1";

    role.style.transform =
      "translateY(0)";

  }, 260);

}, 2600);


role.style.transition =
  "opacity .25s, transform .25s";



/* MOBILE MENU */

const menu =
  document.getElementById("menu");

const navLinks =
  document.getElementById("navLinks");


menu.addEventListener("click", () => {

  navLinks.classList.toggle("open");

});


document
  .querySelectorAll(".nav-links a")
  .forEach(a => {

    a.addEventListener("click", () => {

      navLinks.classList.remove("open");

    });

  });



/* CURSOR EFFECT */

const glow =
  document.querySelector(".cursor-glow");


window.addEventListener(
  "pointermove",
  e => {

    glow.style.left =
      e.clientX + "px";

    glow.style.top =
      e.clientY + "px";

  }
);
