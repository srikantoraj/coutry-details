const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => dataCountries(data));
}
const dataCountries = countries => {
    const countriesHTMLS = countries.map(country => countryInfo(country));
    // console.log(countries[0]);
    // countriesHTMLS.join(' ');
    console.log(countriesHTMLS.join(" "));
    const container = document.getElementById('container');
    container.innerHTML = countriesHTMLS.join(' ');
    
}
const countryInfo = country => {
    
    return `<div id='country'>
    <h2>Country Name: ${country.name}</h2>
    <h4>Capital Name: ${country.capital}</h4>
    <img src="${country.flag}" >
    <h6 style="position:relative;left:80px">Fig:Flag</h6>
    </div>`
}
loadCountries();