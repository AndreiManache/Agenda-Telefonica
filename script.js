


function addInput(e){
e.preventDefault();
let nume = document.querySelector('.nume').value;
let telefon = document.querySelector('.telefon').value;
var str= `
<tbody>
<tr>
    <td class="imp1">${nume}</td>
    <td class="imp2">${telefon}</td>
    <td><button class="modifica" onclick="modifyInput(event)">Modifica</button></td>
    <td><button class="sterge" onclick="deleteInput(event)">Sterge</button></td>
</tr>
</tbody>`;
document.querySelector(".zone2").style.visibility="visible";
document.querySelector(".table").innerHTML += str;
}

var btn1 = document.querySelector(".modifica");
btn1.addEventListener('onclick',modifyInput());

function modifyInput(){
    
    document.querySelector('.nume').value = document.querySelector(".imp1").innerText;
    document.querySelector('.telefon').value = document.querySelector(".imp2").innerText;

    
    
}