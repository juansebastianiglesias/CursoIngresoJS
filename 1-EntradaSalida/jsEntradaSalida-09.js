/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
 let importe; 
 let aumentoIngresado;
 let aumento;
 let resultado;

 aumentoIngresado= prompt("Ingrese su amuento")
 aumentoIngresado=parseInt(aumentoIngresado);

 importe = parseInt(document.getElementById("txtIdSueldo").value);

aumento = importe * aumentoIngresado/100;

resultado = importe + aumento;
	
document.getElementById("txtIdResultado").value = resultado;

alert("Su monto total es " + resultado + " y se le hizo un aumento del " + aumentoIngresado +" porciento" + " ya que su importe era " +importe);
}
