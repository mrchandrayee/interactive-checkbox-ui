# Interactive Checkbox UI

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/interactive-checkbox-ui/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

Complete runnable recreation of the uploaded 31-second screen recording (360 × 640, 30 fps).

## Video content and sequence

The heading shown is **Interactive Checkbox UI**. The interface has six style tabs, a pale checkbox preview card, and a dark code panel. The page background is near-black, the heading glows blue, and the active tab changes color according to the selected style.

The six tabs and the labels visible in their preview are:

1. **Classic Checkmark** — Read emails, Review PR, Deploy code
2. **Bounce Scale** — Morning run, Drink water, Meditate
3. **Slide Fill** — Design UI, User Research, Code Review
4. **Circle Morph** — Stretch, Cold shower, Journaling
5. **Ripple Effect** — Standup meeting, Send reports, Call client
6. **Toggle Switch** — Dark mode, Push notifications, Auto-sync

Click a tab to switch styles and update the displayed CSS snippet. Click individual controls to toggle their checked state.

## CSS behavior reconstructed from visible code

### Classic Checkmark
```css
.checkbox input:checked + .box {
  background: #5146c8;
  border-color: #5146c8;
}
```

### Bounce Scale
```css
.bounce input:checked + .box {
  background: #169b80;
  border-color: #169b80;
  animation: bounce .42s cubic-bezier(.34,1.56,.64,1);
}

@keyframes bounce {
  0% { transform: scale(1); }
  45% { transform: scale(1.35); }
  75% { transform: scale(.88); }
  100% { transform: scale(1); }
}
```

### Slide Fill
```css
.slide .box::before {
  content: "";
  position: absolute;
  inset: 0;
  background: #e35c42;
  transform: translateX(-105%);
  transition: transform .25s ease;
}

.slide input:checked + .box::before {
  transform: translateX(0);
}
```

### Circle Morph
```css
.morph .box {
  border-radius: 50%;
  border-color: #d84f83;
}

.morph input:checked + .box {
  background: #d84f83;
  border-color: #d84f83;
  border-radius: 50%;
}
```

### Ripple Effect
```css
.ripple input:checked + .box {
  background: #3688d9;
  border-color: #3688d9;
  animation: ripple .45s ease-out;
}

@keyframes ripple {
  0% { box-shadow: 0 0 0 0 #3688d966; }
  100% { box-shadow: 0 0 0 9px #3688d900; }
}
```

### Toggle Switch
```css
.toggle .box {
  width: 28px;
  height: 16px;
  border-radius: 12px;
  background: #d9dce3;
}

.toggle input:checked + .box {
  background: #65952e;
}
```

## Run

1. Extract the ZIP.
2. Open `index.html` in Chrome, Firefox, Safari, or Edge.
3. Select any of the six tabs.
4. Click checkboxes to test the selected state.

No dependencies, build step, external assets, or server are required.

## Project files

- `index.html` — page layout and tab/preview/source containers
- `style.css` — visual styling and all six checkbox styles
- `script.js` — tab switching, dynamic labels, initial checked states and source snippets
- `README.md` — video observations and run instructions

## Fidelity note

The six style names, visible task labels, tab colors, layout, and readable CSS behavior are based on the uploaded recording. The source code is only partially visible at screen resolution, so the complete page markup and some supporting CSS/JavaScript are reconstructed to produce a functional standalone project. It is not claimed to be the creator's exact original source.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
