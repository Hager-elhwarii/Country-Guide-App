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
      result.innerHTML = `

      <div class="country-data">
      <img class='country-flag' src=${data[0].flags.png} alt='country flag' />
     <h3 class='country-name'>${data[0].name.common}</h3>
     <div class='data-wrapper'>
     <h4>Capital: <span>${data[0].capital[0]}</span></h4>
     <h4>Continent: <span>${data[0].continents[0]}</span></h4>
     <h4>Population: <span>${data[0].population}</span> </h4>
     <h4>Currency: <span>${Object.values(data[0].currencies)[0].name}</span></h4>
     <h4>Language: <span>${Object.values(data[0].languages)[0]}</span></h4>
     </div>
     </div>
      `;
    })
    .catch(() => {
      if (countryName == "") {
        result.innerHTML = `<h3 class='empty-input'>The input field cannot be empty.</h3>`;
      } else {
        result.innerHTML = `<h3 class='unvalid-input'>Please enter a valid Country name.</h3>`;
      }
    });
});
