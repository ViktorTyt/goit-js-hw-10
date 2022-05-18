import './css/styles.css';
import debounce from 'lodash.debounce';

import fetchCountries from './fetchCountries';
// console.log(fetchCountries('portugal'));
const DEBOUNCE_DELAY = 2000;

const refs = {
  input: document.querySelector(['#search-box']),
};

console.log(refs.input.value);

const onInputCountryName = () => {
  const name = refs.input.value;
  if (!name) {
    return;
  }
  console.log('input:', name);
  fetchCountries(name);
};

refs.input.addEventListener('input', debounce(onInputCountryName, DEBOUNCE_DELAY));

// console.log(getCountryName);
// fetchCountries('ukr');
