/* =========================================================
   OLEBOGENG BOTLHALE LESHAGE
   PERSONAL PORTFOLIO
   JAVASCRIPT / INTERACTIVITY
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       1. TYPEWRITER EFFECT
    ===================================================== */

    const typewriterElement =
        document.getElementById("typewriter");

    if (typewriterElement) {

        const roles = [
            "Aspiring Data Scientist",
            "Aspiring Statistician",
            "Aspiring Business Analyst",
            "Aspiring Financial Analyst"
        ];

        let roleIndex = 0;
        let characterIndex = 0;
        let deleting = false;

        function typeRole() {

            const currentRole =
                roles[roleIndex];

            if (!deleting) {

                typewriterElement.textContent =
                    currentRole.substring(
                        0,
                        characterIndex + 1
                    );

                characterIndex++;

                if (
                    characterIndex ===
                    currentRole.length
                ) {

                    deleting = true;

                    setTimeout(
                        typeRole,
                        1800
                    );

                    return;
                }

            } else {

                typewriterElement.textContent =
                    currentRole.substring(
                        0,
                        characterIndex - 1
                    );

                characterIndex--;

                if (characterIndex === 0) {

                    deleting = false;

                    roleIndex =
                        (roleIndex + 1) %
                        roles.length;

                }

            }

            const speed =
                deleting ? 45 : 90;

            setTimeout(
                typeRole,
                speed
            );
        }

        typeRole();
    }


    /* =====================================================
       2. SMOOTH NAVIGATION
    ===================================================== */

    const navigationLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );

    navigationLinks.forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetID =
                    link.getAttribute("href");

                if (
                    !targetID ||
                    targetID === "#"
                ) {
                    return;
                }

                const target =
                    document.querySelector(
                        targetID
                    );

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    });


    /* =====================================================
       3. NAVBAR SCROLL EFFECT
    ===================================================== */

    const navbar =
        document.querySelector(".navbar");

    if (navbar) {

        window.addEventListener(
            "scroll",
            () => {

                if (window.scrollY > 50) {

                    navbar.style.background =
                        "rgba(7, 11, 20, 0.80)";

                    navbar.style.backdropFilter =
                        "blur(15px)";

                    navbar.style.position =
                        "sticky";

                    navbar.style.top =
                        "0";

                    navbar.style.zIndex =
                        "100";

                } else {

                    navbar.style.background =
                        "transparent";

                }

            }
        );

    }


    /* =====================================================
       4. STATISTICS LAB
    ===================================================== */

    const simulationButton =
        document.getElementById(
            "simulationButton"
        );

    const pValue =
        document.getElementById(
            "pValue"
        );

    const decision =
        document.getElementById(
            "decision"
        );


    if (
        simulationButton &&
        pValue &&
        decision
    ) {

        function generatePValue() {

            let value =
                Math.random();

            /*
                Slightly smooth the random
                distribution so the demo
                does not feel completely
                uniform.
            */

            value =
                (
                    value +
                    Math.random()
                ) / 2;

            return Number(
                value.toFixed(4)
            );

        }


        function runSimulation() {

            const generatedPValue =
                generatePValue();

            pValue.textContent =
                generatedPValue.toFixed(4);


            if (
                generatedPValue < 0.05
            ) {

                decision.textContent =
                    "REJECT H₀";

                decision.style.color =
                    "#00f0ff";

            } else {

                decision.textContent =
                    "FAIL TO REJECT H₀";

                decision.style.color =
                    "#9f7aea";

            }

        }


        simulationButton.addEventListener(
            "click",
            runSimulation
        );


        /*
            Run the simulator once
            when the page loads.
        */

        runSimulation();

    }


    /* =====================================================
       5. SCROLL REVEAL ANIMATION
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".section, .career-card, .skill-card, .project-card, .certification-card, .education-card, .lab-card"
        );


    revealElements.forEach(
        element => {

            element.style.opacity = "0";

            element.style.transform =
                "translateY(25px)";

            element.style.transition =
                "opacity 0.7s ease, transform 0.7s ease";

        }
    );


    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.style.opacity =
                                "1";

                            entry.target.style.transform =
                                "translateY(0)";

                            revealObserver.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(
        element => {

            revealObserver.observe(
                element
            );

        }
    );


    /* =====================================================
       6. SKILL CARD INTERACTION
    ===================================================== */

    const skillCards =
        document.querySelectorAll(
            ".skill-card"
        );


    skillCards.forEach(
        card => {

            card.addEventListener(
                "mouseenter",
                () => {

                    card.style.transform =
                        "translateY(-8px)";

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform =
                        "translateY(0)";

                }
            );

        }
    );


    /* =====================================================
       7. PROJECT CARD INTERACTION
    ===================================================== */

    const projectCards =
        document.querySelectorAll(
            ".project-card"
        );


    projectCards.forEach(
        card => {

            card.addEventListener(
                "mouseenter",
                () => {

                    card.style.boxShadow =
                        "0 20px 50px rgba(0, 240, 255, 0.06)";

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.boxShadow =
                        "none";

                }
            );

        }
    );


    /* =====================================================
       8. CURRENT YEAR
    ===================================================== */

    const yearElements =
        document.querySelectorAll(
            ".current-year"
        );


    yearElements.forEach(
        element => {

            element.textContent =
                new Date().getFullYear();

        }
    );


    /* =====================================================
       9. CONSOLE MESSAGE
    ===================================================== */

    console.log(
        "%c OLEBOGENG BOTLHALE LESHAGE ",
        "background:#00f0ff;color:#070b14;font-size:16px;font-weight:bold;padding:8px;"
    );

    console.log(
        "Portfolio loaded successfully."
    );

});
