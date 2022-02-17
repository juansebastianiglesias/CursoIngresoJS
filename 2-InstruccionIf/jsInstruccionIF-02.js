function mostrar()
{

    let edadIngresada;
	
	edadIngresada= document.getElementById("txtIdEdad").value;
	edadIngresada= parseInt(edadIngresada);

	// "> 17" seria un codigo mas OPTIMO ya que el codigo pregunta dos veces 
    if(edadIngresada >= 18) 
	{
       alert("ok");
	}

}
//FIN DE LA FUNCIÓN
/*
  operadores aritmeticos 
  Menos que: a < b
  Menor o igual que: a <= b
  Mayor que: a > b
  Mayor o igual que: a >= b
  Igual a: a == b
  No igual a: a != b
*/