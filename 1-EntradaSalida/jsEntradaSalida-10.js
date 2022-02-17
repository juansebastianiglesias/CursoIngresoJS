/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
tomar el descuento por prompt y mostrar el resultado concatenado por alert
ejemplo "su monto total es 750 y se le hizo un descuento del 25% usted ingreso 1000"
*/
function mostrarAumento()
{
 let importe;
 let descuentoIngresado; 
 let descuento;
 let resultado;

 //luego de pedir un numero se parcea no al reves
 //y el parce antes del prompt no funciona
 descuentoIngresado= prompt("Ingrese su descuento")
 importe = parseInt(document.getElementById("txtIdImporte").value);

descuento = importe * descuentoIngresado/100;

resultado = importe - descuento;
	
document.getElementById("txtIdResultado").value = resultado;

alert("Su monto total es " + resultado + " y se le hizo un descuento del " + descuentoIngresado +" porciento " + " ya que su importe era " +importe);
}
