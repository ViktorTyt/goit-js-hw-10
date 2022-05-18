import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector(['#search-box']),
};

console.log(refs.input.value);

const onInputCountryName = () => {
  const name = refs.input.value;
  console.log(name);
  fetchCountries(name);
};

refs.input.addEventListener('input', onInputCountryName);

// console.log(getCountryName);
// fetchCountries('ukr');
