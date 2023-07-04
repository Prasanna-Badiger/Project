// static/main.js

// Example interactive feature: Toggle navigation menu
const toggleMenu = () => {
  const menu = document.querySelector('.navbar ul');
  menu.classList.toggle('show');
};

// Example event listener for menu toggle button
const menuToggleBtn = document.querySelector('.menu-toggle');
menuToggleBtn.addEventListener('click', toggleMenu);
