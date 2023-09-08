let searchBtn = document.getElementById("search-btn");

let conutryInput = document.getElementById("country-input");

let result = document.getElementById("wrapper");


searchBtn.addEventListener('click',()=> {
    let countryName = conutryInput.value;
    console.log(countryName);

    // let countryUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        console.log(data[0].flags.png)
        console.log(data[0])
        console.log(data[0].flags.png)
        console.log(data[0].name.common)
        console.log(data[0].capital[0])
        console.log(data[0].continents[0])
        console.log(data[0].population)
        console.log(Object.values(data[0].currencies)[0].name)
        console.log(Object.values(data[0].languages)[0])
        result.innerHTML = `<img class="flag-img" src=${data[0].flags.png}/>`


    }).catch((error)=> console.log(error))
})