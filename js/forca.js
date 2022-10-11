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

let  pais;
let continete;
let url = "https://raw.githubusercontent.com/luannsr12/ddi-json-flag/main/data.json";
const request = new XMLHttpRequest;
request.open("GET", url); // abro a pagina
request.responseType = 'json'; //idico o tipo de retorno
request.send(); //faço a leitura da pagina

request.onload = function(){
    
}
