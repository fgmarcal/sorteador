const list = [];

let loadPage;
let inputValue = document.getElementById('input-list');
let tableList = document.getElementById('lista');
let writeWinner = document.getElementById('win');
let runEvent = document.getElementById('run-event');
let reloadPage = document.getElementById('reload');
let hideHeader = document.getElementById('result');
let hideContenders = document.getElementById('contenders');

function clickMe(){
    if(inputValue.value ===""){
        alert("Nenhum nome para inserir")
    }
    else{
        list.push(inputValue.value);
        let listValue = `<li> ${inputValue.value} </li>`;
        tableList.innerHTML += listValue;
        inputValue.value = "";
        inputValue.focus();
        hideContenders.style.opacity = "1";
        hideHeader.style.opacity = "1";
        runEvent.style.opacity = "1";
    }

}

function resetBtn() {
    inputValue.value = "";
}


function randomGen(){
    const len = list.length;
    let result = Math.floor(Math.random() * len);
    if(len < 1){
        alert("Nenhum nome foi inserido");
    }
    else{
        writeWinner.innerHTML = `
        
         <div style="display:none;" id="winner" class="animate-bottom">
            <h2>Parabéns,</h2>
            <p>${list[result]}</p>
        </div>        
        `
        runEvent.style.opacity = "0";
        hideHeader.style.color = "transparent";
        loadButton();

    }

}

function loadButton() {
  loadPage = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("winner").style.display = "block";
  reloadPage.innerHTML = `
  <button id="reload-btn" onClick="window.location.href=window.location.href">recarregar</button>`
  document.getElementById("reload-btn").style.opacity = "1";
}