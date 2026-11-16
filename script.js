(() => {
  const styles = {
    classic: {
      labels: ["Read emails", "Review PR", "Deploy code"],
      checked: [true, false, true],
      code: `.checkbox input:checked + .box {
  background: #5146c8;
  border-color: #5146c8;
}

.box::after {
  content: "";
  border-left: 2px solid #fff;
  border-bottom: 2px solid #fff;
  transform: rotate(-45deg) scale(1);
}`
    },
    bounce: {
      labels: ["Morning run", "Drink water", "Meditate"],
      checked: [true, false, true],
      code: `.bounce input:checked + .box {
  background: #169b80;
  border-color: #169b80;
  animation: bounce .42s cubic-bezier(.34,1.56,.64,1);
}

@keyframes bounce {
  0% { transform: scale(1); }
  45% { transform: scale(1.35); }
  75% { transform: scale(.88); }
  100% { transform: scale(1); }
}`
    },
    slide: {
      labels: ["Design UI", "User Research", "Code Review"],
      checked: [false, true, true],
      code: `.slide .box {
  position: relative;
  overflow: hidden;
}

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
}`
    },
    morph: {
      labels: ["Stretch", "Cold shower", "Journaling"],
      checked: [false, true, true],
      code: `.morph .box {
  border-radius: 50%;
  border-color: #d84f83;
  transition: all .3s ease;
}

.morph input:checked + .box {
  background: #d84f83;
  border-color: #d84f83;
  border-radius: 50%;
}`
    },
    ripple: {
      labels: ["Standup meeting", "Send reports", "Call client"],
      checked: [true, true, true],
      code: `.ripple input:checked + .box {
  background: #3688d9;
  border-color: #3688d9;
  animation: ripple .45s ease-out;
}

@keyframes ripple {
  0% { box-shadow: 0 0 0 0 #3688d966; }
  100% { box-shadow: 0 0 0 9px #3688d900; }
}`
    },
    toggle: {
      labels: ["Dark mode", "Push notifications", "Auto-sync"],
      checked: [true, false, true],
      code: `.toggle .box {
  width: 28px;
  height: 16px;
  border-radius: 12px;
  background: #d9dce3;
}

.toggle input:checked + .box {
  background: #65952e;
}

.toggle input:checked + .box::before {
  transform: translateX(12px);
}`
    }
  };

  const list = document.getElementById("checkbox-list");
  const source = document.getElementById("source-code");
  const tabs = [...document.querySelectorAll(".tab")];

  function render(styleName) {
    const config = styles[styleName];
    list.className = `checkbox-list ${styleName}`;
    list.replaceChildren();

    config.labels.forEach((labelText, index) => {
      const label = document.createElement("label");
      label.className = "check-row";

      const input = document.createElement("input");
      input.type = "checkbox";
      input.checked = config.checked[index];

      const box = document.createElement("span");
      box.className = "box";

      const text = document.createElement("span");
      text.textContent = labelText;

      label.append(input, box, text);
      list.append(label);
    });

    source.textContent = config.code;
    tabs.forEach(tab => {
      const active = tab.dataset.style === styleName;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-pressed", String(active));
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => render(tab.dataset.style));
  });

  render("classic");
})();