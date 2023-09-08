let searchBtn = document.getElementById("search-btn");

let conutryInput = document.getElementById("country-input");

let result = document.getElementById("wrapper");

searchBtn.addEventListener("click", () => {
  let countryName = conutryInput.value;
  console.log(countryName);

  fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data[0].flags.png);
      console.log(data[0]);
      console.log(data[0].flags.png);
      console.log(data[0].name.common);
      console.log(data[0].capital[0]);
      console.log(data[0].continents[0]);
      console.log(data[0].population);
      console.log(Object.values(data[0].currencies)[0].name);
      console.log(Object.values(data[0].languages)[0]);
      result.innerHTML = `<div class="country-data">
                     <img class='country-flag' src=${data[0].flags.png} alt='country flag' />
                    <h3>Country Name: ${data[0].name.common}</h3>
                    <h3>Capital: ${data[0].capital[0]}</h3>
                    <h3>Continets: ${data[0].continents[0]}</h3>
                    <h3>Population: ${data[0].population}</h3>
                    <h3>Currency: ${Object.values(data[0].currencies)[0].name}</h3>
                    <h3>Language: ${Object.values(data[0].languages)[0]}</h3>
                    </div>`;
    })
    .catch(() => {
      if(countryName == ''){
        result.innerHTML = `<h3>Your input shouldn't be empty.</h3>`
      }
      else {
        result.innerHTML = `<h3>Not a valid Country name.</h3>`
      }
    });
});
