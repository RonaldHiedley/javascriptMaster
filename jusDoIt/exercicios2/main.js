let query = "create table author (id number, name string, age number, city string, state string, country string";

let regex = /create table (\w+)\s*\((.+)\)/;
let match = query.match(regex);// querry = consulta

for (let column of columns) {
    console.log(column);
}

if (match) {
    let tableName = match[1]; // imprimi fora do parênteses
    let columns = match[2].split(",").map(col => col.trim()); /* LIsta colunas */

    const database = {
        tables: {
            [tableName]: {
                columns: {}
            }
        }
    }
    for (let column of columns) {
        console.log(column);
    }
   console.log(database);
    // console.log(JSON.stringify(database));
} else {
    console.log("Nenhum correspondência encontrada");
}