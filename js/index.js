(function () {
  function getColor() {
    const color = Please.make_color()[0];
    return color;
  }

  function clickEvent() {
    const manyColorsEl = document.querySelector('#many_colors');

    // Clear old colors
    while (manyColorsEl.firstChild) {
      manyColorsEl.removeChild(manyColorsEl.lastChild);
    }

    // Make new colors
    for (let i = 0; i < 3; i++) {
      const color = getColor();
      console.log(color);

      const colorEl = document.createElement('div');
      colorEl.className = 'single_color';
      colorEl.innerText = color;
      colorEl.style.backgroundColor = color;

      manyColorsEl.appendChild(colorEl);
    }
  }

  function addEventListener() {
    const buttonEl = document.querySelector('#make_color');
    buttonEl.addEventListener('click', clickEvent);
  }

  function main() {
    addEventListener();
    // Fire once on page load so that the color is not blank
    clickEvent();
  }

  main();
})();
