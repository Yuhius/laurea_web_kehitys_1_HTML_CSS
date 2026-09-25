const changeHeadingButton = document.querySelector("#changeHeadingButton");
const taskOneHeading = document.querySelector("#taskOneHeading");

changeHeadingButton.addEventListener("click", function () {
    taskOneHeading.textContent = "Muokattu otsikko!";
});

const changeStyleButton = document.querySelector("#changeStyleButton");
const highlight = "highlight";

changeStyleButton.addEventListener("click", function () {
    taskOneHeading.classList.toggle("highlight");
});

const changeTextButton = document.querySelector("#changeTextButton");
const animalText = document.querySelector("#animalText");

changeTextButton.addEventListener("click", function () {
    animalText.textContent = "Tulevaisuudessa elefantit ovat kuolleet sukupuuttoon.";
});

const animalContent = document.querySelector("#animalContent");
const hideAnimalButton = document.querySelector("#hideAnimalButton");
const showAnimalButton = document.querySelector("#showAnimalButton");

const heading = document.createElement("h3");
heading.textContent = "Päivän eläin";

const paragraph = document.createElement("p");
paragraph.textContent = "Pingviinit ovat lentokyvyttömiä lintuja."

const image = document.createElement("img");
image.src = "images/penguin.png";
image.alt = "Pingviini";

animalContent.append(heading, paragraph, image);

hideAnimalButton.addEventListener("click", function () {
    animalContent.style.display = "none";
});

showAnimalButton.addEventListener("click", function () {
    animalContent.style.display = "block";
});

const animalButton = document.querySelector("#animalButton");
const animalTable = document.querySelector("#animalTable");

animalButton.addEventListener("click", function () {
    animalTable.hidden = !animalTable.hidden;
    console.log("nappia painettu!");
});

const animalSelect = document.querySelector("#animalSelect");
const animalName = document.querySelector("#animalName");
const animalImage = document.querySelector("#animalImage");
const animalDescription = document.querySelector("#animalDescription");

animalSelect.addEventListener("change", function () {
    const selectedAnimal = animalSelect.value;
        console.log("selected animal:", selectedAnimal);

        if (selectedAnimal === "tiger") {
            animalName.textContent = "Tiikeri";
            animalImage.src = "images/tiger.png";
            animalImage.alt = "Tämä on tiikeri";
            animalDescription.textContent = "Tiikerit ovat raidallisia ja melko rauhallisia eläimiä.";
        } else if (selectedAnimal === "elephant") {
            animalName.textContent = "Elefantti";
            animalImage.src = "images/elephant.png";
            animalImage.alt = "Tämä on elefantti";
            animalDescription.textContent = "Elefantit ovat maailman suurimpia maaeläimiä.";
        } else if (selectedAnimal === "panda") {
            animalName.textContent = "Panda";
            animalImage.src = "images/panda.png";
            animalImage.alt = "Tämä on panda";
            animalDescription.textContent = "Pandat ovat mustavalkoisia eläimiä jotka syövät bambua.";
        } else if (selectedAnimal === "penguin") {
            animalName.textContent = "Pingviini";
            animalImage.src = "images/penguin.png";
            animalImage.alt = "Tämä on pingviini";
            animalDescription.textContent = "Pingviinit ovat lentokyvyttömiä lintuja.";
        }
});

const imageHighlight = "image-highlight";

animalImage.addEventListener("mouseenter", function () {
    animalImage.classList.add(imageHighlight);
});

animalImage.addEventListener("mouseleave", function () {
    animalImage.classList.remove(imageHighlight);
});

const animalForm = document.querySelector("#animalForm");
const observationAnimal = document.querySelector("#observationAnimal");
const observationLocation = document.querySelector("#observationLocation");
const observationDate = document.querySelector("#observationDate");
const observationTableBody = document.querySelector("#observationTableBody");

animalForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (
        observationAnimal.value === "" ||
        observationLocation.value === "" ||
        observationDate.value === ""
    ) {
        return;
    }

    const row = document.createElement("tr");
    const animalCell = document.createElement("td");
    const locationCell = document.createElement("td");
    const dateCell = document.createElement("td");

    animalCell.textContent = observationAnimal.value;
    locationCell.textContent = observationLocation.value;
    dateCell.textContent = observationDate.value;

    row.append(animalCell, locationCell, dateCell);

    observationTableBody.append(row);
});