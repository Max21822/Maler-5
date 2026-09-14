document.addEventListener('DOMContentLoaded', function () {
  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var navToggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Sticky header shadow / back-to-top button
  var backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', function () {
    if (backToTop) backToTop.classList.toggle('visible', window.scrollY > 500);
  });

  // Animated stat counters
  var statNums = document.querySelectorAll('.stat-num');
  var statsAnimated = false;

  function animateStats() {
    if (statsAnimated) return;
    statsAnimated = true;
    statNums.forEach(function (el) {
      var target = parseInt(el.getAttribute('data-count'), 10) || 0;
      var duration = 1400;
      var startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target);
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = target;
        }
      }
      requestAnimationFrame(step);
    });
  }

  var statsSection = document.querySelector('.stats');
  if (statsSection && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateStats();
          observer.disconnect();
        }
      });
    }, { threshold: 0.4 });
    observer.observe(statsSection);
  } else {
    animateStats();
  }

  // Contact form (front-end demo, no backend attached)
  var form = document.getElementById('contactForm');
  var status = document.getElementById('formStatus');

  if (form && status) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var message = form.message.value.trim();
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name || !email || !message) {
        status.textContent = 'Bitte füllen Sie alle Pflichtfelder (*) aus.';
        status.className = 'form-status error';
        return;
      }
      if (!emailPattern.test(email)) {
        status.textContent = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
        status.className = 'form-status error';
        return;
      }

      status.textContent = 'Vielen Dank, ' + name + '! Ihre Nachricht wurde erfasst – wir melden uns zeitnah bei Ihnen.';
      status.className = 'form-status success';
      form.reset();
    });
  }
});
