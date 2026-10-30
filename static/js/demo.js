/* Display the original sample annotations without modifying their content. */
(() => {
  'use strict';
  if (typeof demoVideos === 'undefined' || !demoVideos.length) return;
  const get = id => document.getElementById(id);
  const video = get('demo-video');
  if (!video) return;
  const start = get('video-start');
  const info = [
    { title: 'Reef fish', location: 'Big Island · January 2023' },
    { title: 'Sea turtle', location: 'Green Island · April 2023' },
    { title: 'Coral reef', location: 'KAUST · June 2023' },
    { title: 'School of fish', location: 'Green Island · Guanqun collection' },
    { title: 'Shark', location: 'West Palm Beach · May 2023' }
  ];
  const state = { sample: 1 };
  const picker = get('sample-picker');
  const tabs = [...document.querySelectorAll('.demo-tabs [role="tab"]')];
  const node = (tag, text, className) => {
    const element = document.createElement(tag);
    if (text !== undefined) element.textContent = text;
    if (className) element.className = className;
    return element;
  };
  const isCaption = question => question.question.startsWith('Write one complete video-captioning sentence');
  const poster = sample => `./static/images/samples/${sample.filename.replace(/\.mp4$/, '.webp')}`;
  const attributeGroups = [
    { title: 'Subject & appearance', labels: ['Central object', 'Texture and pattern', 'Color', 'Size and shape'] },
    { title: 'Scene & visibility', labels: ['Secondary objects', 'Environment', 'Lighting', 'Video quality'] },
    { title: 'Object activity', labels: ['Motion'], wide: true },
    { title: 'Camera viewpoint & motion', labels: ['Camera position', 'Camera angle'], wide: true }
  ];

  function renderAnnotations(sample) {
    get('sample-annotations').replaceChildren(...attributeGroups.map((group, index) => {
      const section = node('section', undefined, 'attribute-group');
      const heading = node('h4', group.title);
      heading.id = `attribute-group-${index}`;
      section.setAttribute('aria-labelledby', heading.id);
      const list = node('dl', undefined, `attribute-cards${group.wide ? ' attribute-cards-wide' : ''}`);
      sample.attributes.filter(attribute => group.labels.includes(attribute.label)).forEach(attribute => {
        const card = node('div');
        card.append(node('dt', attribute.label), node('dd', attribute.value));
        list.append(card);
      });
      section.append(heading, list);
      return section;
    }));
  }

  function renderQuestions(sample) {
    get('question-list').replaceChildren(...sample.qa.map((question, index) => {
      const item = node('details', undefined, 'qa-item');
      const summary = node('summary');
      const type = isCaption(question) ? 'Captioning' : question.options.length ? 'Multiple choice' : 'Open-ended';
      const title = node('span', question.question, 'qa-question');
      title.id = `qa-question-${index}`;
      const qaType = node('span', undefined, 'qa-type');
      const idxSpan = node('span', String(index + 1).padStart(2, '0'), 'qa-num');
      const sep = node('span', undefined, 'qa-sep');
      sep.setAttribute('aria-hidden', 'true');
      const typeSpan = node('span', type.toUpperCase(), 'qa-category');
      qaType.append(idxSpan, sep, typeSpan);
      summary.append(qaType, title);
      const content = node('div', undefined, 'qa-content');
      const feedback = node('p', undefined, 'sr-only');
      feedback.setAttribute('role', 'status');
      if (question.options.length) {
        const choices = node('fieldset', undefined, 'qa-choices');
        choices.append(node('legend', 'Choose an answer', 'sr-only'));
        choices.setAttribute('aria-labelledby', title.id);
        const correctLabel = question.answer.split(' — ')[0].trim();
        question.options.forEach(option => {
          const label = node('label', undefined, 'qa-option');
          const input = node('input');
          input.type = 'radio';
          input.name = `sample-${state.sample}-question-${index}`;
          input.value = option.label;
          input.addEventListener('change', () => {
            if (!input.checked) return;
            const correct = option.label === correctLabel;
            choices.querySelectorAll('.qa-option').forEach(choice => {
              const radio = choice.querySelector('input');
              choice.classList.toggle('is-correct', radio.value === correctLabel);
              choice.classList.toggle('is-incorrect', radio.checked && !correct);
            });
            feedback.textContent = correct ? 'Correct answer.' : `Incorrect. Correct answer: ${question.answer}.`;
          });
          label.append(input, node('span', option.label, 'option-letter'), node('span', option.text, 'option-text'));
          choices.append(label);
        });
        content.append(choices, feedback);
      } else {
        const reference = node('div', undefined, 'qa-reference');
        reference.append(node('h5', 'Answer'), node('p', question.answer));
        content.append(reference);
      }
      item.append(summary, content);
      return item;
    }));
  }

  function selectSample(index, initial = false) {
    state.sample = index;
    const sample = demoVideos[index];
    if (!initial) {
      video.pause();
      video.poster = poster(sample);
      video.src = `./Video_demo/${sample.filename}`;
      video.load();
    }
    video.setAttribute('aria-label', `${info[index].title} video`);
    video.controls = false;
    start.hidden = false;
    start.setAttribute('aria-label', `Play ${info[index].title.toLowerCase()} video`);
    get('video-cover').src = poster(sample);
    video.querySelector('a').href = video.src;
    video.querySelector('a').textContent = `Open the ${info[index].title.toLowerCase()} video`;
    get('video-error').hidden = true;
    const titleEl = get('sample-title'); if (titleEl) titleEl.textContent = info[index].title;
    const locEl = get('sample-location'); if (locEl) locEl.textContent = info[index].location;
    get('sample-caption').textContent = sample.qa.find(isCaption).answer;
    renderAnnotations(sample);
    [...picker.children].forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
    renderQuestions(sample);
    get('panel-annotations').scrollTop = 0;
    get('panel-qa').scrollTop = 0;
    if (!initial) get('sample-announcement').textContent = `${info[index].title} selected. Annotations, questions, and caption updated.`;
  }

  demoVideos.forEach((sample, index) => {
    const button = node('button', undefined, 'sample-choice');
    button.type = 'button';
    button.setAttribute('aria-label', `View ${info[index].title.toLowerCase()} sample`);
    button.setAttribute('aria-pressed', String(index === state.sample));
    const image = node('img');
    image.src = poster(sample);
    image.alt = `${info[index].title} sample`;
    image.width = 240;
    image.height = 135;
    image.loading = 'lazy';
    image.decoding = 'async';
    button.append(image);
    button.addEventListener('click', () => {
      if (index !== state.sample) selectSample(index);
    });
    picker.append(button);
  });

  function selectTab(tab) {
    const isQa = tab.id === 'tab-qa';
    const tabsContainer = tab.closest('.demo-tabs');
    if (tabsContainer) {
      tabsContainer.setAttribute('data-active', isQa ? 'qa' : 'annotations');
    }
    tabs.forEach(item => {
      const selected = item === tab;
      item.setAttribute('aria-selected', String(selected));
      item.tabIndex = selected ? 0 : -1;
      get(item.getAttribute('aria-controls')).hidden = !selected;
    });
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectTab(tab));
    tab.addEventListener('keydown', event => {
      if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
      selectTab(tabs[next]);
      tabs[next].focus();
    });
  });
  start.addEventListener('click', async () => {
    const selected = state.sample;
    start.hidden = true;
    video.controls = true;
    try {
      await video.play();
      if (selected === state.sample) video.focus({preventScroll:true});
    } catch (error) {
      if (selected === state.sample && error.name !== 'AbortError') {
        start.hidden = false;
        video.controls = false;
        get('video-error').hidden = false;
        start.focus({preventScroll:true});
      }
    }
  });
  video.addEventListener('play', () => { start.hidden = true; video.controls = true; });
  video.addEventListener('error', () => { get('video-error').hidden = false; });
  get('panel-annotations').setAttribute('role', 'tabpanel');
  get('panel-annotations').setAttribute('aria-labelledby', 'tab-annotations');
  get('panel-annotations').tabIndex = 0;
  document.querySelector('.annotation-heading').hidden = true;
  document.querySelector('.demo-tabs').hidden = false;
  picker.hidden = false;
  selectSample(state.sample, true);
})();
