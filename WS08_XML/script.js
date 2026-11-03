// Otetaan elementit talteen
const loadDefaultBtn = document.querySelector("#loadDefaultBtn");
const citySelect = document.querySelector("#city");
const citySearchInput = document.querySelector("#citysearch");
const searchBtn = document.querySelector("#search");
const weatherDataDiv = document.querySelector("#weatherdata");

// API-avain ja pohjaosoite (tehtävänannosta annettu esimerkkiavain)
const apiKey = "YOUR_API_KEY";

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