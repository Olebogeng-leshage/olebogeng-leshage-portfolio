/* ==========================================
   OLEBOGENG BOTLHALE LESHAGE
   PORTFOLIO JAVASCRIPT
========================================== */


/* ==========================================
   MOBILE NAVIGATION
========================================== */

const menu = document.getElementById("menu");
const navLinks = document.getElementById("navLinks");

if (menu && navLinks) {

  menu.addEventListener("click", () => {

    navLinks.classList.toggle("open");

  });


  navLinks.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("open");

    });

  });

}



/* ==========================================
   ROTATING PROFESSIONAL TITLES
========================================== */

const roleElement = document.getElementById("role");

const roles = [
  "ASPIRING DATA SCIENTIST",
  "ASPIRING FINANCIAL ANALYST",
  "ASPIRING BUSINESS ANALYST",
  "ASPIRING STATISTICIAN",
  "CERTIFIED AI ENGINEER",
  "CERTIFIED CLOUD ENGINEER",
  "FULL STACK SOFTWARE DEVELOPER"
];

let roleIndex = 0;


function changeRole() {

  if (!roleElement) return;

  roleElement.style.opacity = "0";
  roleElement.style.transform = "translateY(8px)";


  setTimeout(() => {

    roleIndex++;

    if (roleIndex >= roles.length) {
      roleIndex = 0;
    }

    roleElement.textContent = roles[roleIndex];

    roleElement.style.opacity = "1";
    roleElement.style.transform = "translateY(0)";

  }, 300);

}


if (roleElement) {

  roleElement.style.transition =
    "opacity 0.3s ease, transform 0.3s ease";

  setInterval(changeRole, 3000);

}



/* ==========================================
   CURSOR GLOW
========================================== */

const cursorGlow =
  document.querySelector(".cursor-glow");


if (cursorGlow) {

  document.addEventListener("mousemove", (event) => {

    cursorGlow.style.left =
      `${event.clientX}px`;

    cursorGlow.style.top =
      `${event.clientY}px`;

  });

}



/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections =
  document.querySelectorAll("main section[id]");

const navigationLinks =
  document.querySelectorAll(".nav-links a");


function updateActiveNavigation() {

  let currentSection = "";


  sections.forEach(section => {

    const sectionTop =
      section.offsetTop - 150;

    const sectionHeight =
      section.offsetHeight;


    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {

      currentSection =
        section.getAttribute("id");

    }

  });


  navigationLinks.forEach(link => {

    link.classList.remove("active");


    if (
      link.getAttribute("href") ===
      `#${currentSection}`
    ) {

      link.classList.add("active");

    }

  });

}


window.addEventListener(
  "scroll",
  updateActiveNavigation
);


updateActiveNavigation();



/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements = document.querySelectorAll(
  ".skill-card, .project-card, .timeline-item, .certification-card, .about-stat, .contact-card"
);


const revealObserver =
  new IntersectionObserver(

    (entries, observer) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("reveal-visible");

          observer.unobserve(entry.target);

        }

      });

    },

    {
      threshold: 0.12
    }

  );


revealElements.forEach(element => {

  element.classList.add("reveal");

  revealObserver.observe(element);

});



/* ==========================================
   BUTTON RIPPLE EFFECT
========================================== */

const buttons =
  document.querySelectorAll(".btn");


buttons.forEach(button => {

  button.addEventListener("click", function(event) {

    const ripple =
      document.createElement("span");

    ripple.classList.add("ripple");


    const rect =
      button.getBoundingClientRect();


    ripple.style.left =
      `${event.clientX - rect.left}px`;

    ripple.style.top =
      `${event.clientY - rect.top}px`;


    button.appendChild(ripple);


    setTimeout(() => {

      ripple.remove();

    }, 600);

  });

});



/* ==========================================
   IMAGE FALLBACK
========================================== */

const profileImage =
  document.querySelector(".portrait-frame img");


if (profileImage) {

  profileImage.addEventListener("error", () => {

    profileImage.style.display = "none";

    const frame =
      document.querySelector(".portrait-frame");

    if (frame) {

      frame.classList.add("no-image");

    }

  });

}



/* ==========================================
   CURRENT YEAR
========================================== */

const footer =
  document.querySelector("footer");


if (footer) {

  const year =
    new Date().getFullYear();

  footer.innerHTML =
    footer.innerHTML.replace(
      "© 2026",
      `© ${year}`
    );

}



/* ==========================================
   PAGE LOADED
========================================== */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    document.body.classList.add("page-loaded");

  }
);
