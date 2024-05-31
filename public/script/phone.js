function toggleMenu() {
  let menu = document.getElementById("menuContainer");
  let body = document.body;
  menu.classList.toggle("menu-open");
  body.classList.toggle("menu-open-blur");
}

function closeMenu() {
  let menu = document.getElementById("menuContainer");
  let body = document.body;
  menu.classList.remove("menu-open");
  body.classList.remove("menu-open-blur");
}

document.body.addEventListener('click', function(event) {
  let menu = document.getElementById("menuContainer");
  if (menu.classList.contains('menu-open') && !menu.contains(event.target) && !event.target.classList.contains('menu-toggle')) {
    closeMenu();
  }
});

// Add event listeners to menu items to close the menu when clicked
let menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(function(item) {
  item.addEventListener('click', function() {
    closeMenu();
  });
});