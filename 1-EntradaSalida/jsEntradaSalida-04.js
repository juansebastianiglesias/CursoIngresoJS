/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//Aca le doy a la variable un nombre
	let nombreIngresado;
	//aca le digo que quiero que el prompt diga Ingresa tu Nombre
    nombreIngresado=prompt("Ingresa tu Nombre");
	/* y aca le digo que vaya al html (document) que lo busque por el id, 
	luego, que de ese id tome su valor (value) y que en ese valor ponga Su nombre es sumado de la variable 

	(Dejar espacio entes de las)
	*/
    document.getElementById("txtIdNombre").value="Su Nombre es "+ nombreIngresado;

}

