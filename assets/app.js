/* Crepe Craft Cafe: smooth scroll, chapter sidebar, scroll state for the rendered visuals, booking form.
   Scroll state lives on window.CC; all visuals are pre-rendered (film, frame sequences, stills). */
(function () {
  'use strict';
  var root = document.documentElement;
  var reduced = root.classList.contains('reduced');
  var CC = window.CC = window.CC || {};
  CC.craft = 0; CC.hero = 0; CC.sweet = 0; CC.sweetIn = 0; CC.drinks = 0; CC.drinksIn = 0; CC.mx = 0; CC.my = 0;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var clamp = function (x) { return Math.min(1, Math.max(0, x)); };

  /* ---------- Pre-rendered visuals: craft fold frames, smoothie turn, sweet crossfade (intro.js) ---------- */
  var pad = function (i) { return ('00' + i).slice(-3); };
  var Seq = window.CCSeq || function () { return { start: function () {}, draw: function () {}, n: 1 }; };
  var craftSeq = Seq($('[data-craft-canvas]'), 48, function (i) { return 'assets/media/craft/c' + pad(i) + '.webp'; });
  var smoothieSeq = Seq($('[data-smoothie-canvas]'), 36, function (i) { return 'assets/media/smoothie/s' + pad(i) + '.webp'; });
  var sweetLayers = $$('[data-sweet-layers] img');

  function heroIntro() {
    if (!window.gsap || reduced) return;
    var tl = gsap.timeline({ delay: .1 });
    tl.from('.hero__title .line > span', { yPercent: 110, duration: 1.1, ease: 'expo.out', stagger: .08 })
      .from('.hero__label, .hero__where, .hero__lead, .hero__meta', { opacity: 0, y: 16, duration: .8, ease: 'power3.out', stagger: .06 }, '-=.8');
    // Buttons are never hidden: only a small lift, opacity stays 1.
    tl.from('.hero__cta .btn', { y: 10, duration: .6, ease: 'power3.out', stagger: .05, clearProps: 'transform' }, .15);
  }

  /* ---------- Top bar ---------- */
  var topbar = $('[data-topbar]');
  function onScrollBasic() { topbar.classList.toggle('is-scrolled', window.scrollY > 24); }
  window.addEventListener('scroll', onScrollBasic, { passive: true }); onScrollBasic();

  if (!reduced) window.addEventListener('pointermove', function (e) {
    CC.mx = (e.clientX / innerWidth) * 2 - 1; CC.my = (e.clientY / innerHeight) * 2 - 1;
  }, { passive: true });

  /* ---------- Chapter sidebar ---------- */
  var order = ['top', 'craft', 'sweet', 'savory', 'drinks', 'spot', 'visit'];
  var titles = { top: 'Opener', craft: 'The craft', sweet: 'Sweet crepes', savory: 'Savory', drinks: 'Drinks', spot: 'The spot', visit: 'Visit' };
  var glows = { top: '#EBB054', craft: '#EBB054', savory: '#EBB054', drinks: '#F07C8E', spot: '#EBB054', visit: '#EBB054' };
  var railLinks = $$('[data-rail]'), railNow = $('[data-rail-now]'), railTitle = $('[data-rail-title]'), fill = $('[data-chapter-fill]');
  var current = '';
  function setChapter(id) {
    if (id === current) return; current = id;
    var idx = order.indexOf(id);
    railLinks.forEach(function (a, i) {
      var on = a.getAttribute('data-rail') === id;
      a.classList.toggle('is-active', on); a.classList.toggle('is-done', i < idx);
      if (on) a.setAttribute('aria-current', 'step'); else a.removeAttribute('aria-current');
    });
    if (railNow) railNow.textContent = '0' + (idx + 1);
    if (railTitle) railTitle.textContent = titles[id];
    if (fill) fill.style.transform = 'scaleY(' + (idx / (order.length - 1)) + ')';
    root.classList.toggle('in-sweet', id === 'sweet');
    if (id !== 'sweet' && glows[id]) root.style.setProperty('--glow', glows[id]);
  }

  /* ---------- Section progress -> 3D scenes, craft steps, sweet menu ---------- */
  var hero = $('#top'), craft = $('#craft'), sweet = $('#sweet'), drinks = $('#drinks');
  var steps = $$('.craft__step'), meter = $('[data-craft-meter]');
  var items = $$('.menu__item'), dots = $$('[data-goto]');
  var itemGlow = ['#E8414F', '#E59A4F', '#9C8A7E', '#F2CF5B', '#D58A3A'];
  var progressBar = $('[data-progress]');
  var activeItem = -1, lastStep = -1;
  var isStatic = function () { return root.classList.contains('static'); };

  function setItem(i) {
    if (i === activeItem) return;
    items.forEach(function (el, k) {
      el.classList.toggle('is-active', k === i);
      el.classList.toggle('is-before', k < i);
    });
    dots.forEach(function (b, k) { if (k === i) b.setAttribute('aria-current', 'true'); else b.removeAttribute('aria-current'); });
    sweetLayers.forEach(function (im, k) { im.classList.toggle('is-on', k === i); if (Math.abs(k - i) <= 1) im.loading = 'eager'; });
    root.style.setProperty('--glow', itemGlow[i]);
    activeItem = i;
  }

  function measure() {
    var vh = innerHeight;
    var r;
    r = hero.getBoundingClientRect(); CC.hero = clamp(-r.top / r.height);
    r = craft.getBoundingClientRect(); CC.craft = clamp(-r.top / (r.height - vh));
    r = sweet.getBoundingClientRect(); CC.sweetIn = clamp(1 - r.top / vh); CC.sweet = clamp(-r.top / (r.height - vh));
    r = drinks.getBoundingClientRect(); CC.drinksIn = clamp(1 - r.top / vh); CC.drinks = clamp(-r.top / (r.height - vh));

    var s = CC.craft < .3 ? 0 : CC.craft < .59 ? 1 : 2;
    if (s !== lastStep) { steps.forEach(function (el, i) { el.classList.toggle('is-active', i === s); }); lastStep = s; }
    if (meter) meter.style.transform = 'scaleX(' + CC.craft + ')';
    if (!isStatic()) {
      craftSeq.draw(Math.round(CC.craft * (craftSeq.n - 1)));
      if (CC.drinksIn > 0) smoothieSeq.draw(Math.round((CC.drinksIn * .35 + CC.drinks * .65) * (smoothieSeq.n - 1)) % smoothieSeq.n);
    }
    if (!isStatic()) setItem(Math.min(4, Math.floor(CC.sweet * 5 + .02)));

    var h = document.documentElement.scrollHeight - vh;
    if (progressBar) progressBar.style.transform = 'scaleX(' + (h > 0 ? scrollY / h : 0) + ')';

    // chapter = the section crossing the middle of the screen
    var mid = vh * .5, id = 'top';
    for (var i = 0; i < order.length; i++) { var el = document.getElementById(order[i]); var b = el.getBoundingClientRect(); if (b.top <= mid && b.bottom > mid) { id = order[i]; break; } }
    setChapter(id);
    if (id === 'top' || id === 'craft' || id === 'sweet') root.setAttribute('data-stage', id);
  }

  dots.forEach(function (b, k) {
    b.setAttribute('data-n', k + 1);
    b.addEventListener('click', function () {
      var top = sweet.getBoundingClientRect().top + scrollY;
      var y = top + (sweet.offsetHeight - innerHeight) * ((k + .5) / 5);
      if (window.lenis) window.lenis.scrollTo(y, { duration: 1.2 }); else scrollTo({ top: y, behavior: reduced ? 'auto' : 'smooth' });
    });
  });

  /* ---------- Reduced motion fades ---------- */
  function initFades() {
    var fio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) en.target.classList.add('is-in'); });
    }, { threshold: .12 });
    $$('.savory__head, .dish, .drinks__content, .spot__head, .facts, .visit__head, .visit__info, .map, .book, .menu__item').forEach(function (el) { el.setAttribute('data-fade', ''); fio.observe(el); });
  }

  /* ---------- Motion: Lenis + GSAP ScrollTrigger for the quieter reveals ---------- */
  function initMotion() {
    gsap.registerPlugin(ScrollTrigger);
    if (window.Lenis) {
      var lenis = new Lenis({ duration: 1.15, easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); } });
      window.lenis = lenis;
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
      gsap.ticker.lagSmoothing(0);
      $$('a[href^="#"]').forEach(function (a) {
        a.addEventListener('click', function (e) {
          var id = a.getAttribute('href'); if (id.length < 2) return;
          var t = $(id); if (!t) return;
          e.preventDefault(); lenis.scrollTo(t, { duration: 1.5 });
          if (id !== '#top') { t.setAttribute('tabindex', '-1'); t.focus({ preventScroll: true }); }
        });
      });
    }
    gsap.to('.hero__grid', { yPercent: -10, opacity: 0, ease: 'none', scrollTrigger: { trigger: '.hero', start: '50% top', end: 'bottom top', scrub: true } });
    gsap.from('.craft__head', { opacity: 0, y: 30, ease: 'power3.out', scrollTrigger: { trigger: '#craft', start: 'top 70%', end: 'top 20%', scrub: true } });
    gsap.from('.sweet__head, .sweet__foot', { opacity: 0, y: 24, ease: 'power3.out', scrollTrigger: { trigger: '#sweet', start: 'top 80%', end: 'top 20%', scrub: true } });
    gsap.from('[data-split] .line > span', { yPercent: 110, duration: 1, ease: 'expo.out', stagger: .1, scrollTrigger: { trigger: '.savory', start: 'top 65%' } });
    gsap.from('.drinks__content > *', { opacity: 0, y: 24, duration: .9, ease: 'power3.out', stagger: .07, scrollTrigger: { trigger: '.drinks', start: 'top 55%' } });
    gsap.fromTo('[data-marquee]', { xPercent: 0 }, { xPercent: -35, ease: 'none', scrollTrigger: { trigger: '.spot', start: 'top bottom', end: 'bottom top', scrub: true } });
    gsap.from('[data-scale]', { scale: .82, opacity: .2, transformOrigin: '0% 100%', ease: 'power3.out', scrollTrigger: { trigger: '.visit', start: 'top 95%', end: 'top 50%', scrub: true } });
    window.addEventListener('load', function () { ScrollTrigger.refresh(); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
    gsap.ticker.add(measure);
  }

  /* ---------- Booking request (preview: validates and confirms, sends nothing yet) ---------- */
  function initBooking() {
    var form = $('#book'); if (!form) return;
    var time = $('#b-time');
    // CONFIRM WITH OWNER: hours 12:30 PM–10:30 PM; last request slot 10:00 PM
    for (var m = 12 * 60 + 30; m <= 22 * 60; m += 30) {
      var h = Math.floor(m / 60), mm = m % 60, h12 = ((h + 11) % 12) + 1;
      var o = document.createElement('option'); o.value = (h < 10 ? '0' : '') + h + ':' + (mm ? '30' : '00');
      o.textContent = h12 + ':' + (mm ? '30' : '00') + ' PM'; time.appendChild(o);
    }
    var date = $('#b-date'), d = new Date(); d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
    date.min = d.toISOString().slice(0, 10);
    var fields = { name: 'Add your name so the cafe knows who to ask for.', phone: 'Add a phone number with at least 10 digits.', date: 'Pick a date from today on.', time: 'Choose a time.', guests: 'Choose how many guests.' };
    function check(name) {
      var el = form.elements[name], err = $('#b-' + name + '-err'), ok = true, v = el.value.trim();
      if (name === 'phone') ok = v.replace(/\D/g, '').length >= 10;
      else if (name === 'date') ok = !!v && v >= date.min;
      else ok = !!v;
      el.setAttribute('aria-invalid', ok ? 'false' : 'true');
      if (ok) { el.removeAttribute('aria-describedby'); err.textContent = ''; } else { el.setAttribute('aria-describedby', err.id); err.textContent = fields[name]; }
      return ok;
    }
    Object.keys(fields).forEach(function (n) { form.elements[n].addEventListener('blur', function () { if (form.elements[n].value) check(n); }); });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var bad = Object.keys(fields).filter(function (n) { return !check(n); });
      if (bad.length) { form.elements[bad[0]].focus(); $('[data-book-status]').textContent = bad.length + ' field' + (bad.length > 1 ? 's need' : ' needs') + ' attention.'; return; }
      $('[data-book-name]').textContent = form.elements.name.value.trim().split(' ')[0];
      $('[data-book-fields]').hidden = true;
      var done = $('[data-book-done]'); done.hidden = false; done.focus();
      $('[data-book-status]').textContent = 'Request ready. This preview does not send it yet.';
    });
    $('[data-book-again]').addEventListener('click', function () {
      form.reset(); $('[data-book-done]').hidden = true; $('[data-book-fields]').hidden = false; form.elements.name.focus();
    });
  }

  function boot() {
    initBooking();
    if (!reduced && window.gsap && window.ScrollTrigger) { try { initMotion(); } catch (e) { console.warn(e); } }
    else { initFades(); window.addEventListener('scroll', measure, { passive: true }); }
    measure();
    if (!isStatic()) setItem(0);
    var go = function () {
      heroIntro();
      if (isStatic()) return;
      var idle = window.requestIdleCallback || function (f) { setTimeout(f, 400); };
      idle(function () { craftSeq.start(); });
      var dv = $('.drinks__visual');
      if (dv && 'IntersectionObserver' in window) new IntersectionObserver(function (en, ob) {
        if (en[0].isIntersecting) { smoothieSeq.start(); var fb = $('.drinks__fallback'); setTimeout(function () { fb.classList.add('is-hidden'); }, 600); ob.disconnect(); }
      }, { rootMargin: '120% 0px' }).observe(dv);
    };
    if (window.CCIntro) window.CCIntro.run(go); else { root.classList.add('intro-done', 'is-loaded'); go(); }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
