let imgContainer = document.querySelector('main .image ');
let inputs = document.querySelectorAll('main input');

inputs.forEach((e) => {
  e.addEventListener('change', (e) => {
    let suffix = e.target.dataset.sizing || '';
    let cssValue = e.target.value + suffix;
    let cssName = '--' + e.target.name;

    document.documentElement.style.setProperty(cssName, cssValue);
  });
});
