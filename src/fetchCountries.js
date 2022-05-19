const BASE_URL = 'https://restcountries.com/v3.1';

const fetchCountries = name => {
  console.log(name);
  return fetch(
    `${BASE_URL}/name/${name}?fields=name,capital,currencies,population,flags,languages`,
  ).then(response => response.json());
};

export default { fetchCountries };
