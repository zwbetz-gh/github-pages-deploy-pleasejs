(function () {
  function clickEvent() {
    const color = Please.make_color()[0];
    console.log(color);

    const resultEl = document.querySelector('#result');
    resultEl.innerHTML = color;
    resultEl.style.backgroundColor = color;
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
