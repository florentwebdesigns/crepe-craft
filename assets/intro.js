/* Crepe Craft Cafe: intro film -> Crepe Craft wordmark -> the film lands in the hero.
   Also the frame-sequence players for the craft fold and the smoothie turn.
   Exposes window.CCIntro.run(done) and window.CCSeq. Loaded before app.js. */
(function () {
  'use strict';
  var root = document.documentElement;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  function finishNow(intro, done) {
    if (intro && intro.parentNode) intro.parentNode.removeChild(intro);
    root.classList.add('intro-done', 'is-loaded'); done();
  }

  function run(done) {
    var intro = $('[data-intro]');
    if (!root.classList.contains('has-intro') || !intro) { finishNow(intro, done); return; }
    try { sessionStorage.setItem('cc-intro', '1'); } catch (e) {}
    var film = $('[data-intro-film]'), caps = $$('[data-intro-caps] li'), bar = $('[data-intro-bar]'), skip = $('[data-intro-skip]');
    intro.removeAttribute('aria-hidden');
    [film, $('[data-intro-caps]'), $('[data-intro-brand]'), $('.intro__bar')].forEach(function (el) { el.setAttribute('aria-hidden', 'true'); });
    skip.tabIndex = 0;
    var stage = 'film', D = 4.375;

    function tick() {
      if (stage !== 'film') return;
      var t = film.currentTime, d = film.duration || D;
      bar.style.transform = 'scaleX(' + Math.min(1, t / d) + ')';
      caps.forEach(function (li, i) {
        var a = parseFloat(li.getAttribute('data-at')), b = i < caps.length - 1 ? parseFloat(caps[i + 1].getAttribute('data-at')) : 99;
        li.classList.toggle('is-on', t >= a && t < b);
      });
      requestAnimationFrame(tick);
    }
    function brand() {
      if (stage !== 'film') return; stage = 'brand';
      bar.style.transform = 'scaleX(1)';
      intro.classList.add('is-brand');
      setTimeout(leave, 1750);
    }
    function toEnd() { try { film.pause(); if (film.duration) film.currentTime = film.duration - 0.02; } catch (e) {} }
    function leave() {
      if (stage === 'leave') return;
      if (stage === 'film') toEnd();
      stage = 'leave';
      unbind();
      var m = $('[data-stage-media]').getBoundingClientRect(), v = film.getBoundingClientRect();
      intro.classList.remove('is-brand'); intro.classList.add('is-leaving');
      film.style.transition = 'transform 1.15s cubic-bezier(.65,0,.2,1), filter .8s ease';
      film.style.transform = 'translate(' + (m.left - v.left) + 'px,' + (m.top - v.top) + 'px) scale(' + (m.width / v.width) + ')';
      root.classList.add('is-loaded');
      setTimeout(done, 380);
      setTimeout(function () {
        var hadFocus = document.activeElement === skip;
        root.classList.add('intro-done');
        intro.style.transition = 'opacity .45s ease'; intro.style.opacity = '0';
        setTimeout(function () { if (intro.parentNode) intro.parentNode.removeChild(intro); }, 500);
        if (hadFocus) { var h = $('#hero-title'); h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true }); }
      }, 1200);
    }
    function onSkip() { if (stage === 'film') { toEnd(); brand(); } else leave(); }
    function onKey(e) {
      if (e.target === skip) return;
      if (/^(Escape| |Spacebar|ArrowDown|PageDown)$/.test(e.key)) { e.preventDefault(); onSkip(); }
    }
    function unbind() {
      window.removeEventListener('wheel', onSkip); window.removeEventListener('touchmove', onSkip); window.removeEventListener('keydown', onKey);
    }
    skip.addEventListener('click', onSkip);
    window.addEventListener('wheel', onSkip, { passive: true });
    window.addEventListener('touchmove', onSkip, { passive: true });
    window.addEventListener('keydown', onKey);
    film.addEventListener('ended', brand);
    var p = film.play();
    if (p && p.catch) p.catch(function () { toEnd(); brand(); });
    // never hold the page: if the film has not started after 3.5s, go straight to the wordmark
    setTimeout(function () { if (stage === 'film' && film.currentTime < 0.15) { toEnd(); brand(); } }, 3500);
    requestAnimationFrame(tick);
  }

  /* Frame sequence on a 2D canvas: loads coarse-to-fine, draws the nearest loaded frame. */
  function Seq(canvas, n, url) {
    var imgs = new Array(n), ctx = canvas && canvas.getContext('2d'), started = false, want = 0, drawn = -1;
    function load(i) {
      if (imgs[i]) return; var im = new Image(); im.decoding = 'async';
      im.onload = function () { im.ok = true; draw(want, true); };
      im.src = url(i); imgs[i] = im;
    }
    function start() {
      if (started || !ctx) return; started = true;
      var order = [];
      [8, 4, 2, 1].forEach(function (step) { for (var i = 0; i < n; i += step) if (order.indexOf(i) < 0) order.push(i); });
      if (order.indexOf(n - 1) < 0) order.push(n - 1);
      var k = 0;
      (function next() { var c = 0; while (k < order.length && c++ < 4) load(order[k++]); if (k < order.length) setTimeout(next, 80); })();
    }
    function draw(i, force) {
      if (!ctx) return; want = i;
      var best = -1;
      for (var d = 0; d < n && best < 0; d++) {
        if (imgs[i - d] && imgs[i - d].ok) best = i - d;
        else if (imgs[i + d] && imgs[i + d].ok) best = i + d;
      }
      if (best < 0 || (best === drawn && !force)) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(imgs[best], 0, 0, canvas.width, canvas.height); drawn = best;
    }
    return { start: start, draw: draw, n: n };
  }

  window.CCIntro = { run: run };
  window.CCSeq = Seq;
})();
