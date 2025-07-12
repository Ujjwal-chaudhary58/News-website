const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");

function showSection(targetId) {
  sections.forEach((sec) => {
    sec.style.display = sec.id === targetId ? "block" : "none";
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + targetId);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  showSection("home");
});

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    showSection(targetId);
  });
});
