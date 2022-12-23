// El algoritmo simula una tienda online que vende videojuegos.

// Titulos disponibles, respectivos precios y variables que almacenna las unidades que se van a adquirir:

let minecraft = "Minecraft";
let minecraftPrecio = 500;
let minecraftUnidades;

let gta5 = "Grand Thef Auto: 5";
let gta5Precio = 1200;
let gta5Unidades;

let lego = "LEGO Star Wars: The Skywalker Saga"
let legoPrecio = 3000;
let legoUnidades;

let elden = "Elden Ring"
let eldenPrecio = 4800;
let eldenUnidades;

let precioTotal;

//Funcion que pregunta al usuario la cantidad de copias de un juego que desea adquirir.
const pregunta1 = (juego, precio) => { return parseInt(prompt("Cuantas copias de " + juego + " quieres adquirir. Su precio es de $" + precio)); }

//Bucle que ejecuta preguntas por cada uno de los cuatro juegos.
for (let numeroDePreguntas = 0; numeroDePreguntas <= 5; numeroDePreguntas++) {
    if (numeroDePreguntas == 0) {
        minecraftUnidades = pregunta1(minecraft, minecraftPrecio );
    }
    if (numeroDePreguntas == 1) {
        gta5Unidades = pregunta1(gta5, gta5Precio);
    }
    if (numeroDePreguntas == 2) {
        legoUnidades = pregunta1(lego, legoPrecio);
    }
    if (numeroDePreguntas == 3) {
        eldenUnidades = pregunta1(elden, eldenPrecio);
    }
    if (numeroDePreguntas == 4) {
        //Calculo del precio total y alerta que lo muestra en pantalla y ademas imprime las unidades por juego.
        precioTotal = (((minecraftUnidades * minecraftPrecio) + (gta5Unidades * gta5Precio) + (legoUnidades * legoPrecio) + (eldenUnidades * eldenPrecio)) || 0);
        alert("El precio total es de $" + precioTotal +". Llevas " + (minecraftUnidades || 0) + " Minecraft, " + (gta5Unidades || 0) + " Grand Thef Auto, " + (legoUnidades || 0) + " Lego Star Wars: The Skywalker Saga, " + (eldenUnidades || 0) + " Elden Ring.");
    }
}
