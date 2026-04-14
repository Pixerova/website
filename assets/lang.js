(function () {
  var currentLang = 'en';

  var langBtns = document.querySelectorAll('.lang-btn');
  var translatables = document.querySelectorAll('[data-en]');

  function setLang(lang) {
    currentLang = lang;

    // Update all translatable elements
    translatables.forEach(function (el) {
      var text = el.getAttribute('data-' + lang);
      if (text) el.textContent = text;
    });

    // Update button states
    langBtns.forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    // Update html lang attribute
    document.documentElement.setAttribute('lang', lang);
  }

  langBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLang(btn.getAttribute('data-lang'));
    });
  });
})();
