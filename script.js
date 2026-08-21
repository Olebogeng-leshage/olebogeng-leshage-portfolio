/* ==========================================
   OLEBOGENG BOTLHALE LESHAGE
   PORTFOLIO JAVASCRIPT — UPDATED
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
  document.querySelectorAll("section[id]");

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
   SCROLL REVEAL — UPDATED WITH ALL SECTIONS
========================================== */

const revealElements = document.querySelectorAll(
  // About section
  ".identity-grid article, .identity-text, .identity h2, .identity .section-tag, " +
  // Skills section
  ".skill-card, .skills-subtext, .skills-section h2, .skills-section .section-tag, " +
  // Projects section
  ".project-card, .projects-subtext, .projects-section h2, .projects-section .section-tag, " +
  // Experience section
  ".experience-card, .experience-subtext, .experience-section h2, .experience-section .section-tag, " +
  // Education section
  ".education-card, .education-subtext, .education-section h2, .education-section .section-tag, " +
  // Certifications section
  ".cert-card, .certifications-subtext, .certifications-section h2, .certifications-section .section-tag, " +
  // Contact section
  ".contact-form-wrapper, .contact-subtext, .contact-section h2, .contact-section .section-tag, " +
  // Hero elements
  ".hero-copy, .hero-visual, .status, .kicker, h1, .role-wrap, .intro, .actions, .socials"
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
      threshold: 0.12,
      rootMargin: "0px 0px -50px 0px"
    }

  );


revealElements.forEach(element => {

  if (element) {
    element.classList.add("reveal");
    revealObserver.observe(element);
  }

});



/* ==========================================
   BUTTON RIPPLE EFFECT
========================================== */

const buttons =
  document.querySelectorAll(".btn:not(.btn-outline), .cert-view, .project-card a");


buttons.forEach(button => {

  button.addEventListener("click", function(event) {

    // Don't create ripple on anchor links that navigate
    if (this.tagName === "A" && this.getAttribute("href")?.startsWith("#")) {
      return;
    }

    const ripple =
      document.createElement("span");

    ripple.classList.add("ripple");


    const rect =
      this.getBoundingClientRect();


    ripple.style.left =
      `${event.clientX - rect.left}px`;

    ripple.style.top =
      `${event.clientY - rect.top}px`;


    this.appendChild(ripple);


    setTimeout(() => {

      ripple.remove();

    }, 600);

  });

});



/* ==========================================
   IMAGE FALLBACK — WITH PLACEHOLDER
========================================== */

const profileImage =
  document.querySelector(".portrait-frame img");


if (profileImage) {

  profileImage.addEventListener("error", () => {

    profileImage.style.display = "none";

    const frame =
      document.querySelector(".portrait-frame");

    if (frame) {

      // Create a placeholder
      const placeholder = document.createElement("div");
      placeholder.className = "image-placeholder";
      placeholder.textContent = "OBL";
      placeholder.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background: var(--panel, #101216);
        color: var(--lime, #d8ff3f);
        font-size: 3rem;
        font-weight: 700;
        font-family: 'Space Grotesk', sans-serif;
        border-radius: 2px;
      `;

      frame.appendChild(placeholder);

    }

  });

}



/* ==========================================
   CURRENT YEAR — PRECISE UPDATE
========================================== */

const footerYear =
  document.querySelector("footer .year, footer span:last-child");


if (footerYear) {

  const year =
    new Date().getFullYear();

  footerYear.textContent = year;

} else {

  // Fallback: update the footer text
  const footer = document.querySelector("footer p");

  if (footer) {

    const year =
      new Date().getFullYear();

    footer.innerHTML =
      footer.innerHTML.replace(
        /© \d{4}/,
        `© ${year}`
      );

  }

}



/* ==========================================
   SMOOTH SCROLL FOR NAV LINKS
========================================== */

document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {

  link.addEventListener("click", function(event) {

    const targetId = this.getAttribute("href");

    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);

    if (targetElement) {

      event.preventDefault();

      const headerHeight = document.querySelector(".header")?.offsetHeight || 82;

      const targetPosition = targetElement.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });

    }

  });

});



/* ==========================================
   PAGE LOADED
========================================== */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    document.body.classList.add("page-loaded");

    // Trigger scroll reveal for elements already in view
    setTimeout(() => {
      revealElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          element.classList.add("reveal-visible");
        }
      });
    }, 200);

  }
);



/* ==========================================
   KEYBOARD ACCESSIBILITY — ESCAPE CLOSES MENU
========================================== */

document.addEventListener("keydown", (event) => {

  if (event.key === "Escape" && navLinks?.classList.contains("open")) {

    navLinks.classList.remove("open");

  }

});



/* ==========================================
   ADD RIPPLE CSS (if not already in style.css)
========================================== */

// Check if ripple styles exist, if not, add them
if (!document.querySelector("#ripple-styles")) {

  const style = document.createElement("style");
  style.id = "ripple-styles";
  style.textContent = `
    .ripple {
      position: absolute;
      border-radius: 50%;
      background: rgba(216, 255, 63, 0.3);
      width: 100px;
      height: 100px;
      transform: scale(0);
      animation: ripple-animation 0.6s linear;
      pointer-events: none;
    }

    @keyframes ripple-animation {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }

    .btn, .cert-view {
      position: relative;
      overflow: hidden;
    }

    .reveal {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .reveal-visible {
      opacity: 1;
      transform: translateY(0);
    }

    .reveal-visible:nth-child(1) { transition-delay: 0.05s; }
    .reveal-visible:nth-child(2) { transition-delay: 0.1s; }
    .reveal-visible:nth-child(3) { transition-delay: 0.15s; }
    .reveal-visible:nth-child(4) { transition-delay: 0.2s; }
    .reveal-visible:nth-child(5) { transition-delay: 0.25s; }
    .reveal-visible:nth-child(6) { transition-delay: 0.3s; }
  `;
  document.head.appendChild(style);

}
