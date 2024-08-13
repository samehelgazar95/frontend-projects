const nav = document.querySelector('#main');
const navTop = nav.offsetTop;
const bodyClasses = document.body.classList;

function handleFixed(e) {
  if (window.scrollY >= navTop) {
    bodyClasses.add('fixed-nav');
    document.body.style.paddingTop = nav.offsetHeight + 'px';
  } else {
    bodyClasses.remove('fixed-nav');
    document.body.style.paddingTop = 0;
  }
}

window.addEventListener('scroll', handleFixed);
