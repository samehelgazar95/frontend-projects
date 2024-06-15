function isPalindrome(str) {
  let i = 0,
    j = str.length - 1;

  while (j > i) {
    if (str[i].toLowerCase() != str[j].toLowerCase()) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

const form = document.getElementById('form');
const input = document.getElementById('input');
const para = document.getElementById('result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (isPalindrome(input.value))
    para.innerHTML = `${input.value} is PALINDROME!`;
  else para.innerHTML = `${input.value} is NOT PALINDROME!`;

  input.value = '';
});
