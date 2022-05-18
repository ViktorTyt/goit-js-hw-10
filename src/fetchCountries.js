const fetchCountries = name => {
  const url = `https://restcountries.com/v3.1/name/${name}`;
  const promise = fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => console.log(data[0].name.official))
    .catch(error => {
      console.log('error');
    });
  return promise;
};
export default fetchCountries;
