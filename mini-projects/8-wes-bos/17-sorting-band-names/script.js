const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog',
];

// Sort then Ignoring ('the', 'a', 'an')

function strip(brandName) {
  return brandName.replace(/^(a |the |an )/i, '').trim();
}

bands.sort((a, b) => {
  return strip(a).localeCompare(strip(b));
});

console.log(bands);
