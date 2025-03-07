let query = "create table author (id number, name string, age number, city string, state string, country string";

let regex = /create table (\w+)\s*\((.+)\)/;
let match = query.match(regex);// querry = consulta

const database = {
    database:
    {
        author:
        {
            columns:
            {
                id: "number",
                name: "string",
                age: "number",
                city: "string",
                state: "string",
                country: "string"
            },
            data: []
        }
    }
}
console.log(JSON.stringify(database));
if (match) {
    let tableName = match[1]; // imprimi fora do parênteses
    let columns = match[2].split(",").map(col => col.trim()); /* LIsta colunas */

    
} else {
    console.log("Nenhum correspondência encontrada");
}