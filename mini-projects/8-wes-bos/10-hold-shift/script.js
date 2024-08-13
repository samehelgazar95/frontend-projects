//  on keyDown >> e.code
let shiftKeys = ['ShiftLeft', 'ShiftRight'];
let shiftIsPressed = false;
let first = -1;
let second = -1;
let items = document.querySelector('main .items');
let checkers = document.querySelectorAll('main .item input');

document.addEventListener('keydown', (e) => {
  if (shiftKeys.includes(e.code)) shiftIsPressed = true;
});

document.addEventListener('keyup', (e) => {
  if (shiftKeys.includes(e.code)) shiftIsPressed = false;
});

function handleCheck(i) {
  if (shiftIsPressed == false && first != -1) first = -1;

  if (shiftIsPressed) {
    if (first == -1) {
      first = i;
    } else if (first != -1) {
      second = i;

      let j = first <= second ? first : second;
      let selectsLength = first <= second ? second : first;
      for (; j <= selectsLength; j++) {
        checkers[j].checked = true;
      }

      first = -1;
      second = -1;
    }
  }
}

for (let i = 0; i < checkers.length; i++) {
  checkers[i].addEventListener('change', () => handleCheck(i));
}

// const checkboxes = document.querySelectorAll('main .item input');

// let lastChecked;

// function handleCheck(e) {
//   // Check if they had the shift key down
//   // AND check that they are checking it
//   let inBetween = false;
//   if (e.shiftKey && this.checked) {
//     // go ahead and do what we please
//     // loop over every single checkbox
//     checkboxes.forEach((checkbox) => {
//       console.log(checkbox);
//       if (checkbox === this || checkbox === lastChecked) {
//         inBetween = !inBetween;
//         console.log('Starting to check them in between!');
//       }

//       if (inBetween) {
//         checkbox.checked = true;
//       }
//     });
//   }

//   lastChecked = this;
// }

// checkboxes.forEach((checkbox) =>
//   checkbox.addEventListener('click', handleCheck)
// );
