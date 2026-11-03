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