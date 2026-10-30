/* Click-to-enlarge viewer with keyboard dismissal, multi-figure support, and direct-image fallback. */
(() => {
  'use strict';
  const triggers = document.querySelectorAll('.teaser-link, .figure-zoomable');
  const dialog = document.getElementById('figure-viewer');
  if (!triggers.length || !dialog || typeof dialog.showModal !== 'function') return;
  const viewport = document.getElementById('figure-viewport');
  const image = document.getElementById('enlarged-figure');
  const title = document.getElementById('figure-viewer-title');
  const zoom = document.getElementById('figure-zoom-toggle');
  let activeTrigger = triggers[0];

  function setZoom(enlarged) {
    viewport.classList.toggle('is-zoomed', enlarged);
    zoom.setAttribute('aria-pressed', String(enlarged));
    zoom.setAttribute('aria-label', enlarged ? 'Fit image' : 'Zoom in');
    zoom.title = enlarged ? 'Fit image' : 'Zoom in';
    zoom.firstElementChild.textContent = enlarged ? '−' : '+';
    viewport.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }

  triggers.forEach(trigger => {
    trigger.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      activeTrigger = trigger;
      image.src = trigger.href;
      const childImg = trigger.querySelector('img');
      const figureAlt = trigger.getAttribute('data-alt') || (childImg ? childImg.alt : 'Enlarged figure');
      const figureTitle = trigger.getAttribute('data-title') || (childImg && childImg.alt ? childImg.alt : 'Figure viewer');
      image.alt = figureAlt;
      if (title) title.textContent = figureTitle;
      setZoom(false);
      dialog.showModal();
      document.body.classList.add('figure-viewer-open');
    });
  });

  zoom.addEventListener('click', () => setZoom(!viewport.classList.contains('is-zoomed')));
  document.getElementById('figure-viewer-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('figure-viewer-open');
    if (activeTrigger) activeTrigger.focus({ preventScroll: true });
  });
})();
