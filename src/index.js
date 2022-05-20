import './css/styles.css';
import debounce from 'lodash.debounce';

import API from './fetchCountries';
// console.log(fetchCountries('portugal'));
const DEBOUNCE_DELAY = 2000;

const refs = {
  input: document.querySelector(['#search-box']),
  list: document.querySelector('.country-list'),
};

console.log(refs.input.value);

const onInputCountryName = () => {
  const searchName = refs.input.value.trim();
  if (!searchName) {
    return;
  }
  console.log('input:', searchName);
  API.fetchCountries(searchName)
    .then(render)
    .catch(error => console.log(error));
};

const render = countries => {
  console.log(countries);
  const listItem = countries
    .map(
      country => `<li class="country-list__item"><img src="${country.flags.svg}" height="40" width="76"/><span class="h">
  ${country.name.official}</span></li>`,
    )
    .join('');
  refs.list.innerHTML = '';
  refs.list.insertAdjacentHTML('afterbegin', listItem);
};

refs.input.addEventListener('input', debounce(onInputCountryName, DEBOUNCE_DELAY));

// console.log(getCountryName);
// fetchCountries('ukr');
