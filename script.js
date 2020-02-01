
var list = [];
var indexEdit;

function draw(){
    var str = "";

    for(let i=0; i<list.length ; i++){

        str+= `
<tbody>
<tr>
    <td>${list[i].name}</td>
    <td>${list[i].number}</td>
    <td><button class="modifica" onclick="edit(${i})">Modifica</button></td>
    <td><button class="sterge" onclick="del(${i})">Sterge</button></td>
</tr>
</tbody>`;

document.querySelector("table tbody").innerHTML = str;

    }
  }

  function del(idx){
      if(confirm(`ESTI SIGUR CA VREI SA IL STERGI pe ${list[idx].name}?`)){
          list.splice(idx,1);
          draw();
      }
  }

  function add(event){
    event.preventDefault();

      var newItem = {
          name:document.querySelector(".nume").value,
          number:document.querySelector(".telefon").value
      };

      if(indexEdit === undefined){
          list.push(newItem);
      }else{
          list[indexEdit]=newItem;
      }
      draw();
  }

  function edit(idx){
        document.querySelector("name=['nume']").value = list[idx].nume;
        document.querySelector("name=['telefon']").value = list[idx].telefon;
        window.indexEdit = idx;
  }



