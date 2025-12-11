// ======================================
// MODE TOGGLE (Light/Dark)
// ======================================
const modeToggle = document.getElementById("modeToggle");
const modeIcon = document.getElementById("modeIcon");

    //Restore saved mode
let savedMode = localStorage.getItem("theme");

if (savedMode === "light") {
    document.body.classList.add("light-mode");
    modeIcon.classList.replace("bi-sun", "bi-moon");
}

    //Biar gak jumping
modeToggle.addEventListener("click", (e) => {
    e.preventDefault();

    const scrollPos = window.scrollY;   //save scroll position

    document.body.classList.toggle("light-mode");
    const isLight = document.body.classList.contains("light-mode");

        //Icon switch
    if (isLight) {
        modeIcon.classList.replace("bi-sun", "bi-moon");
        localStorage.setItem("theme", "light");
    } else {
        modeIcon.classList.replace("bi-moon", "bi-sun");
        localStorage.setItem("theme", "dark");
    }

        //Restore scroll position
    window.scrollTo(0, scrollPos);
});

// ======================================
    //FADE-IN ON SCROLL
// ======================================
const fadeItems = document.querySelectorAll(".fade-item");

function handleFade() {
    fadeItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
            item.classList.add("show");
        }
    });
}

    //Run on load + scroll
window.addEventListener("scroll", handleFade);
window.addEventListener("load", handleFade);

// -----------------------------
    //SCROLL TOP BUTTON
const scrollTopBtn = document.getElementById("scrollTopBtn");

    //Munculkan tombol ketika user scroll > 200px | fixed distance
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
});

    //Tombol diklik > smooth scroll ke atas
scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});