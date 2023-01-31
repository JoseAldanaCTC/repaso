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
console.log(meses);
console.log(dias);
///concat -> unir dos o mas arreglos.
let arreglo1 =[1,2,3];
let arreglo2 =[4,5,6];
let combinado =arreglo1.concat(arreglo2);
console.log(combinado);