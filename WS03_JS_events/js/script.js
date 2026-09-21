const showMessage = document.querySelector("#showMessage")

showMessage.addEventListener("click", function (){
    alert("You clicked me!");
});

const showTable = document.querySelector("#showTable")

showTable.addEventListener("click", function (){
    const table = `
    <table border="1">
        <thead>
            <tr>
                <th>Animal</th>
                <th>Habitat</th>
                <th>Diet</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Tiger</td>
                <td>Forest</td>
                <td>Carnivore</td>
            </tr>
            <tr>
                <td>Elephant</td>
                <td>Savanna</td>
                <td>Herbivore</td>
            </tr>
            <tr>
                <td>Dragon</td>
                <td>No one knows</td>
                <td>Carnivore</td>
            </tr>
        </tbody>
    </table>
`;

document.getElementById("tableContainer").innerHTML = table;
});

const Exercise1 = document.querySelector("#Exercise1");

Exercise1.addEventListener("click", function () {
    Exercise1.style.color = "red";
    Exercise1.innerHTML = "Bye bye mouse!";
});

const Exercise2 = document.querySelector("#Exercise2");

Exercise2.addEventListener("mouseover", function () {
    console.log("Stepped over me with a mouse!");
});

const textarea = document.querySelector("#feedback");

textarea.addEventListener("focus", function () {
    status.innerHTML = "You are typing...";
    textarea.style.backgroundColor = "lightyellow";
});

const status = document.querySelector("#status");

textarea.addEventListener("blur", function () {
    status.innerHTML = "";
    textarea.style.backgroundColor = "";
});

const charcount = document.querySelector("#charcount");

textarea.addEventListener("input", function () {
    charcount.innerHTML = textarea.value.length + "/200";
    preview.innerHTML = textarea.value;
});

const preview = document.querySelector("#preview");

const feedbackForm = document.querySelector("#feedbackForm");

feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const feedbackLength = textarea.value.length;

    if (feedbackLength < 10 || feedbackLength > 200) {
        status.innerHTML = "Feedback must be between 10 and 200 characters.";
    } else {
        textarea.value = "";
        status.innerHTML = "Thank you for your feedback!";
        charcount.innerHTML = "0/200";
        preview.innerHTML = "(The preview will appear here)";
    }
});

const keybox = document.querySelector("#keybox");
const keyinfo = document.querySelector("#keyinfo");

let keyCount = 0;

document.addEventListener("keydown", function (event) {
    console.log(event);

    keyCount++;

    keyinfo.innerHTML = "Key: " + event.key + 
    " | Code: " + event.code + 
    " | Presses: " + keyCount + 
    " | Shift " + event.shiftKey +
    " | Ctrl " + event.ctrlKey +
    " | Alt: " + event.altKey;

    keybox.innerHTML = event.key;
    keybox.style.fontSize = "3em";

    if (event.key === "r") {
        keybox.style.backgroundColor = "purple";
    } else if (event.key === "g") {
        keybox.style.backgroundColor = "lightgreen";
    } else if (event.key === "b") {
        keybox.style.backgroundColor = "lightblue";
    } else {
        keybox.style.backgroundColor = "white";
    }
});