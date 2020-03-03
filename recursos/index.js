function onformSubmit() {
        let formData = readFormData();
        insertNewRecord(formData)

}

function readFormData() {
    let formData= {};
    formData["nome"] = document.getElementById("nome").value;
    formData["idade"] = document.getElementById("idade").value;
    formData["cidade"] = document.getElementById("cidade").value;
    return formData;
}
function insertNewRecord(data) {
    let table = document.getElementById("info").getElementsByTagName("tbody")[0];
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nome
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.idade
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.cidade
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = cell4.innerHTML = `<a>Edit</a>
    <a>Delete</a>`;

}
