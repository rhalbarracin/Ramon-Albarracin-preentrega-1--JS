//Datos para el Ingreso a la tabla

alert("Bienvenidos a la tabla de Posiciones de Equipos!!");

const usuarioAutorizado = "Scaloni";

const passwordAutorizada = "Ganamos el Mundial";

let usuario = prompt("Ingrese su Usuario");

let password = prompt("Ingrese la Contraseña");

// condiciones de autorización
if(usuario===usuarioAutorizado && password===passwordAutorizada) {
    alert("Los datos son correctos puede ingresar " + usuario + " CAMPEON!!! ");

// Cantidad de Equipos y puntos por resultado

let cantidadEquipos = parseInt(prompt("Ingrese la cantidad de equipos del torneo"));



//ciclo por cada equipo

for(let i=0; i<cantidadEquipos; i++){

let nombreEquipo = prompt("Ingrese el Nombre del Equipo ");

let resultadoPartido1 = parseInt(prompt("Ingrese el Resultado del partido 1, si ganó (3), si empató (1) si perdió (0)"));

let resultadoPartido2 = parseInt(prompt("Ingrese el Resultado del partido 2, si ganó (3), si empató (1) si perdió (0)"));

let puntosAcumulados = calcularSuma(resultadoPartido1, resultadoPartido2);


   
   let puntosEquipo1 = puntosAcumulados

   alert("Los puntos acumulados de " + nombreEquipo + " es " + puntosEquipo1);

   let puntosEquipo2 = puntosAcumulados

   alert("Los puntos acumulados de " + nombreEquipo + " es " + puntosEquipo2);


   // if(puntosEquipo1>=puntosEquipo2){
   //    alert("El puntero tiene " + puntosEquipo1) 
    
    //}else{
     //  alert("El puntero tiene " + puntosEquipo2) 
    
    //}


 }
  

}else{
   alert("Usuario o contraseña Incorrecta")
}

//FUNCIONES

function calcularSuma(resultadoPartido1, resultadoPartido2){
    let puntosAcumulados = (resultadoPartido1 + resultadoPartido2)
    return puntosAcumulados;
}






