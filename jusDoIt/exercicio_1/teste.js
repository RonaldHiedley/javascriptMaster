string = "http://www.google.com/joao.pedro?a=b";
a = string.match(/(http:\/\/www\.google\.com\/)([\d\w\.]+)/);
console.log(a)
Array [ "http://www.google.com/joao.pedro", "http://www.google.com/", "joao.pedro" ]