const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "00 and Functional"
};
Object.freeze(javascript);
javascript.name = "ECMAScript";
javascript.author = "Brendan Eich";
delete javascript.year; // delete parou de fazer efeito
console.log(javascript); // posso tanto alterar quanto modificar propriedades
console.log(Object.isExtensible(javascript));
console.log(Object.isSealed(javascript));
console.log(Object.isFrozen(javascript));
Object.setPrototypeOf(javascript, {});