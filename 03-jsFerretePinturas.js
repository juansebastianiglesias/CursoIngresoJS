/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let centigrados;
    let fahrenheit;

    centigrados= document.getElementById("txtIdTemperatura").value;
    centigrados= parseFloat(centigrados);

    fahrenheit= document.getElementById("txtIdTemperatura").value;
    fahrenheit= parseFloat(fahrenheit);

    centigrados= (fahrenheit - 32) * 5/9;

    alert("son " + centigrados + " grados centigrados");
  
}

function CentigradosFahrenheit () 
{
	let centigrados;
    let fahrenheit;

    centigrados= document.getElementById("txtIdTemperatura").value;
    centigrados= parseInt(centigrados);

    fahrenheit= document.getElementById("txtIdTemperatura").value;
    fahrenheit= parseInt(fahrenheit);

    fahrenheit = centigrados * 1.8000 +32 ;

    alert("son " + fahrenheit + " grados fahrenheit");
}
