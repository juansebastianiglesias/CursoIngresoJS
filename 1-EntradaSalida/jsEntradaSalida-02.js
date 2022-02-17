/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	// aca defino la variable nombreIngresado y le doy un valor
	//significado: https://www.w3schools.com/jsref/met_win_prompt.asp
	let nombreIngresado = prompt("Por favor ingrese su nombre", "Juan Sebastian");

	//alert("su nombre es");
	//alert(nombreIngresado);

	alert (" Su nombre es " + nombreIngresado)
	//alert("ok");
}

