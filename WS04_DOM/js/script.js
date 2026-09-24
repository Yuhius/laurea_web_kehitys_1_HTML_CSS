const changeHeadingButton = document.querySelector("#changeHeadingButton");
const taskOneHeading = document.querySelector("#taskOneHeading");

changeHeadingButton.addEventListener("click", function () {
    taskOneHeading.textContent = "Muokattu otsikko!";
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
        }
});