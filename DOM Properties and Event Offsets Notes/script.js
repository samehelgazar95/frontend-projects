const ele = document.querySelector('body div');

/*
Element offsets (event.target.[[property]]) ::
    offsetWidth, offsetHeight: Width and Height of the element including the padding && border
    clientWidth, clientHeight: Width and Height of the element including JUST the padding
    scrollWidth, scrollHeight: Width and Height of the element including the padding && border && the not visible content because of overflow hidden

    offsetTop, offsetLeft: Distance of the element to the nearest parent element
    clientTop, clientLeft: Returns the border width of element
    scrollTop, scrollLeft: Returns how much the element is scrolled

    getBoundingClientRect(): it's like a shorthand for most of the above, Returns Properties include top, right, bottom, left, width, and height.
*/

ele.addEventListener('click', (e) => {
  //   console.log('Element offsetWidth: ', e.target.offsetWidth);
  //   console.log('Element offsetHeight: ', e.target.offsetHeight);
  //   console.log('Element clientWidth: ', e.target.clientWidth);
  //   console.log('Element clientHeight: ', e.target.clientHeight);
  //   console.log('Element scrollWidth: ', e.target.scrollWidth);
  //   console.log('Element scrollHeight: ', e.target.scrollHeight);
  //   console.log('Element offsetTop: ', e.target.offsetTop);
  //   console.log('Element offsetLeft: ', e.target.offsetLeft);
  //   console.log('Element clientTop: ', e.target.clientTop);
  //   console.log('Element clientLeft: ', e.target.clientLeft);
  //   console.log('Element scrollTop: ', e.target.scrollTop);
  //   console.log('Element scrollLeft: ', e.target.scrollLeft);
  //   console.log(
  //     'Element getBoundingClientRect(): ',
  //     e.target.getBoundingClientRect()
  //   );
});

/*
MouseEvent offsets (event.[[property]])::
    offsetX, offsetY: Returns the position of the mouse pointer relative to the ELEMENT
    clientX, clientY: Returns the position of the mouse pointer relative to the VIEWPORT
    pageX, pageY: Returns the position of the mouse pointer relative to the ENTIRE DOCUMENT, Affected by scrolling
    screenX, screenY: Returns the position of the mouse pointer relative to the USER'S SCREEN
*/

document.addEventListener('click', (e) => {
  // console.log('offsetX', e.offsetX);
  // console.log('offsetY', e.offsetY);
  // console.log('clientX', e.clientX);
  // console.log('clientY', e.clientY);
  // console.log('pageX', e.pageX);
  // console.log('pageY', e.pageY);
  //   console.log('screenX', e.screenX);
  //   console.log('screenY', e.screenY);
});

/*
window Properties and Scrolling (window.[[property]])::
    window.innerWidth: The width of the browser window's viewport including the scroll bar in pixels
    window.innerHeight: The height of the browser window's viewport including the scroll bar in pixels
    window.scrollX (window.pageXOffset): the number of pixels the document has been scrolled horizontally
    window.scrollY (window.pageYOffset): the number of pixels the document has been scrolled vertically
*/

window.addEventListener('scroll', (e) => {
  // console.log('window.innerWidth:', window.innerWidth);
  // console.log('window.innerHeight:', window.innerHeight);
  // console.log('window.scrollX:', window.scrollX);
  // console.log('window.scrollY:', window.scrollY);
});
