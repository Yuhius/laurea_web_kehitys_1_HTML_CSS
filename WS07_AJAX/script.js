const showNames = document.querySelector("#showNames");
const showAll = document.querySelector("#showAll");
const jsondata = document.querySelector("#jsondata");

const text = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const obj = JSON.parse(text)

function handleShowNames() {
    let tuloste = "";

    obj.employees.forEach(employee => {
        tuloste += `${employee.firstName} ${employee.lastName}<br>`;
    });
    jsondata.innerHTML = tuloste;
}

function handleShowAll() {
    let tuloste = "";

    obj.employees.forEach(employee => {
        tuloste += `Etunimi: ${employee.firstName}, Sukunimi: ${employee.lastName}<br>`;
    });
    jsondata.innerHTML = tuloste;
}

showNames.addEventListener("click", handleShowNames);
showAll.addEventListener("click", handleShowAll);

const loadRawBtn = document.querySelector("#loadRawBtn");
const loadParsedBtn = document.querySelector("#loadParsedBtn");
const rawData = document.querySelector("#rawData");

const url = "https://www.omdbapi.com/?s=star+wars&apikey=cbbc6750";

async function loadRawData() {
    try {
        const response = await fetch(url);
        const dataText = await response.text();
        rawData.innerText = dataText;
    } catch (error) {
        rawData.innerText = "Virhe datan latauksessa: " + error;
    }
}

async function loadParsedData() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        const movies = data.Search;

        let html = "<table border='1' style='border-collapse: collapse; width: 100%; margin-top: 10px;'>";
        html += "<tr><th>Elokuva</th><th>Vuosi</th><th>Tyyppi</th><th>Juliste (Poster)</th></tr>";

        movies.forEach(movie => {
            html += `<tr>
            <td>${movie.Title}</td>
            <td>${movie.Year}</td>
            <td>${movie.Type}</td>
            <td><img src="${movie.Poster}" alt="${movie.Title}" width="50"></td>
            </tr>`;
        });

        html += "</table>";

        rawData.innerHTML = html;

    } catch (error) {
        rawData.innerHTML = "Virhe datan parsimisessa: " + error;
    }
}

loadRawBtn.addEventListener("click", loadRawData);
loadParsedBtn.addEventListener("click", loadParsedData);

// Otetaan elementit talteen
const loadDefaultBtn = document.querySelector("#loadDefaultBtn");
const citySelect = document.querySelector("#city");
const citySearchInput = document.querySelector("#citysearch");
const searchBtn = document.querySelector("#search");
const weatherDataDiv = document.querySelector("#weatherdata");

// API-avain ja pohjaosoite (tehtävänannosta annettu esimerkkiavain)
const apiKey = "d9a55586f7e50a81dc1c804b7f3f9f8c";

// Yhteinen funktio säätietojen hakemiseen ja näyttämiseen
async function fetchWeather(city) {
    if (!city) {
        weatherDataDiv.innerHTML = "Kirjoita tai valitse kaupunki.";
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&mode=JSON&APPID=${apiKey}`;

    try {
        weatherDataDiv.innerHTML = "Ladataan säätietoja...";
        
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error("Kaupunkia ei löytynyt tai virhe haussa.");
        }

        const data = await response.json();

        // Parsitaan tarvittavat tiedot OpenWeatherMapin rakenteesta
        const cityName = data.name;
        const temp = data.main.temp;
        const humidity = data.main.humidity;
        const clouds = data.clouds.all;
        const description = data.weather[0].description;
        const icon = data.weather[0].icon; // Säätilan ikoni

        // Rakennetaan HTML-tuloste
        let html = `
            <h3>Sää paikassa: ${cityName}</h3>
            <p><strong>Lämpötila:</strong> ${temp} °C</p>
            <p><strong>Pilvisyys:</strong> ${clouds} %</p>
            <p><strong>Ilmankosteus:</strong> ${humidity} %</p>
            <p><strong>Kuvaus:</strong> ${description} <img src="https://openweathermap.org/img/wn/${icon}.png" alt="sääikoni"></p>
        `;

        weatherDataDiv.innerHTML = html;

    } catch (error) {
        weatherDataDiv.innerHTML = "Virhe: " + error.message;
    }
}

// 1. Ensimmäisen painikkeen tapahtuma (Hae oletuksena vaikkapa Helsinki)
loadDefaultBtn.addEventListener("click", () => {
    fetchWeather("Helsinki");
});

// 2. Pudotusvalikon muutos (onchange)
citySelect.addEventListener("change", (event) => {
    const selectedCity = event.target.value;
    fetchWeather(selectedCity);
});

// 3. Hakukentän ja hakunapin toiminnallisuus
searchBtn.addEventListener("click", () => {
    const query = citySearchInput.value.trim();
    fetchWeather(query);
});

// (Vapaaehtoinen bonus: mahdollistaa haun myös Enteriä painamalla)
citySearchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        searchBtn.click();
    }
});