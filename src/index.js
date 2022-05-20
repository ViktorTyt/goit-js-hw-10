import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

import API from './fetchCountries';
// console.log(fetchCountries('portugal'));
const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector(['#search-box']),
  list: document.querySelector('.country-list'),
  info: document.querySelector('.country-info'),
};

const onInputCountryName = () => {
  const searchName = refs.input.value.trim();

  if (!searchName) {
    resetSearch();
    return;
  }

  API.fetchCountries(searchName)
    .then(render)
    .catch(error => error1());
};

const error1 = countries => {
  resetSearch();
  Notiflix.Notify.failure('Oops, there is no country with that name');
};

const resetSearch = () => {
  refs.list.innerHTML = '';
  refs.info.innerHTML = '';
};

const render = countries => {
  if (countries.length > 10) {
    console.log('more 10 el');
    Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
    resetSearch();
  }

  if (countries.length > 1 && countries.length <= 10) {
    const listItem1 = countries
      .map(
        country =>
          `<li class="country-list__item"><img src="${country.flags.svg}" height="40" width="76"/><span class="h">
  ${country.name.common}</span></li>`,
      )
      .join('');

    resetSearch();

    refs.list.insertAdjacentHTML('afterbegin', listItem1);
  } else if (countries.length <= 1) {
    const listItem2 = countries
      .map(
        country => `<li class="country-info__item country-info__item-main"><img src="${
          country.flags.svg
        }" height="40" width="76">
      <span class="country-info__title">${country.name.official}</span></li>
      <li class="country-info__item">Capital:<span class="country-info__item-data">${
        country.capital
      }</span></li>
      <li class="country-info__item">Population:<span class="country-info__item-data">${
        country.population
      }</span></li>
      <li class="country-info__item">Languages:<span class="country-info__item-data">${Object.values(
        country.languages,
      )}</span></li>`,
      )
      .join('');

    resetSearch();

    refs.info.insertAdjacentHTML('afterbegin', listItem2);
  }
};

refs.input.addEventListener('input', debounce(onInputCountryName, DEBOUNCE_DELAY));
