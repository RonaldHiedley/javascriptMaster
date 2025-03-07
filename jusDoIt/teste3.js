const regex1 = /create table ([a-z]+) \((.+)\)/;
const regex2 = /create table (\w+)\s*\((.+)\)/;

const query1 = "create table user (id INT, name TEXT)";
const query2 = "create table User (id INT, name TEXT)";
const query3 = "create table user    (id INT, name TEXT)";
const query4 = "create table user1223 (id INT, name TEXT)";

console.log(query1.match(regex1)); // Funciona
console.log(query2.match(regex1)); // Falha (Nome tem maiúscula)
console.log(query3.match(regex1)); // Falha (Espaço antes do `(`)
console.log(query4.match(regex1)); // Falha (Tem números no nome da tabela)
// .match buscar em "query" em correspondecia a regex1;

console.log(query1.match(regex2)); // Funciona
console.log(query2.match(regex2)); // Funciona
console.log(query3.match(regex2)); // Funciona
console.log(query4.match(regex2)); // Funciona
// .match server para procurar uma correspondência entre uma string e 
// uma expressão Regular. retornar um array ou null.