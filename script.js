const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  menuToggle.textContent = isOpen ? '✕' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
  menuToggle.textContent = '☰';
}));

document.querySelectorAll('.filter').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    const category = button.dataset.filter;
    document.querySelectorAll('.menu-card').forEach(card => {
      card.hidden = category !== 'all' && card.dataset.category !== category;
    });
  });
});

let toastTimer;
const toast = document.querySelector('.cart-toast');
document.querySelectorAll('.add-button').forEach(button => {
  button.addEventListener('click', () => {
    toast.textContent = `${button.dataset.item} added to your sample order!`;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
  });
});

document.getElementById('contact-form').addEventListener('submit', event => {
  event.preventDefault();
  document.querySelector('.form-feedback').textContent =
    'Thanks! This demo form is working locally. Connect a form service to receive real submissions.';
  event.target.reset();
});
document.getElementById('year').textContent = new Date().getFullYear();
