/*

Al ingresar una edad solo debemos informar si la persona NO es adolescente.*/

function mostrar()
{
	edadIngresada= document.getElementById("txtIdEdad").value;
	edadIngresada= parseInt(edadIngresada);
	
	//if(!(edadIngresada <=13 || edadIngresada >=17))
	if(edadIngresada >=13 || edadIngresada <=17)
	{
		
	}
	else
	{
		alert("Usted NO es adolescente")
	}
    
	
}
/*FIN DE LA FUNCIÓN
 OPERADORES LOGICOS 
   &&= "y"
   ||= "o"
  

   
*/