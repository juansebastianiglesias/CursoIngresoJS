/*al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.*/

function mostrar()
{
	let mensaje;

	mesDelAño= document.getElementById("txtIdMes").value;

	switch(mesDelAño)
{
		case "Julio":
		case "Agosto":
			mensaje=("Abrigate que hace frio.")
		break;
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "junio":
			mensaje=("Falta para el invierno.")
		break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			mensaje=("Ya pasamos el frio, ahora calor!!!.")
		break;
	
}

{
	alert(mensaje);
}

}//FIN DE LA FUNCIÓN