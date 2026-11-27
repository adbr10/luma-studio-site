// Small Seasons — small enhancements. The site works without JavaScript.

// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

// Load real photos into placeholders only if the file exists in /images.
// Until you add photos, the soft gradient placeholders show instead.
document.querySelectorAll('[data-img]').forEach(el => {
  const src = el.getAttribute('data-img');
  const img = new Image();
  img.onload = () => {
    el.style.backgroundImage = `url("${src}")`;
    el.classList.add('loaded');
  };
  img.src = src;
});

// "Enquire" buttons pre-select the session type in the form
const select = document.getElementById('session-select');
document.querySelectorAll('[data-session]').forEach(btn => {
  btn.addEventListener('click', () => {
    if (!select) return;
    const wanted = btn.getAttribute('data-session');
    const match = [...select.options].find(o => o.text === wanted);
    if (match) select.value = match.value || match.text;
  });
});

// Footer year
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
