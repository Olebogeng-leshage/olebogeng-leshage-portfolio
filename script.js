/* =========================================================
   OLEBOGENG BOTLHALE LESHAGE
   PORTFOLIO JAVASCRIPT
   ========================================================= */


/* ================================
   SMOOTH NAVIGATION
================================ */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* ================================
   SCROLL REVEAL
================================ */

const revealElements = document.querySelectorAll(
    ".section-heading, .about-grid, .career-box, .coming-section, .project-preview, .skills-preview, .contact-box"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("revealed");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal-element");

    revealObserver.observe(element);

});


/* ================================
   ACTIVE NAVIGATION
================================ */

const sections = document.querySelectorAll("section[id]");

const navigationLinks =
    document.querySelectorAll(".nav-menu a");


window.addEventListener("scroll", () => {

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

});


/* ================================
   DYNAMIC COPYRIGHT YEAR
================================ */

const yearElement =
    document.querySelector(".current-year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* ================================
   PROFILE IMAGE FALLBACK
================================ */

const profileImage =
    document.querySelector(".profile-image img");


if (profileImage) {

    profileImage.addEventListener(
        "error",
        () => {

            profileImage.style.display = "none";

            const profileContainer =
                document.querySelector(".profile-image");

            if (profileContainer) {

                profileContainer.innerHTML = `
                    <div class="profile-placeholder">
                        OBL
                    </div>
                `;

            }

        }
    );

}


/* ================================
   PAGE LOAD
================================ */

window.addEventListener("load", () => {

    document.body.classList.add("page-loaded");

});
