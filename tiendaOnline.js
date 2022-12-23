// El algoritmo simula una tienda online que vende videojuegos.

// Titulos disponibles, respectivos precios y variables que almacenna las unidades que se van a adquirir:

let minecraft = "Minecraft";
let minecraftPrecio = 500;

let gta5 = "Grand Thef Auto: 5";
let gta5Precio = 1200;

let lego = "LEGO Star Wars: The Skywalker Saga"
let legoPrecio = 3000;

let elden = "Elden Ring"
let eldenPrecio = 4800;

//Funcion que pregunta al usuario la cantidad de copias de un juego que desea adquirir y se asegura que no se ingrese un valor no numerico.
const pregunta1 = (juego, precio) => {
    let cantidad ="";
    while (isNaN(cantidad) || cantidad === "") {
        cantidad = prompt("Cuantas copias de " + juego + " quieres adquirir. Su precio es de " + precio);
    }
    return parseInt(cantidad) || 0;
}

// Se realiza al usuario 4 preguntas por cada juego disponible.
let minecraftUnidades = pregunta1(minecraft, minecraftPrecio);
let gta5Unidades = pregunta1(gta5, gta5Precio);
let legoUnidades = pregunta1(lego, legoPrecio);
let eldenUnidades = pregunta1(elden, eldenPrecio);

//Calculos de los totales.
let minecraftTotal, gta5Total, legoTotal, eldenTotal, precioTotal; 

minecraftTotal = minecraftPrecio * minecraftUnidades;
gta5Total = gta5Precio * gta5Unidades;
legoTotal = legoPrecio * legoUnidades;
eldenTotal = eldenPrecio * eldenUnidades;
precioTotal = minecraftTotal + gta5Total + legoTotal + eldenTotal;

//Alerta Final que muestra el total de la compra y cuantas unidades 
alert("El precio total es de $" + precioTotal + ". Llevas " + (minecraftUnidades || 0) + " " + minecraft + ", " + (gta5Unidades || 0) + " " + gta5 + ", " + (legoUnidades || 0) + " " + lego + ", " + (eldenUnidades || 0) + " " + elden + ".");
