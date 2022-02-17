/*
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, 
se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/ 

function mostrar()
{
	let destino;
	let estacion;
	let mensaje;
	let precio;
	let porcentaje1;//10
	let porcentaje2;//20


	destino= document.getElementById("txtIdDestino").value;
	estacion= document.getElementById("txtIdEstacion").value;

	precio= 15000;

	porcentaje1= precio * 10/100;
	porcentaje2= precio *  20/100;

	switch(estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					mensaje= "El precio es de " + (precio + porcentaje2);
				break;
				case "Cataratas":
				case "Cordoba":
					mensaje="El precio es de " + (precio - porcentaje1);
				break;
				case "Mar del plata":
					mensaje="El precio es de " + (precio - porcentaje2);
				break;
			}
			break;
		case "Verano":
			switch(destino)
			{
				case "Bariloche":
					mensaje="El precio es de " + (precio - porcentaje2);
				break;
				case "Cataratas":
				case "Cordoba":
					mensaje="El precio es de " + (precio + porcentaje1);
				break;
				case "Mar del plata":
					mensaje="El precio es de " + (precio + porcentaje2);
				break;
			}
			break;
		case "Otoño":
		case "Primavera":
			switch(destino)
			{
				case "Bariloche":
				case "Mar del plata":
				case "Cataratas":
					mensaje="El precio es de " + (precio + porcentaje1);
				break;

				case "Cordoba":
					mensaje="El precio es de " + precio;
				break;
			}
			break;

	}

	{
		alert(mensaje);
	}

}

//FIN DE LA FUNCIÓN
