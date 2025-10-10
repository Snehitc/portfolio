// Tab switching
const tabLinks = document.querySelectorAll(".tab-link");
const tabContents = document.querySelectorAll(".tab-content");

tabLinks.forEach(link => {
  link.addEventListener("click", () => {
    // remove active from all
    tabLinks.forEach(l => l.classList.remove("active"));
    tabContents.forEach(c => c.classList.remove("active"));

    // activate current
    link.classList.add("active");
    document.getElementById(link.dataset.tab).classList.add("active");
  });
});

// Theme toggle
const toggle = document.getElementById("theme-toggle");
const body = document.body;
const darkClass = "dark-theme";

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add(darkClass);
  toggle.textContent = "🌞";
}

toggle.addEventListener("click", () => {
  body.classList.toggle(darkClass);
  const isDark = body.classList.contains(darkClass);
  localStorage.setItem("theme", isDark ? "dark" : "light");
  toggle.textContent = isDark ? "🌞" : "🌙";
});

// Expandable Research Abstracts
const publications = document.querySelectorAll(".publication-box");

publications.forEach(pub => {
  pub.addEventListener("click", () => {
    const abstract = pub.querySelector(".pub-abstract");
    abstract.style.display =
      abstract.style.display === "block" ? "none" : "block";
  });
});
