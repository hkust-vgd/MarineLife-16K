/* No framework, build step or network API is needed for the dataset explorer. */
(() => {
  "use strict";
  const videos = (window.MARINE_DEMO_VIDEOS || []).map((item) => ({
    ...item,
    attributes: window.MARINE_DEMO_ATTRIBUTES?.[item.id] || item.attributes
  }));
  if (!videos.length) return;

  const presentation = {
    "BigIsland_Jan3_2023__0019": { title: "Reef fish", location: "Big Island · January 2023" },
    "GreenIsland_Apr9_2023__0002": { title: "Sea turtle", location: "Green Island · April 2023" },
    "KAUST_Jun2023__0021": { title: "Coral reef", location: "KAUST · June 2023" },
    "GreenIsland_Guanqun__0015": { title: "School of fish", location: "Green Island · Guanqun collection" },
    "WestPalmBeach_May2023__0003": { title: "Sharks", location: "West Palm Beach · May 2023" }
  };
  const state = { videoIndex: 0, panel: "attributes" };
  const responses = new Map();
  const $ = (id) => document.getElementById(id);
  const video = $("marine-demo-video");
  const sceneSelector = $("scene-selector");
  const panels = ["attributes", "qa", "caption"];
  const pad = (value) => String(value).padStart(2, "0");
  const isCaption = (qa) => /^Write one complete (?:English )?video-captioning sentence/i.test(qa.question);
  const displayQuestion = (qa) => qa.question
    .replace(/\bcomplete English video-captioning\b/i, "complete video-captioning")
    .replace(/, best matches the video\?$/i, " best matches the video?");
  const thumbnail = (item) => "./static/images/demo/" + item.filename.replace(/\.mp4$/i, ".webp");

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function attribute(item, label) {
    return item.attributes.find((entry) => entry.label === label)?.value || "Not annotated in this sample.";
  }

  function selectPanel(name, focus = false) {
    if (!panels.includes(name)) return;
    state.panel = name;
    for (const panel of panels) {
      const selected = panel === name;
      $("tab-" + panel).setAttribute("aria-selected", String(selected));
      $("tab-" + panel).tabIndex = selected ? 0 : -1;
      $("panel-" + panel).hidden = !selected;
    }
    if (focus) $("tab-" + name).focus();
  }

  function renderAttributes(item) {
    const panel = $("panel-attributes");
    panel.replaceChildren();
    const groups = [
      { title: "Subject & appearance", labels: ["Central object", "Texture and pattern", "Color", "Size and shape", "Secondary objects"] },
      { title: "Scene & visibility", labels: ["Environment", "Lighting", "Video quality"] },
      { title: "Object activity", labels: ["Motion"] },
      { title: "Camera viewpoint & motion", labels: ["Camera position", "Camera angle"] }
    ];
    const displayed = new Set();
    function appendGroup(title, entries) {
      if (!entries.length) return;
      const section = element("section", "attribute-group");
      section.append(element("h4", "", title));
      const list = element("dl", "attribute-list");
      entries.forEach((entry) => {
        const row = element("div", "attribute-row");
        if (entry.missing) row.classList.add("attribute-missing");
        const value = element("dd");
        value.append(element("span", "attribute-value", entry.value));
        row.append(element("dt", "", entry.label), value);
        list.append(row);
        displayed.add(entry.label);
      });
      section.append(list);
      panel.append(section);
    }
    groups.forEach((group) => appendGroup(group.title, group.labels.map((label) => {
      const original = item.attributes.find((entry) => entry.label === label);
      if (original) return original;
      return { label, value: "Not annotated in this sample.", missing: true };
    })));
    appendGroup("Additional annotations", item.attributes.filter((entry) => !displayed.has(entry.label)));
    panel.scrollTop = 0;
  }

  function renderQuestions(item) {
    const panel = $("panel-qa");
    const questions = item.qa;
    $("qa-count").textContent = questions.length;
    panel.replaceChildren();
    questions.forEach((qa, index) => {
      const key = item.id + ":" + index;
      const saved = responses.get(key) || {};
      const options = Array.isArray(qa.options) ? qa.options : [];
      const issue = qa.annotationIssue || null;
      const captionQuestion = isCaption(qa);
      const question = element("details", "question");
      question.dataset.questionIndex = index;
      question.open = saved.expanded ?? (index === 0 || Boolean(saved.choice) || saved.revealed === true);
      question.addEventListener("toggle", () => {
        if (question.isConnected) responses.set(key, { ...responses.get(key), expanded: question.open });
      });
      const summary = element("summary");
      summary.append(element("span", "question-meta", pad(index + 1) + " / " + (options.length ? "Multiple choice" : captionQuestion ? "Captioning" : "Open-ended")));
      summary.append(element("span", "question-text", displayQuestion(qa)));
      const body = element("div", "question-body");
      const reference = element("div", "reference-answer");
      reference.id = "answer-" + state.videoIndex + "-" + index;
      reference.hidden = saved.revealed === false || !(saved.revealed || saved.choice);
      reference.append(element("span", "answer-label", captionQuestion ? "Reference caption" : issue ? "Recorded reference answer" : "Reference answer"), document.createTextNode(qa.answer || "Not available."));
      const feedback = element("p", "quiz-feedback");
      feedback.setAttribute("role", "status");
      const correctLabel = options.length && !issue ? qa.answer.match(/^\s*([A-Z])\s*(?:—|–|-|\.)/)?.[1] : null;
      const optionButtons = [];
      if (issue) body.append(element("p", "annotation-issue", "Annotation note: " + issue));
      if (options.length) {
        const optionList = element("div", "quiz-options");
        optionList.setAttribute("role", "group");
        optionList.setAttribute("aria-label", "Answer choices for question " + (index + 1));
        options.forEach((option) => {
          const button = element("button", "quiz-option");
          button.type = "button";
          button.dataset.option = option.label;
          button.setAttribute("aria-pressed", String(saved.choice === option.label));
          button.append(element("span", "option-letter", option.label), element("span", "", option.text));
          button.addEventListener("click", () => {
            const response = { ...responses.get(key), choice: option.label, revealed: true, expanded: true };
            responses.set(key, response);
            revealAnswer(response);
          });
          optionButtons.push(button);
          optionList.append(button);
        });
        body.append(optionList);
      }
      const reveal = element("button", "answer-toggle", reference.hidden ? "Reveal reference answer" : "Hide reference answer");
      reveal.type = "button";
      reveal.setAttribute("aria-controls", reference.id);
      reveal.setAttribute("aria-expanded", String(!reference.hidden));
      reveal.addEventListener("click", () => {
        reference.hidden = !reference.hidden;
        responses.set(key, { ...responses.get(key), revealed: !reference.hidden });
        reveal.textContent = reference.hidden ? "Reveal reference answer" : "Hide reference answer";
        reveal.setAttribute("aria-expanded", String(!reference.hidden));
      });
      function revealAnswer(response, showReference = true) {
        if (showReference) {
          reference.hidden = false;
          reveal.textContent = "Hide reference answer";
          reveal.setAttribute("aria-expanded", "true");
        }
        optionButtons.forEach((button) => {
          const selected = button.dataset.option === response.choice;
          button.setAttribute("aria-pressed", String(selected));
          button.classList.toggle("is-correct", Boolean(correctLabel) && button.dataset.option === correctLabel);
          button.classList.toggle("is-incorrect", selected && Boolean(correctLabel) && response.choice !== correctLabel);
        });
        feedback.textContent = issue ? "The recorded reference is shown below. No right/wrong judgment is made for this ambiguous item." : !correctLabel ? "Compare your choice with the reference answer below." : response.choice === correctLabel ? "Your answer matches the reference." : "Your choice differs from the reference. The reference option is " + correctLabel + ".";
      }
      body.append(reveal, feedback, reference);
      if (saved.choice) revealAnswer(saved, !reference.hidden);
      question.append(summary, body);
      panel.append(question);
    });
    panel.scrollTop = 0;
  }

  function renderCaption(item) {
    const panel = $("panel-caption");
    const caption = item.qa.find(isCaption);
    panel.replaceChildren(
      element("span", "caption-label", "Reference video caption"),
      element("blockquote", "reference-caption", caption?.answer || "A reference caption is not available for this sample.")
    );
    panel.scrollTop = 0;
  }

  function updateSceneSelection() {
    Array.from(sceneSelector.children).forEach((button, index) => {
      const selected = index === state.videoIndex;
      button.setAttribute("aria-selected", String(selected));
      button.tabIndex = selected ? 0 : -1;
    });
  }

  function selectVideo(index) {
    if (!videos[index]) return;
    state.videoIndex = index;
    const item = videos[index];
    const info = presentation[item.id] || { title: attribute(item, "Central object"), location: item.id };
    video.pause();
    // Load only the active clip; avoid fetching all five video files on page load.
    video.poster = thumbnail(item);
    video.src = "./Video_demo/" + item.filename;
    video.setAttribute("aria-label", info.title + " dataset video");
    video.load();
    $("video-error").hidden = true;
    $("video-download").href = video.src;
    $("video-download").setAttribute("download", item.filename);
    $("video-download-fallback").href = video.src;
    $("scene-title").textContent = info.title;
    $("scene-location").textContent = info.location;
    $("sample-number").textContent = pad(index + 1) + " / " + pad(videos.length);
    $("sample-explorer").setAttribute("aria-labelledby", "scene-" + index);
    renderAttributes(item);
    renderQuestions(item);
    renderCaption(item);
    updateSceneSelection();
    selectPanel(state.panel);
    $("explorer-status").textContent = "Selected " + info.title + ", sample " + (index + 1) + " of " + videos.length + ".";
  }

  videos.forEach((item, index) => {
    const info = presentation[item.id] || { title: item.id };
    const button = element("button", "scene-button");
    button.type = "button";
    button.id = "scene-" + index;
    button.setAttribute("role", "tab");
    button.setAttribute("aria-controls", "sample-explorer");
    button.setAttribute("aria-label", info.title + ", sample " + (index + 1));
    const image = element("img");
    image.src = thumbnail(item);
    image.alt = "";
    image.width = 960;
    image.height = 540;
    image.loading = "lazy";
    const label = element("span", "scene-label");
    label.append(element("span", "", info.title), element("span", "", pad(index + 1)));
    button.append(image, element("span", "scene-current"), label);
    button.addEventListener("click", () => {
      if (state.videoIndex !== index) selectVideo(index);
    });
    button.addEventListener("keydown", (event) => {
      const next = tabIndexForKey(event.key, index, videos.length);
      if (next === null) return;
      event.preventDefault();
      selectVideo(next);
      sceneSelector.children[next].focus();
    });
    sceneSelector.append(button);
  });

  function tabIndexForKey(key, current, length) {
    if (key === "ArrowRight") return (current + 1) % length;
    if (key === "ArrowLeft") return (current - 1 + length) % length;
    if (key === "Home") return 0;
    if (key === "End") return length - 1;
    return null;
  }

  panels.forEach((name, index) => {
    const button = $("tab-" + name);
    button.addEventListener("click", () => selectPanel(name));
    button.addEventListener("keydown", (event) => {
      const next = tabIndexForKey(event.key, index, panels.length);
      if (next === null) return;
      event.preventDefault();
      selectPanel(panels[next], true);
    });
  });
  document.querySelectorAll("[data-open-caption]").forEach((link) => {
    link.addEventListener("click", () => selectPanel("caption"));
  });
  video.addEventListener("error", () => { $("video-error").hidden = false; });

  $("copy-citation").addEventListener("click", async () => {
    const button = $("copy-citation");
    const citation = $("bibtex").textContent;
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard API unavailable");
      await navigator.clipboard.writeText(citation);
      button.textContent = "Copied";
      $("copy-status").textContent = "Citation copied to clipboard.";
      setTimeout(() => { button.textContent = "Copy citation"; }, 2000);
    } catch {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents($("bibtex"));
      selection.removeAllRanges();
      selection.addRange(range);
      $("copy-status").textContent = "Automatic copying is unavailable. The citation is selected; press Ctrl+C or Command+C to copy.";
      button.textContent = "Selected · Ctrl/Cmd+C";
    }
  });
  selectVideo(0);
})();
