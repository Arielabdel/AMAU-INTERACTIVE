// ======================================
// MODE TOGGLE (Light / Dark)
// ======================================
const modeToggle = document.getElementById("modeToggle");
const modeIcon = document.getElementById("modeIcon");

// Restore saved mode
let savedMode = localStorage.getItem("theme");

if (savedMode === "light") {
    document.body.classList.add("light-mode");
    modeIcon.classList.replace("bi-sun", "bi-moon");
}

// Toggle mode without jumping to top
modeToggle.addEventListener("click", (e) => {
    e.preventDefault();

    const scrollPos = window.scrollY; // save scroll position

    document.body.classList.toggle("light-mode");
    const isLight = document.body.classList.contains("light-mode");

    // Icon switch
    if (isLight) {
        modeIcon.classList.replace("bi-sun", "bi-moon");
        localStorage.setItem("theme", "light");
    } else {
        modeIcon.classList.replace("bi-moon", "bi-sun");
        localStorage.setItem("theme", "dark");
    }

    // Restore scroll position
    window.scrollTo(0, scrollPos);
});

// ======================
// FADE-IN ANIMATION
// ======================
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".fade-item").forEach((item) => {
        setTimeout(() => item.classList.add("show"), 200);
    });
});

// ======================
// PRODUCT MODAL
// ======================

const modal = new bootstrap.Modal(document.getElementById("detailModal"));
const modalTitle = document.getElementById("modalTitle");
const modalImg = document.getElementById("modalImg");
const modalDesc = document.getElementById("modalDesc");
const modalInfo = document.getElementById("modalInfo"); // NEW

document.querySelectorAll(".btn-detail").forEach(btn => {
    btn.addEventListener("click", () => {

        // Basic data
        modalTitle.textContent = btn.getAttribute("data-title");
        modalDesc.textContent = btn.getAttribute("data-description");
        modalImg.src = btn.getAttribute("data-img");

        // ======================
        // NEW – Additional info
        // ======================
        const type     = btn.getAttribute("data-type")     || "-";
        const release  = btn.getAttribute("data-release")  || "-";
        const platform = btn.getAttribute("data-platform") || "-";

        modalInfo.innerHTML = `
            <div class="modal-info-row">
                <div class="modal-info-label">Tipe:</div>
                <div class="modal-info-value">${type}</div>
            </div>
            <div class="modal-info-row">
                <div class="modal-info-label">Rilis:</div>
                <div class="modal-info-value">${release}</div>
            </div>
            <div class="modal-info-row">
                <div class="modal-info-label">Platform:</div>
                <div class="modal-info-value">${platform}</div>
            </div>
        `;

        // ======================
        // Preview Link
        // ======================
        const previewBtn = document.getElementById("modalPreviewBtn");
        const previewURL = btn.getAttribute("data-url");

        if (previewURL) {
            previewBtn.classList.remove("d-none");
            previewBtn.href = previewURL;
        } else {
            previewBtn.classList.add("d-none");
        }

        modal.show();
    });
});

// -----------------------------
// SCROLL TOP BUTTON
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Munculkan tombol ketika user scroll > 200px
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
});

// Ketika tombol diklik → smooth scroll ke atas
scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});