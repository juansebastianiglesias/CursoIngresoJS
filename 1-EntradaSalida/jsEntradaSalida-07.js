/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numeroIngresado1;
    let numeroIngresado2;
    let numeroFinal;

    numeroIngresado1 = parseInt (document.getElementById("txtIdNumeroUno").value);
    numeroIngresado2 = parseInt (document.getElementById("txtIdNumeroDos").value);

    numeroFinal = numeroIngresado1 + numeroIngresado2 ;

    alert("la suma es  " + numeroFinal);	
}

function restar()
{
	let numeroIngresado1;
    let numeroIngresado2;
    let numeroFinal;

    numeroIngresado1 = parseInt (document.getElementById("txtIdNumeroUno").value);
    numeroIngresado2 = parseInt (document.getElementById("txtIdNumeroDos").value);

    numeroFinal = numeroIngresado1 - numeroIngresado2 ;

    alert("la resta es  " + numeroFinal);
}

function multiplicar()
{ 
	let numeroIngresado1;
    let numeroIngresado2;
    let numeroFinal;

    numeroIngresado1 = parseInt (document.getElementById("txtIdNumeroUno").value);
    numeroIngresado2 = parseInt (document.getElementById("txtIdNumeroDos").value);

    numeroFinal = numeroIngresado1 * numeroIngresado2 ;

    alert("la multiplicación es  " + numeroFinal);
}

function dividir()
{
	let numeroIngresado1;
    let numeroIngresado2;
    let numeroFinal;

    numeroIngresado1 = parseInt (document.getElementById("txtIdNumeroUno").value);
    numeroIngresado2 = parseInt (document.getElementById("txtIdNumeroDos").value);

    numeroFinal = numeroIngresado1 / numeroIngresado2 ;

    alert("la divsión es  " + numeroFinal);
}

