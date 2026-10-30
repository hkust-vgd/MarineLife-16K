# MarineLife-16K

Academic project page for **MarineLife-16K: An Attribute-Rich Video-Text
Dataset for Motion-Aware Marine Video Understanding**, accepted at WACV 2027.

## Preview

This is a static website. No Node.js packages, API keys or build step are needed.

Open `index.html` in your browser, or serve the repository locally:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

The page uses relative asset paths and can be served at a GitHub Pages project
URL such as `/<repository-name>/`. It does not require an SPA rewrite rule.

## Page contents

- Marine illustrated background, original author list and affiliations, paper,
  dataset and repository links.
- Dataset overview and a distinction between object activity and camera motion.
- Five original video examples, selectable through thumbnail tabs.
- Grouped attributes with explicit missing-field labels; interactive MCQ choices
  and reference answers; all questions in source order, including captioning.
- Benchmark dimension overview and links to the paper's evaluation results.
- Five paper figures: dataset teaser, camera-motion example, annotation pipeline,
  attribute-to-caption example and evaluation dimensions. All are inline images.
- Optional annotation statistics in an expandable section.
- Author-supplied radar plots comparing model groups under static and moving cameras.
- Copyable BibTeX citation, keyboard navigation and responsive mobile layouts.

The demo annotations and all **41 question/answer records** (including captions)
were carried over from the original `index.html` without changing their values.
These five clips are illustrative samples, not the full evaluation subset.
Question counts differ between clips because the supplied annotations differ.
The page does not generate model predictions or call an inference API.

## Files to edit

| File | Purpose |
| --- | --- |
| `index.html` | Research information, authors, sections, resource links and citation |
| `static/css/project.css` | Shared layout, interaction styles and accessibility foundations |
| `static/css/research.css` | Current research-page presentation, colors, typography and responsive refinements |
| `static/js/project.js` | Video selection, annotation tabs, quiz interaction and citation copy |
| `static/js/demo-data.js` | Original demo attributes, questions, options and reference answers |
| `static/js/demo-attributes.js` | All 55 displayed attributes, including seven editorial texture/lighting additions; edit this file for webpage attributes |
| `static/js/demo-supplements.js` | Historical record of seven editorial additions; no longer loaded by the webpage |
| `static/images/demo/` | Lightweight poster images extracted from the supplied videos |
| `static/images/hero/reef-channel.webp` | Restored default marine illustrated background |
| `static/images/hero/reef-expedition.webp` | Retained alternative artwork, not displayed by the current design |
| `Video_demo/` | The five original MP4 clips |
| `static/figures/*.webp` | Lightweight previews of the seven supplied paper figures |
| `static/figures/*-full.webp` | Retained higher-resolution assets, not linked in the current UI |
| `static/figures/original/` | Archived source PDFs, not linked by the website |
| `static/figures/manifest.json` | Image sizes and SHA-256 hashes of the original PDFs |

### Research-page presentation

The current design uses an untextured white page, restrained blue accents,
direct research headings, square-edged video and annotation panels, and open
figures rather than repeated rounded cards. At the author's request, the marine
illustrated hero background has been restored. It is AI-generated decorative
artwork, not dataset footage; its visible caption was removed at the author's
request. The five videos and their posters remain real dataset examples.

Body text is approximately 16–17px, section headings 30–34px and sample-attribute
values 16px. Main headings are bold blue; secondary headings use darker teal.
The desktop hero uses a title up to 68px, a subtitle up to 34px, 18px author
names and 15px affiliations, with smaller responsive sizes on mobile.
On narrow screens attribute labels stack above their values for readability.
In Q&A, question headings use blue text on a white background. Reference
answers use dark-green text, a pale-green background and a stronger left border.
Answer options are neutral gray until the user makes a selection.

Visible notes are limited to research-relevant context: the demo-only additions
are not dataset ground truth, the five clips are not the full benchmark, the
ambiguous MCQ reference needs review, and metric scales/subsets are defined in
the paper. Repeated figure explanations and obvious interaction instructions
have been removed or shortened. Scientific figures and source annotations are
unchanged.

`research.css` is a separate presentation layer over `project.css`, loaded last.
The Open Graph preview uses the paper's dataset teaser. To change the hero,
edit the `.project-hero` background in `research.css` and the preload in `index.html`.
Body-level links that repeated the main paper call-to-action have been removed.

### Paper figures

The research figures were rendered directly from the author-supplied PDFs;
their labels, colors and scientific content have not been altered. All figures
are displayed without cropping. The optional `text_stats1` figure is placed in
the expandable annotation-statistics section after the annotation pipeline.
Evaluation protocol and its example figure now lead directly into Benchmark
results, without annotation statistics interrupting the evaluation narrative.
The radar figure is in a separate results section. It is rendered from the
author-supplied `radar chart.pdf` without changing labels, groups or values.

Images below the hero are lazy-loaded and displayed inline. There are no figure
links, expand buttons, zoom dialogs or original-PDF controls. High-resolution
images and source PDFs are retained only as archived assets, not fetched by the UI.

### Attributes and question audit

- Four clips (reef fish, coral reef, school of fish and sharks) have editorially
  revised webpage QA in `demo-data.js`, with matching `demo-attributes.js` fields.
  Original imported wording remains in `index-original.html` and Git HEAD.
  These edits are not benchmark re-annotations and do not change reported scores.
- All 41 records are visible in Q&A, in their original order. Caption questions
  are labeled separately; the Caption tab remains a quick way to read the caption.
- The display omits `English` from caption prompts and removes an unnecessary
  comma from motion questions; these are display-only editorial changes.
- The four originally missing texture fields now have editorial descriptions in
  `demo-attributes.js`, based on previously sampled frames of their corresponding videos.
  The webpage displays them directly without badges. Their editorial origin is
  retained in the source comments; dataset-owner validation is still pending.
  The sea turtle texture comes from the source and remains unchanged.
  The legacy webpage, `test.csv`, `2000-vids.csv`, `2000-vids-translated.csv` and
  `2000-vids-cleaned.csv` were checked: these same four texture fields are empty.
  The editorial descriptions are intentionally brief phrases.
- The three originally missing lighting fields (reef fish, sea turtle and coral
  reef) now have brief visual descriptions in the same attributes file.
  These describe visible illumination, not measured depth or light intensity.
- All 11 displayed fields are populated for each sample. Camera framing and
  viewing angle/movement are distinguished in the revised coral/shark examples.
  Unknown individual fish size and unestablished school-of-fish camera movement
  are not inferred. Captions use the displayed attributes and remain under 80 words.
- The shark camera question now has distinct B/C options; its reference remains B
  and normal choice feedback is enabled. Overlapping environment/lighting choices
  in the four audited clips have been rewritten. See `QA-review-4-videos.md`.
- Open question panels and revealed/hidden answers survive switching clips within
  the current page session. Annotation content expands without a nested scrollbar.
- On desktop, Video examples place the video beside the Attributes / Q&A / Caption
  area. The video stays visible while the page scrolls through long annotations.
  Smaller screens stack the video above the annotations. Questions use
  regular-weight sans-serif text; reference answers remain green.
- The redundant "In this clip" block has been removed. It repeated the original
  Motion and Camera position fields (not AI-generated summaries); these fields
  remain available in Attributes without a separate editorial summary label.

### Keep research content accurate

- Author spellings and affiliations follow the upstream project page.
- Dataset headline counts are 2,000 video-text pairs and 16K QA pairs.
- The benchmark section describes task dimensions. The radar comparisons are
  taken directly from the supplied figure; no results or scores were invented.
- The radar figure's OEMU scale is not reinterpreted as MCQ accuracy; visitors
  are directed to the paper for metric definitions, scales and evaluation subsets.
- The citation intentionally omits DOI, page numbers and final proceedings
  details until those are available.
- The paper and dataset buttons retain the original resource destinations.

## GitHub Pages

After reviewing and merging the changes into the repository's publication
branch, GitHub Pages can serve this repository directly from its root directory.
Use **Settings → Pages → Deploy from a branch**, select the intended branch
and `/ (root)`. No deployment workflow is required for this buildless page.

The local design work does not itself change GitHub Pages or publish the site.
Existing template CSS/JS files remain in the repository but are not loaded by
the redesigned page.
