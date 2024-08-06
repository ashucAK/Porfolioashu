
const year = document.querySelector(".year");
year.innerHTML = new Date().getFullYear();
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const toggleButton = document.querySelector("#dark-mode");
toggleButton.addEventListener('click', (e) => {
  if (e.target.checked) {
    localStorage.setItem("theme", "dark");
    darkMode(true);
  }

  else {
    localStorage.setItem("theme", "light");
    darkMode(false);
  }
});

function darkMode(isDarkMode) {
  toggleButton.checked = isDarkMode;
  document.documentElement.style.setProperty('--primary-color', isDarkMode ? '#242424' : '#fafafa');
  document.documentElement.style.setProperty('--secondary-color', isDarkMode ? '#fafafa' : '#242424');
}

darkMode(localStorage.getItem("theme") === "dark");
