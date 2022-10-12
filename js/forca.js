// var , let , cont
// criação de variavel com arry
// const palavras = ["Brasil", "França"]; 
// console.log(palavras);
// palavras[0] = "Canada";
// comando abaixo da um erro, variavel ja declarada
// palavras = ["Italia", "Japão"]
//palavras[2] = "Mexico";
//console.log(palavras.length);
//palavras[palavras.length] = "Finlandia";
//console.log(palavras[2]);

let baseDados;
let  pais;
let continente;
let sorteio;
let url = "https://raw.githubusercontent.com/luannsr12/ddi-json-flag/main/data.json";
const request = new XMLHttpRequest;
request.open("GET", url); // abro a pagina
request.responseType = 'json'; //idico o tipo de retorno
request.send(); //faço a leitura da pagina

request.onload = function(){
    //Guardo o conteudo do arquivo na variavel
    baseDados = request.response;
    //console.log(baseDados[30]);
    var totalPaises = Object.keys(baseDados).length;
    //console.log(totalPaises);
    sortearPais(totalPaises);
}

function sortearPais(total){
    sorteio =Math.floor(Math.random() *  total);
   // console.log(baseDados[sorteio]);
    pais = baseDados[sorteio].pais;
    continente = baseDados[sorteio].continente
    //console.log(continente,pais);
}

function alfabeto(){
    var botoes = '';
    for(var i = 65; i <= 90; i++){
        botoes += `<button class="btn btn-warning btn-lg font-monospace m-1 botao">${String.fromCharCode(i)}</button>`;
    }
    document.getElementById("alfabeto").innerHTML = botoes;
}

alfabeto();