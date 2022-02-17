/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombreIngresado;
	let edadIngresada;

    
    // Aca lo que se hace es crear un alert en base a los datos recolectados 
	
	nombreIngresado=document.getElementById("txtIdNombre").value;
	edadIngresada=document.getElementById("txtIdEdad").value;
	alert("Su nombre es "+ nombreIngresado + " y tiene "+ edadIngresada+" años " )
}

