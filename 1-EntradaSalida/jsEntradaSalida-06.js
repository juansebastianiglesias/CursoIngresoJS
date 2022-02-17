/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numeroIngresado1;
    let numeroIngresado2;
    let Resultado;

    numeroIngresado1 =(document.getElementById("txtIdNumeroUno").value);
    numeroIngresado2 =(document.getElementById("txtIdNumeroDos").value);

    //convierto al numero ingresado a numero para que puedan ser sumados
    numeroIngresado1 =parseInt(numeroIngresado1);
    numeroIngresado2 =parseInt(numeroIngresado2);

    Resultado = numeroIngresado1 + numeroIngresado2 ;

    alert("El resultado es  " + Resultado);
}
