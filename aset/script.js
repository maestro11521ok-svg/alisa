const links = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');
let currentPage = document.querySelector('.page.active');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const targetPage = document.getElementById(link.dataset.page);
    if (targetPage === currentPage) return;

    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    currentPage.classList.remove('active');
    currentPage.style.opacity = '0';
    currentPage.style.transform = 'translateY(30px)';

    setTimeout(() => {
      pages.forEach(p => p.classList.remove('active'));
      targetPage.classList.add('active');
      targetPage.style.opacity = '1';
      targetPage.style.transform = 'translateY(0)';
      currentPage = targetPage;
    }, 400);
  });
});