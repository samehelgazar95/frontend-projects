const input = document.querySelector('main form input');
const form = document.querySelector('main form');
const ulSection = document.querySelector('main .data ul');
const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
form.addEventListener('submit', (e) => e.preventDefault());
const cities = [];

fetch(endpoint)
  .then((res) => res.json())
  .then((data) => {
    cities.push(...data);
  });

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function filterCities(targetVal) {
  const filteredCities = cities.map((item) => {
    if (
      item.city.toLowerCase().includes(targetVal.toLowerCase()) ||
      item.state.toLowerCase().includes(targetVal.toLowerCase())
    ) {
      const regex = new RegExp(targetVal, 'gi');
      const city = item.city.replace(
        regex,
        `<span class='hl'>${targetVal}</span>`
      );
      const state = item.state.replace(
        regex,
        `<span class='hl'>${targetVal}</span>`
      );
      const population = numberWithCommas(item.population);

      return `<li>
            <span>${city}, ${state}</span
            ><span>${population}</span>
          </li>`;
    }
  });
  return filteredCities.join('');
}

input.addEventListener('input', (e) => {
  let filteredCities = filterCities(e.target.value);
  ulSection.innerHTML = '';
  ulSection.innerHTML = filteredCities;
});
