
var list = [];
var indexEdit;

function draw(){
    var str = "";

    
    
    for(let i=0; i<list.length ; i++){

        str+= `

<tr>
    <td>${list[i].name}</td>
    <td>${list[i].number}</td>
    <td><button class="modifica" onclick="edit(${i})">Modifica</button></td>
    <td><button class="sterge" onclick="del(${i})">Sterge</button></td>
</tr>`;

    document.querySelector("table tbody").innerHTML = str;


    }
        if(list.length === 0){
        document.querySelector("table tbody").classList.add('remove');
        }else{
    document.querySelector("table tbody").classList.remove('remove');
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
      indexEdit = undefined;
      draw();
  }

  function edit(idx){
        document.querySelector(".nume").value = list[idx].name;
        document.querySelector(".telefon").value = list[idx].number;
        window.indexEdit = idx;
  }
  



