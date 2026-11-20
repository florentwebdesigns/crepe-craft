/* Crepe Craft Cafe: page behaviour that works with or without WebGL.
   The 3D layer (scene.js, three.js) is loaded with import() only when WebGL is available. */
(function () {
  'use strict';
  var d = document.documentElement;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- party / group inquiry: opens a ready-to-send email (no backend) ---------- */
  var form = document.getElementById('party-form');
  if (form) {
    var TO = 'crepe.craft@yahoo.com';
    var fields = form.querySelector('[data-party-fields]'), done = form.querySelector('[data-party-done]');
    var date = form.querySelector('#p-date');
    var today = new Date(); today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
    date.min = today.toISOString().slice(0, 10);
    var checks = {
      name: function (v) { return v.trim().length < 2 ? 'Add your name so the cafe knows who is asking.' : ''; },
      phone: function (v) { return v.replace(/\D/g, '').length < 10 ? 'Add a phone number with area code, like (973) 555-0123.' : ''; },
      date: function (v) { return !v ? 'Pick the date of your party or order.' : (v < date.min ? 'Pick today or a later date.' : ''); },
      guests: function (v) { var n = parseInt(v, 10); return !n || n < 2 ? 'Add how many people, 2 or more.' : ''; }
    };
    function check(input) {
      var msg = checks[input.name] ? checks[input.name](input.value) : '';
      var err = document.getElementById(input.id + '-err');
      input.setAttribute('aria-invalid', msg ? 'true' : 'false');
      if (err) err.textContent = msg;
      return !msg;
    }
    Array.prototype.forEach.call(form.querySelectorAll('input'), function (input) {
      input.addEventListener('blur', function () { if (input.value) check(input); });
      input.addEventListener('input', function () { if (input.getAttribute('aria-invalid') === 'true') check(input); });
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var bad = null;
      Array.prototype.forEach.call(form.querySelectorAll('input'), function (input) { if (!check(input) && !bad) bad = input; });
      if (bad) { bad.focus(); return; }
      var v = function (n) { return form.elements[n].value.trim(); };
      var when = new Date(v('date') + 'T12:00:00').toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
      var subject = 'Party / group inquiry: ' + v('guests') + ' people on ' + when;
      var body = 'Hi Crepe Craft,\n\nI would like to ask about a party or group order.\n\n' +
        'Name: ' + v('name') + '\nPhone: ' + v('phone') + '\nDate: ' + when + '\nPeople: ' + v('guests') + '\n\nThanks!';
      window.location.href = 'mailto:' + TO + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      form.querySelector('[data-party-name]').textContent = v('name').split(' ')[0];
      fields.hidden = true; done.hidden = false; done.focus();
    });
    form.querySelector('[data-party-again]').addEventListener('click', function () {
      form.reset(); done.hidden = true; fields.hidden = false; form.querySelector('#p-name').focus();
    });
  }

  /* ---------- 3D layer ---------- */
  if (!d.classList.contains('gl')) return;
  function fallback() { d.classList.remove('gl', 'gl-ready', 'menu-ready'); d.classList.add('no-gl'); }
  var start = function () {
    import('./scene.js').then(function (m) { return m.boot({ reduce: reduce }); }).catch(function (err) { console.warn('3D layer off:', err && err.message); fallback(); });
  };
  if (document.readyState === 'complete') start(); else addEventListener('load', start, { once: true });
})();
