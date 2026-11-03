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