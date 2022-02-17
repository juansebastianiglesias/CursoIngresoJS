function mostrar()
{

	let edadIngresa;

	edadIngresa= document.getElementById("txtIdEdad").value;
    edadIngresa= parseInt(edadIngresa);

    // el doble igual "==" es una comparacion y el igual solo "=" asigna
	// en caso de letras las mayusculas importan
	// los "if" NO llevan punto y coma al final 
	if(edadIngresa == 15) 
    { 

	  alert("niña bonita"); 

    }
	
}
//FIN DE LA FUNCIÓN
/*
  Menos que: a < b
  Menor o igual que: a <= b
  Mayor que: a > b
  Mayor o igual que: a >= b
  Igual a a == b
  No igual a: a != b
*/