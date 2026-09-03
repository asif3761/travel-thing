document.addEventListener('DOMContentLoaded', function () {
  var cfg = window.TRAVELTHING || {};

  /* ---------- Mobile nav toggle ---------- */
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');

  if (toggle && header) {
    toggle.addEventListener('click', function () {
      var isOpen = header.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.querySelectorAll('.nav-links a').forEach(function (link) {
      link.addEventListener('click', function () {
        header.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Footer year, always correct, never hand-edited ---------- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- Links that depend on details we don't have yet ----------
     While the config value is null, the element is shown as a disabled
     "coming soon" control instead of a fake or dead link. The moment a
     real value is added to config.js, it lights up everywhere at once. */
  function wireOptionalLink(attr, url, comingSoonSuffix) {
    document.querySelectorAll('[' + attr + ']').forEach(function (el) {
      var labelEl = el.querySelector('.btn-label') || el;
      var baseLabel = labelEl.getAttribute('data-label') || labelEl.textContent.trim();
      labelEl.setAttribute('data-label', baseLabel);

      if (url) {
        el.href = url;
        el.classList.remove('is-disabled');
        el.removeAttribute('aria-disabled');
        labelEl.textContent = baseLabel;
      } else {
        el.href = '#';
        el.classList.add('is-disabled');
        el.setAttribute('aria-disabled', 'true');
        el.addEventListener('click', function (e) { e.preventDefault(); });
        labelEl.textContent = baseLabel + comingSoonSuffix;
      }
    });
  }

  wireOptionalLink('data-fb-link', cfg.facebookUrl, ' — coming soon');
  wireOptionalLink('data-website-link', cfg.websiteUrl, ' — coming soon');

  /* ---------- Detail rows that only make sense once we have real data ----------
     Hidden by default in both CSS and markup; revealed only when set. */
  function revealOptionalBlock(key, value, textSelector, hrefBuilder) {
    document.querySelectorAll('[data-optional-block="' + key + '"]').forEach(function (block) {
      if (!value) return; // stays hidden — no fake info shown
      block.removeAttribute('data-optional-block');
      var textEl = block.querySelector(textSelector);
      if (textEl) textEl.textContent = value;
      if (hrefBuilder) {
        var linkEl = block.querySelector('a');
        if (linkEl) linkEl.href = hrefBuilder(value);
      }
    });
  }

  revealOptionalBlock('email', cfg.email, '[data-value]', function (v) { return 'mailto:' + v; });
  revealOptionalBlock('address', cfg.address, '[data-value]');
  revealOptionalBlock('hours', cfg.hours, '[data-value]');
});
