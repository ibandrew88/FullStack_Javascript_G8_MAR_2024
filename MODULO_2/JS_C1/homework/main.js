

var precio;
precio = 25.99;
document.write("El precio del producto es: ", precio);

var costoDeEnvio =  10;
document.write("<br>")
document.write("El costo de envio del producto es:", costoDeEnvio);

var costoTotal = precio + costoDeEnvio
document.write("<br>")
document.write("El costo total del producto es: ", precio+costoDeEnvio);

var costoTotalx2 = costoTotal * 2
document.write("<br> el costo total por dos es; ", costoTotalx2)

/// Reto de clase

var precioFinal;
precioFinal = 50;
document.write("<br>El precio del producto es: ", precioFinal);

var costoDeEnvio2 =  15;
document.write("<br>")
document.write("El costo de envio del producto es:", costoDeEnvio2);

var costoTotal2 = precioFinal - costoDeEnvio2
document.write("<br>")
document.write("El costo total final del producto es: ", precioFinal - costoDeEnvio2);

/// otra forma de hacerlo
var costoTotalFinal= 100;
var costoEnvio3 = 25;
var precioFinal3= costoTotalFinal - costoEnvio3

document.write("<br> El precio final del articulo es : ", precioFinal3)

// Esto es un prompt

var nombreUsuario = prompt("Esto es una alerta, por favor escriba su nombnre");
document.write("<br>", nombreUsuario)