/*
Al selecionar un destino , indicar el punto cardinal de nuestro 
pais en donde se encuentra Norte, Sur, Este u Oeste
 */

function mostrar()
{
	let destino;
	let mensaje;

	destino= document.getElementById("txtIdDestino").value;

	switch(destino)
	{
		case"Bariloche":
			mensaje=("Tu destino se encuentra al sur")
		break;
		case"Cataratas":
			mensaje=("Tu destino se encuentra al norte")
		break;
		case"Mar del plata":
			mensaje=("Tu destino se encuentra al este")
		break;
		case"Ushuaia":
			mensaje=("Tu destino se encuentra al sur")
		break;
	}

	{
		alert(mensaje);
	}
}

//FIN DE LA FUNCIÓN