/* Crepe Craft Cafe: page behaviour that works with or without WebGL.
   The 3D layer (scene.js, three.js) is loaded with import() only when WebGL is available. */
(function () {
  'use strict';
  var d = document.documentElement;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- booking request: opens a ready-to-send email to the cafe (no backend) ----------
     Validation: nothing turns red while typing; a field is checked when you leave it, its error clears as soon as you
     go back to it, and the submit button is never disabled (a click with gaps jumps to the first one). */
  var form = document.getElementById('book-form');
  if (form) {
    var TO = 'crepe.craft@yahoo.com';
    var fields = form.querySelector('[data-book-fields]'), done = form.querySelector('[data-book-done]');
    var date = form.querySelector('#b-date'), guests = form.querySelector('#b-guests'), timeLabel = form.querySelector('[data-time-label]');
    var today = new Date(); today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
    date.min = today.toISOString().slice(0, 10);
    var TYPES = {
      table: { label: 'Table booking', time: 'Time' },
      party: { label: 'Party booking', time: 'Start time' },
      group: { label: 'Group order', time: 'Pickup time' }
    };
    var type = function () { var c = form.querySelector('input[name="type"]:checked'); return c ? c.value : 'table'; };
    Array.prototype.forEach.call(form.querySelectorAll('input[name="type"]'), function (r) {
      r.addEventListener('change', function () { timeLabel.textContent = TYPES[type()].time; });
    });
    var checks = {
      date: function (v) { return !v ? 'Pick a date.' : (v < date.min ? 'Pick today or a later date.' : ''); },
      time: function (v) { return !v ? 'Pick a time.' : ''; },
      guests: function (v) { var n = parseInt(v, 10); return !n || n < 1 ? 'Add how many people, 1 or more.' : (n > 500 ? 'For more than 500 people, call the cafe.' : ''); },
      name: function (v) { return v.trim().length < 2 ? 'Add your name so the cafe knows who is asking.' : ''; },
      phone: function (v) { return v.replace(/\D/g, '').length < 10 ? 'Add a phone number with area code, like (973) 555-0123.' : ''; },
      email: function (v) { return v.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? 'Enter an email like name@example.com, or leave it empty.' : ''; }
    };
    var inputs = Array.prototype.filter.call(form.querySelectorAll('input, select'), function (el) { return checks[el.name]; });
    function show(el, msg) {
      var err = document.getElementById(el.id + '-err');
      if (msg) el.setAttribute('aria-invalid', 'true'); else el.removeAttribute('aria-invalid');
      if (err) err.textContent = msg;
    }
    function check(el) { var msg = checks[el.name](el.value); show(el, msg); return !msg; }
    inputs.forEach(function (el) {
      el.addEventListener('blur', function () { check(el); });
      el.addEventListener('focus', function () { if (el.getAttribute('aria-invalid') === 'true') show(el, ''); });
      el.addEventListener(el.tagName === 'SELECT' ? 'change' : 'input', function () { if (el.getAttribute('aria-invalid') === 'true') show(el, ''); });
    });
    Array.prototype.forEach.call(form.querySelectorAll('[data-step]'), function (btn) {
      btn.addEventListener('click', function () {
        var n = parseInt(guests.value, 10) || 0;
        guests.value = Math.max(1, Math.min(500, n + parseInt(btn.dataset.step, 10)));
        show(guests, '');
      });
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var bad = null;
      inputs.forEach(function (el) { if (!check(el) && !bad) bad = el; });
      if (bad) { bad.scrollIntoView({ block: 'center', behavior: reduce ? 'auto' : 'smooth' }); bad.focus({ preventScroll: true }); return; }
      var v = function (n) { return form.elements[n].value.trim(); };
      var t = TYPES[type()];
      var when = new Date(v('date') + 'T12:00:00').toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
      var n = v('guests') + (v('guests') === '1' ? ' person' : ' people');
      var subject = t.label + ' request: ' + n + ', ' + when + ' at ' + v('time');
      var body = 'Hi Crepe Craft,\n\nI would like to request a ' + t.label.toLowerCase() + '.\n\n' +
        'Date: ' + when + '\n' + t.time + ': ' + v('time') + '\nPeople: ' + v('guests') + '\n' +
        'Name: ' + v('name') + '\nPhone: ' + v('phone') + (v('email') ? '\nEmail: ' + v('email') : '') +
        (v('notes') ? '\n\nNotes: ' + v('notes') : '') + '\n\nPlease let me know if that works. Thanks!';
      window.location.href = 'mailto:' + TO + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      form.querySelector('[data-book-name]').textContent = v('name').split(' ')[0];
      form.querySelector('[data-book-summary]').textContent = t.label + ' for ' + n + ', ' + when + ' at ' + v('time') + '.';
      fields.hidden = true; done.hidden = false; done.focus();
    });
    form.querySelector('[data-book-again]').addEventListener('click', function () {
      form.reset(); timeLabel.textContent = TYPES.table.time; inputs.forEach(function (el) { show(el, ''); });
      done.hidden = true; fields.hidden = false; form.querySelector('input[name="type"]').focus();
    });
  }

  /* ---------- 3D layer ---------- */
  if (!d.classList.contains('gl')) return;
  function fallback() { d.classList.remove('gl', 'gl-ready', 'menu-ready', 'hero-live', 'hero-done'); d.classList.add('no-gl'); }
  // if the 3D layer is slow to arrive, the words and buttons never wait for it
  setTimeout(function () { if (!d.classList.contains('gl-ready')) d.classList.add('hero-live'); }, 6000);
  var start = function () {
    import('./scene.js').then(function (m) { return m.boot({ reduce: reduce }); }).catch(function (err) { console.warn('3D layer off:', err && err.message); fallback(); });
  };
  if (document.readyState === 'complete') start(); else addEventListener('load', start, { once: true });
})();
