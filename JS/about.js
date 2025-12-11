// -----------------------------
    //MODE TOGGLE OMG PLS WORK
// -----------------------------
const modeToggle = document.getElementById("modeToggle");
const modeIcon = document.getElementById("modeIcon");

let saved = localStorage.getItem("theme");
if (saved === "light") {
    document.body.classList.add("light-mode");
    modeIcon.classList.replace("bi-sun", "bi-moon");
}

modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    const isLight = document.body.classList.contains("light-mode");
    localStorage.setItem("theme", isLight ? "light" : "dark");

    if (isLight) {
        modeIcon.classList.replace("bi-sun", "bi-moon");
    } else {
        modeIcon.classList.replace("bi-moon", "bi-sun");
    }
});

document.getElementById('modeToggle').addEventListener('click', function(e) {
    e.preventDefault();  //biar gak jumping pas ganti mode

    document.body.classList.toggle("dark-mode");

        //toggle icon
    const icon = document.getElementById("modeIcon");
    icon.classList.toggle("bi-moon");
    icon.classList.toggle("bi-sun");
});



// -----------------------------
// SCROLL FADE-IN ANIMATION | WORK COYYYY
// -----------------------------
const fadeItems = document.querySelectorAll(".fade-item");

function checkFade() {
    fadeItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
            item.classList.add("show");
        }
    });
}

window.addEventListener("scroll", checkFade);
window.addEventListener("load", checkFade);

    //Register fade items for team section
document.querySelectorAll(".team-card").forEach(card => {
    card.classList.add("fade-item");

        //Biar fade aktif waktu muncul
    setTimeout(() => {
        card.classList.add("show");
    }, 300);
});

// -----------------------------
    //SCROLL TOP BUTTON
// -----------------------------
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
