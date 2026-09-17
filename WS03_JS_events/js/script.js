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
        </tbody>
    </table>
`;

document.getElementById("tableContainer").innerHTML = table;
});