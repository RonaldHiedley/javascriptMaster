
let regExp = "create table author (id number, name string, age number, city string, state string, country string)/";
let tableName = regExp.match(/create table author (id number, name string, age number, city string, state string, country string)/);

console.log(tableName)

columns = ['id number',' name string',' age number',' city string','state string',' country string']

