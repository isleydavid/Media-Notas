const tabela = document.querySelector('table');
 console.log(tabela) ;
  tabela.onclick = (evento)=>{
    console.log(evento.target);
    elemento = evento.target
    if(elemento.classList.contains('delete')){
        elemento.parentNode.parentNode.remove();
    }
}

  calc.addEventListener("click", CalcularMedia);
  
  document.getElementById("clear").addEventListener("click", function () {
    resultado.textContent = "";
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nota3").value = "";
    document.getElementById("matricula").value = ""
    document.getElementById("name").value = "";
    
  });
  
  document.getElementById("delete").addEventListener("click", function (event) {
    const element = event.target;
    console.log(element);
    if (element.classList.contains("pai")) {
      const elementoPai = element.parentNode;
      elementoPai.remove();
    }
  });


  function CalcularMedia() {
    const name = document.getElementById("name").value;
    const matricula = document.getElementById("matricula").value;
    const nota1 = Number(document.getElementById("nota1").value);
    const nota2 = Number(document.getElementById("nota2").value);
    const nota3 = Number(document.getElementById("nota3").value);
    const table = document.getElementById("table");
    const calculation = ((nota1 + nota2 + nota3) / 3).toFixed(2);
    const tablex = document.createElement("tr");
  
    if (calculation >= 7) {
      tablex.innerHTML = `<td>${name}</td>
          <td>${matricula}</td>
          <td>${calculation}</td>
          <td id="color1">aprovado!</td> <td><button class="delete">x</button></td> `;
      table.appendChild(tablex);
    } else if (calculation < 7) {
      tablex.innerHTML = `<td>${name}</td>
      <td>${matricula}</td>
      <td>${calculation}</td>
      <td id="color2">reprovado!</td> <td><button class="delete">x</button></td> `;
      table.appendChild(tablex);
    }
  
  }
