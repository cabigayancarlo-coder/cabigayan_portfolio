 document.getElementById("year").textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("open");
});


const themeButton = document.getElementById("themeToggle");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeButton.textContent = "🌙";
    } else {
        themeButton.textContent = "☀️";
    }
});

const profileButton = document.getElementById("profileToggle");
const profilePanel = document.getElementById("profilePanel");

profileButton.addEventListener("click", function () {
    if (profilePanel.hidden) {
        profilePanel.hidden = false;
        profileButton.textContent = "Hide Profile -";
    } else {
        profilePanel.hidden = true;
        profileButton.textContent = "Show Profile +";
    }
});


function closeActivity() {
    activityModal.hidden = true;
}

document.getElementById("modalClose").addEventListener("click", closeActivity);
document.getElementById("modalDone").addEventListener("click", closeActivity);
document.querySelector(".modal-backdrop").addEventListener("click", closeActivity);
