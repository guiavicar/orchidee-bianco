/* Orchidee Bianco — interações do site */
(function () {
  'use strict';

  // avisa o <head> que o script rodou (desarma a rede de segurança das animações)
  document.documentElement.classList.add('js-ok');

  var header = document.getElementById('header');
  var burger = document.getElementById('burger');
  var nav    = document.getElementById('nav');

  /* ---- cabeçalho: fundo sólido depois do topo ---- */
  function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 40);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- menu mobile ---- */
  function closeMenu() {
    nav.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Abrir menu');
    document.body.style.overflow = '';
  }

  burger.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    document.body.style.overflow = open ? 'hidden' : '';
  });

  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') closeMenu();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      closeMenu();
      burger.focus();
    }
  });

  /* ---- revelar elementos ao rolar ---- */
  var alvos = document.querySelectorAll('[data-reveal]');

  if (!('IntersectionObserver' in window)) {
    alvos.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  var obs = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (!entrada.isIntersecting) return;
      var el = entrada.target;
      // pequeno atraso em cascata entre irmãos, para uma entrada mais suave
      var irmaos = Array.prototype.filter.call(
        el.parentElement.children,
        function (n) { return n.hasAttribute && n.hasAttribute('data-reveal'); }
      );
      var i = irmaos.indexOf(el);
      el.style.transitionDelay = (i > 0 ? Math.min(i, 5) * 0.09 : 0) + 's';
      el.classList.add('is-visible');
      obs.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  alvos.forEach(function (el) { obs.observe(el); });

  /* ---- ano no rodapé ---- */
  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();
})();
