// ======================================
// MODE TOGGLE (Light / Dark) | GOD LET IT WORK
// ======================================
const modeToggle = document.getElementById("modeToggle");
const modeIcon = document.getElementById("modeIcon");

    //Restore saved mode
let savedMode = localStorage.getItem("theme");

if (savedMode === "light") {
    document.body.classList.add("light-mode");
    modeIcon.classList.replace("bi-sun", "bi-moon");
}

    //Toggle mode tanpa jumping
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

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".fade-item").forEach((item) => {
        setTimeout(() => item.classList.add("show"), 200);
    });
});

// -----------------------------
    //SCROLL TOP BUTTON
const scrollTopBtn = document.getElementById("scrollTopBtn");

    //Munculkan tombol ketika user scroll > 200px
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
});

    //Ketika tombol diklik > smooth scroll ke atas
scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});