// Highlight current page in the main nav
(function(){
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav.main a[data-href]').forEach(a => {
    const target = a.getAttribute('data-href');
    if (target === here) {
      a.setAttribute('aria-current','page');
      a.classList.add('active');
    }
  });
})();