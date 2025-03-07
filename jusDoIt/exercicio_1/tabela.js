let query = "create table author (id number, name string, age number, city string, state string, country string)";

// Expressão regular par capturar o nome da tabela e as colunas
let regex = /create table (\w+)\s*\((.+)\)/;
let match = query.match(regex);

if (match) {
    let tableName = match[1]; // Nome da tabela
    let columns = match[2].split(",").map(col => col.trim()); /* Lista de colunas */
    /* let id;
    let name;
    let age;
    let city;
    let state;
    let country; */


    console.log("Nome da Tabela:", tableName);
    console.log("Colunas:", columns);
} else {
    console.log("Nenhuma correspondência encontrada.");
}