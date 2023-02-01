var numeros=[2,5,7,12];
//console.log(numeros);
/// push -> agrega un dato al final del array
numeros.push(17);
//console.log(numeros);
///pop-> elimna un dato al final del array
numeros.pop();
//console.log(numeros);
/// unshift -> agrega un dato al principio del array
numeros.unshift(0);
//console.log(numeros);
/// shift -> elmina el primer dato del arreglo
numeros.shift();
//console.log(numeros);

var nombres = ["Miguel","Keiden","Isabel","Marin","Ernesto","Kassandra","Akemi","Juan"];
// slice -> recorta una parte de un array|| array.slice (principio,final)
var recorte =nombres.slice(0,5);
//console.log(recorte);
//splice -> modificar arreglos de forma dinamica (a diferencia de slice,
/// splice no copia la informacion, la corta).

///let meses = ["enero", "febrero", "lunes", "martes"];
///let dias = meses.splice(2);
///console.log(meses);
//console.log(dias);

let meses = ["enero", "febrero", "lunes", "martes"];
let dias = meses.splice(2,1);
//console.log(meses);
//console.log(dias);
///concat -> unir dos o mas arreglos.
let arreglo1 =[1,2,3];
let arreglo2 =[4,5,6];
let combinado =arreglo1.concat(arreglo2);
//console.log(combinado);

///indexOf -> devuelve la posicion de un dato en un array
// si el dato esta repetido, te devuelve la primera coincidencia

let abc =['0','a','b','c','d','e','f','c','g','h','i','j','k'];
let elemento ='c';
var posabc = abc.indexOf(elemento);
//console.log(posabc);
//lastIndexOf-> devuelve la ultima coincidencia de un dato
//lastIndexOf realiza su busqueda desde el final del arreglo al principio
var finalabc=abc.lastIndexOf(elemento);
//console.log(finalabc);
// si agrego un valor, se corta el rango de la busqueda
var finalabc2=abc.lastIndexOf(elemento,2);
//console.log(finalabc2);

// includes-> busca si un dato pertenece al arreglo
// devuelve True or False
var musica =["rap","rock","Pop","salsa","huayno","balada","reggueton","hip-hop"];
var verificar = musica.includes("rap");
var verificar2 = musica.includes("harawis");
//console.log(verificar);
//console.log(verificar2);

//find-> devuelve el primer elemento que cumple con la condicion indicada

var numerosDePrueba =[5,6,15,25];

var encontrado= numerosDePrueba.find(elemento => elemento >16);

//console.log(encontrado);

// findIndex -> devuelve la posicion del primer elemento que cumple con 
//la condicion indicada

var encontrado= numerosDePrueba.findIndex(elemento => elemento >16);

//console.log(encontrado);

// filter -> devuelve un array con todos los elementos que cumplen la condicion

var encontrado= numerosDePrueba.filter(elemento => elemento >10);

//console.log(encontrado);

//map -> devuelve un arreglo con los datos afectados por una funcion determinada

// en cristiano: puedo por ejemplo devolver un array donde todos los datos
 //fueron multiplicados x2

var factores = [2,5,7,14];

var producto =factores.map(n=>n*2);

//console.log(producto);

//reduce -> opera todos los datos de un array y devuelve un unico valor

var resultado =factores.reduce(function(a,b){return a+b;});
//console.log(resultado);

// sort -> ordena los datos de un array

var desorden =[3,-1, 50, 25, 27, 12, 3]

var orden = desorden.sort();

//console.log(orden);

// toma el primer digito para ordenar

var nombresAzar = ["Miguel","Keiden","Isabel","Marin","Ernesto","Kassandra","Akemi","Juan"];
var orden = nombresAzar.sort();
//console.log(nombresAzar);

var arr=[40,1,5,200];

var orden =arr.sort(function(a,b){return a-b;})
//console.log(orden);

//reverse -> invierte los datos de un array
var nombresAzar = ["Miguel","Keiden","Isabel","Marin","Ernesto","Kassandra","Akemi","Juan"];
nombresAzar.reverse();
console.log(nombresAzar);

//split -> divide una cadena de caracteres en arrays segun una condicion

let mensaje = 'Soy un tipo feliz y afortunado';

var corte = mensaje.split(' ');
//console.log(corte);
// si agregas un numero, ese numero funciona como limite de partes
//var corte = mensaje.split(' ',3);
//console.log(corte);


//join -> une todos los datos de una cadena y agrega un separador
console.log(corte);
console.log(corte.join(","));