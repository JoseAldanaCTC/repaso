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

console.log(encontrado);

// findIndex -> devuelve la posicion del primer elemento que cumple con 
//la condicion indicada

var encontrado= numerosDePrueba.findIndex(elemento => elemento >16);

console.log(encontrado);

// filter -> devuelve un array con todos los elementos que cumplen la condicion

var encontrado= numerosDePrueba.filter(elemento => elemento >10);

console.log(encontrado);