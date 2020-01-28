var form = document.getElementById('form');


form.addEventListener('submit',addRow);

function addRow(e){
    e.preventDefault();

var newNume = document.querySelector(".nume").value;
var newTelefon = document.querySelector(".telefon").value;    

var table = document.createElement("table").innerHTML = document.createElement("thead");

console.log(table);
}
