var str = "http://www.google.com/joao.pedro?a=b/";
var valor= str.substring(str.lastIndexOf(".com/")+5,str.lastIndexOf("?"));
console.log(valor)