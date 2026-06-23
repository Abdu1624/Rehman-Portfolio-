document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const menuToggle = document.querySelector('.menu-toggle');
  const siteNav = document.querySelector('.site-nav');

  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', function () {
      siteNav.classList.toggle('site-nav-open');
      menuToggle.classList.toggle('menu-open');
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const message = contactForm.message.value.trim();

      if (!name || !email || !message) {
        formStatus.textContent = 'Please fill out all fields before sending.';
        return;
      }

      formStatus.textContent = 'Message sent! I will respond soon.';
      contactForm.reset();
    });
  }
});
