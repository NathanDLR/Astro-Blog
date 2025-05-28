// Only run this script in the browser
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('expanded');
  });
});

