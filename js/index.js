(function () {
  function makeColor() {
    const color = Please.make_color()[0];
    return color;
  }

  function getColorContainerEl() {
    const el = document.querySelector('#color_container');
    return el;
  }

  function makeGridRowEl() {
    const el = document.createElement('div');
    el.className = 'row';
    return el;
  }

  function makeGridColEl() {
    const el = document.createElement('div');
    el.className = 'col-sm';
    return el;
  }

  function makeColorEl() {
    const color = makeColor();
    const el = document.createElement('div');
    el.className = 'single_color';
    el.innerText = color;
    el.style.backgroundColor = color;
    return el;
  }

  function clearColors() {
    const colorContainerEl = getColorContainerEl();

    while (colorContainerEl.firstChild) {
      colorContainerEl.removeChild(colorContainerEl.lastChild);
    }
  }

  function makeColors() {
    const TOTAL_COLORS = 15;
    const GRID_COLS_PER_ROW = 3;

    const colorContainerEl = getColorContainerEl();

    for (let i = 0; i < TOTAL_COLORS; i++) {
      const colorEl = makeColorEl();

      if (i % GRID_COLS_PER_ROW === 0) {
        const gridRowEl = makeGridRowEl();
        colorContainerEl.appendChild(gridRowEl);
      }

      const gridColEl = makeGridColEl();
      gridColEl.appendChild(colorEl);
      colorContainerEl.lastChild.appendChild(gridColEl);
    }
  }

  function clickEvent() {
    clearColors();
    makeColors();
  }

  function addEventListener() {
    const buttonEl = document.querySelector('#make_color');
    buttonEl.addEventListener('click', clickEvent);
  }

  function main() {
    addEventListener();
    // Fire once on page load so that page is not blank
    clickEvent();
  }

  main();
})();
