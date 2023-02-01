var Persona ={};
var Persona = new Object();

Persona.nombre="Carlos";

/* Persona {
    'nombre' : "Carlos"
}
*/

Persona["nombre"] = "Carlos";

//console.log(Persona.nombre);
//console.log(Persona["nombre"]);

var Persona2 ={
    nombre: "Martin",
    edad: 25,
    salario: null,
    hijos: 3
}
//////////////////////////////////////////////////////
var Persona3 ={
    nombre: null,
    edad: null,
    salario: null,
    hijos: null
}

Persona3.nombre="Gustavo";
Persona3["edad"] =18;

console.log(Persona3);