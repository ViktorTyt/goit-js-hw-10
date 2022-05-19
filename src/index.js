import './css/styles.css';
import debounce from 'lodash.debounce';

import API from './fetchCountries';
// console.log(fetchCountries('portugal'));
const DEBOUNCE_DELAY = 2000;

const refs = {
  input: document.querySelector(['#search-box']),
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

const render = country => {
  console.log(country[0].name.official);
};

refs.input.addEventListener('input', debounce(onInputCountryName, DEBOUNCE_DELAY));

// console.log(getCountryName);
// fetchCountries('ukr');
