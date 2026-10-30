/* Citation copying with Clipboard API and local-file fallback. */
(() => {
  'use strict';
  const button = document.getElementById('copy-bibtex');
  const code = document.getElementById('bibtex-code');
  const status = document.getElementById('copy-status');
  if (!button || !code || !status) return;
  const label = button.querySelector('.copy-label');
  button.hidden = false;

  function fallbackCopy(text) {
    const field = document.createElement('textarea');
    field.value = text;
    field.readOnly = true;
    field.style.cssText = 'position:fixed;left:-9999px;top:0;opacity:0;';
    document.body.append(field);
    field.select();
    let copied = false;
    try { copied = document.execCommand('copy'); }
    catch { copied = false; }
    finally { field.remove(); button.focus({ preventScroll: true }); }
    return copied;
  }

  let resetTimer;
  button.addEventListener('click', async () => {
    clearTimeout(resetTimer);
    button.classList.remove('is-copied');
    label.textContent = 'Copy';
    const text = code.textContent.trim();
    let copied = false;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        copied = true;
      }
    } catch { /* File URLs and browser policies may require the fallback. */ }
    if (!copied) copied = fallbackCopy(text);
    if (copied) {
      label.textContent = 'Copied';
      button.classList.add('is-copied');
      status.textContent = 'BibTeX copied to clipboard.';
      resetTimer = setTimeout(() => {
        label.textContent = 'Copy';
        button.classList.remove('is-copied');
      }, 2500);
    } else {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(code);
      selection.removeAllRanges();
      selection.addRange(range);
      code.parentElement.focus({ preventScroll: true });
      status.textContent = 'Copy was blocked. The citation is selected; press Ctrl+C (or Command+C) to copy.';
    }
  });
})();
