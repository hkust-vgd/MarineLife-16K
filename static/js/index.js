/* Sample annotations are preserved from the original project page. */
(() => {
  'use strict';
  const sampleInfo = [
    { title: 'Reef fish', location: 'Big Island · January 2023', duration: '00:29' },
    { title: 'Sea turtle', location: 'Green Island · April 2023', duration: '00:33' },
    { title: 'Coral reef', location: 'KAUST · June 2023', duration: '01:01' },
    { title: 'School of fish', location: 'Green Island · Guanqun collection', duration: '00:33' },
    { title: 'Shark', location: 'West Palm Beach · May 2023', duration: '00:31' }
  ];
  const get = (id) => document.getElementById(id);
  const state = { sample: 1, question: 0, panel: 'attributes' };
  const video = get('sample-video');
  const picker = get('sample-picker');
  const tabs = [...document.querySelectorAll('[data-panel]')];
  const poster = (sample) => `./static/images/samples/${sample.filename.replace(/\.mp4$/, '.webp')}`;
  const node = (tag, text, className) => {
    const element = document.createElement(tag);
    if (text !== undefined) element.textContent = text;
    if (className) element.className = className;
    return element;
  };
  demoVideos.forEach((sample, index) => {
    const button = node('button', undefined, 'sample-button');
    button.type = 'button';
    button.setAttribute('aria-pressed', String(index === state.sample));
    button.setAttribute('aria-label', `Explore ${sampleInfo[index].title.toLowerCase()} video`);
    const image = node('img');
    image.src = poster(sample);
    image.alt = '';
    image.width = 160;
    image.height = 100;
    image.loading = 'lazy';
    button.append(image, node('span', sampleInfo[index].title));
    button.addEventListener('click', () => selectSample(index));
    picker.append(button);
  });
  function selectPanel(name, focus = false) {
    state.panel = name;
    tabs.forEach((tab) => {
      const active = tab.dataset.panel === name;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      get(`panel-${tab.dataset.panel}`).hidden = !active;
      if (active && focus) tab.focus();
    });
  }
  function renderQuestion() {
    const questions = demoVideos[state.sample].qa;
    const question = questions[state.question];
    get('question-select').value = String(state.question);
    get('previous-question').disabled = state.question === 0;
    get('next-question').disabled = state.question === questions.length - 1;
    get('question-format').textContent = question.options.length ? 'Multiple choice · Select an answer' : 'Open-ended question';
    get('question-text').textContent = question.question;
    get('answer-feedback').replaceChildren();
    get('reveal-answer').hidden = false;
    const options = get('question-options');
    options.replaceChildren();
    question.options.forEach((option) => {
      const button = node('button', undefined, 'answer-option');
      button.type = 'button';
      button.dataset.label = option.label;
      button.append(node('b', option.label), node('span', option.text));
      button.addEventListener('click', () => revealAnswer(option.label));
      options.append(button);
    });
  }
  function revealAnswer(selected) {
    const question = demoVideos[state.sample].qa[state.question];
    const correct = question.answer.match(/^([A-D])\s*[—–-]/)?.[1];
    get('question-options').querySelectorAll('button').forEach((button) => {
      button.classList.toggle('is-correct', button.dataset.label === correct);
      button.classList.toggle('is-incorrect', button.dataset.label === selected && selected !== correct);
    });
    const label = selected ? (selected === correct ? 'Correct. ' : 'Not the reference answer. ') : '';
    get('answer-feedback').replaceChildren(node('span', `${label}Reference answer: `, 'feedback-label'), node('span', question.answer));
    get('reveal-answer').hidden = true;
  }
  function selectSample(index, initial = false) {
    state.sample = index;
    state.question = 0;
    const sample = demoVideos[index];
    const info = sampleInfo[index];
    if (!initial) {
      video.pause();
      video.poster = poster(sample);
      video.src = `./Video_demo/${sample.filename}`;
      video.load();
    }
    video.setAttribute('aria-label', `${info.title} sample video`);
    get('sample-title').textContent = info.title;
    get('sample-location').textContent = info.location;
    get('sample-duration').textContent = info.duration;
    get('sample-count').textContent = `${String(index + 1).padStart(2, '0')} / 05`;
    get('qa-count').textContent = sample.qa.length;
    [...picker.children].forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
    const list = get('attribute-list');
    list.replaceChildren();
    sample.attributes.forEach((attribute) => {
      const row = node('div', undefined, /Motion|Camera/.test(attribute.label) ? 'motion-attribute' : '');
      row.append(node('dt', attribute.label), node('dd', attribute.value));
      list.append(row);
    });
    const caption = sample.qa.find((question) => /video-captioning sentence/i.test(question.question));
    get('sample-caption').textContent = caption ? caption.answer : 'No reference caption is available for this sample.';
    get('question-select').replaceChildren(...sample.qa.map((question, i) => {
      const option = node('option', `Question ${String(i + 1).padStart(2, '0')} of ${sample.qa.length}`);
      option.value = i;
      return option;
    }));
    renderQuestion();
    document.querySelectorAll('.tab-panel').forEach((panel) => { panel.scrollTop = 0; });
    if (!initial) get('explorer-status').textContent = `${info.title} selected. ${sample.attributes.length} attributes and ${sample.qa.length} questions.`;
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectPanel(tab.dataset.panel));
    tab.addEventListener('keydown', (event) => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) {
        event.preventDefault();
        selectPanel(tabs[next].dataset.panel, true);
      }
    });
  });
  get('question-select').addEventListener('change', (event) => { state.question = Number(event.target.value); renderQuestion(); });
  get('previous-question').addEventListener('click', () => { if (state.question > 0) { state.question--; renderQuestion(); } });
  get('next-question').addEventListener('click', () => { if (state.question < demoVideos[state.sample].qa.length - 1) { state.question++; renderQuestion(); } });
  get('reveal-answer').addEventListener('click', () => revealAnswer());
  document.querySelectorAll('[data-explore-index]').forEach((link) => link.addEventListener('click', () => { selectSample(Number(link.dataset.exploreIndex)); selectPanel('attributes'); }));
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = get('navigation');
  function closeMenu(returnFocus = false) {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.querySelector('span').textContent = '+';
    if (returnFocus) menuButton.focus();
  }
  menuButton.addEventListener('click', () => {
    const open = navigation.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.querySelector('span').textContent = open ? '−' : '+';
  });
  navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => closeMenu()));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && navigation.classList.contains('is-open')) closeMenu(true); });
  document.addEventListener('click', (event) => { if (!event.target.closest('.site-header')) closeMenu(); });
  matchMedia('(min-width: 851px)').addEventListener('change', (event) => { if (event.matches) closeMenu(); });
  get('copy-citation').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(get('bibtex').textContent);
      get('copy-status').textContent = 'BibTeX copied to clipboard.';
    } catch {
      const range = document.createRange();
      range.selectNodeContents(get('bibtex'));
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      get('copy-status').textContent = 'Citation selected. Press Ctrl+C (or Command+C) to copy.';
    }
  });
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) navigation.querySelectorAll('a[href^="#"]').forEach((link) => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -50% 0px' });
  ['overview', 'explore', 'benchmark', 'resources'].forEach((id) => observer.observe(get(id)));
  document.addEventListener('visibilitychange', () => { if (document.hidden) video.pause(); });
  selectSample(1, true);
})();
