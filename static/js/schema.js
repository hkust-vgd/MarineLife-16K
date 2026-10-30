/* Progressive enhancement for Gate 4: Fine-grained Annotation Schema Tabs */
(() => {
  'use strict';

  function initSchemaTabs() {
    const tablist = document.getElementById('schema-tablist');
    const tabs = [...document.querySelectorAll('#schema-tablist [role="tab"]')];
    const panels = [...document.querySelectorAll('.schema-panel')];

    if (!tablist || tabs.length === 0 || panels.length === 0) return;

    // Show tablist now that JavaScript is active
    tablist.hidden = false;

    // Hide static panel fallback headings that are redundant when tabs are active
    document.querySelectorAll('.schema-panel-fallback-title').forEach(el => {
      el.hidden = true;
    });

    function selectTab(targetTab) {
      tabs.forEach(tab => {
        const isSelected = tab === targetTab;
        tab.setAttribute('aria-selected', String(isSelected));
        tab.tabIndex = isSelected ? 0 : -1;

        const panelId = tab.getAttribute('aria-controls');
        const panel = document.getElementById(panelId);
        if (panel) {
          panel.hidden = !isSelected;
        }
      });
    }

    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        selectTab(tab);
      });

      tab.addEventListener('keydown', event => {
        if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();

        let nextIndex;
        if (event.key === 'Home') {
          nextIndex = 0;
        } else if (event.key === 'End') {
          nextIndex = tabs.length - 1;
        } else if (event.key === 'ArrowRight') {
          nextIndex = (index + 1) % tabs.length;
        } else if (event.key === 'ArrowLeft') {
          nextIndex = (index - 1 + tabs.length) % tabs.length;
        }

        const nextTab = tabs[nextIndex];
        selectTab(nextTab);
        nextTab.focus();
      });
    });

    // Ensure initial panel visibility aligns with aria-selected
    const initiallySelected = tabs.find(t => t.getAttribute('aria-selected') === 'true') || tabs[0];
    selectTab(initiallySelected);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSchemaTabs);
  } else {
    initSchemaTabs();
  }
})();
