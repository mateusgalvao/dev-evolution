let input = require('fs').readFileSync('stdin', 'utf8');

let ano = parseFloat("digite o ano de seu nascimento: ")

let hoje = 2022 - ano;

console.log("idade: "+ hoje)