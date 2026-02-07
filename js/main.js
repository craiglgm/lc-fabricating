// LC Fabricating — Main JS

(function () {
  'use strict';

  // Mobile nav toggle
  var toggle = document.getElementById('nav-toggle');
  var menu = document.getElementById('nav-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('active');
      menu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    menu.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.classList.remove('active');
        menu.classList.remove('active');
      });
    });
  }

  // Close mobile menu on outside click
  document.addEventListener('click', function (e) {
    if (menu && toggle && menu.classList.contains('active')) {
      if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        toggle.classList.remove('active');
        menu.classList.remove('active');
      }
    }
  });

  // Nav background on scroll
  var nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        nav.style.background = 'rgba(22, 22, 22, 0.98)';
      } else {
        nav.style.background = 'rgba(34, 34, 34, 0.95)';
      }
    });
  }
})();
