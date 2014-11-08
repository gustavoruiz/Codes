function aleatorio(minimo, maximo)
{
	var numero = Math.floor( Math.random() * (maximo - minimo +1) + minimo)
return numero;
}


var piedra = 0;
var papel = 1;
var tijera =  2;
var lagarto = 3;
var spock = 4;

var opciones = ["piedra", "papel", "tijera", "lagarto"; "spock"];

var opcionusuario;
var opcionmaquina = aleatorio(0,4);

opcionusuario = prompt("Qué eliges?\n Piedra: 0\n Papel: 1 \n Tijera: 2 \n lagarto: 3 \n spock: 4", 0);

alert("Elegiste " + opciones[opcionusuario]);

alert("La máquina eligió  " + opciones[opcionmaquina]);



if(opcionusuario == piedra)
{

	if(opcionmaquina == piedra)
	{
		alert("Empate!");
	}
	else if(opcionmaquina == papel)
	{
		alert("Perdiste!");
	}
	else if(opcionmaquina == tijera)
	{
		alert("Ganaste!");
	}
	else if(opcionmaquina == lagarto)
	{
		alert("Ganaste!");
	}
	else if(opcionmaquina == spock)
	{
		alert("Perdiste!");
	}
}
else if (opcionusuario == papel)
{
	

	if(opcionmaquina == piedra)
	{
		alert("Ganaste!");
	}
	else if(opcionmaquina == papel)
	{
		alert("Empate!");
	}
	else if(opcionmaquina == tijera)
	{
		alert("Perdiste!");
	}
	else if(opcionmaquina ==lagarto)
	{
		alert("Ganaste!");
	}
	else if(opcionmaquina == spock)
	{
		alert("Perdiste!");
	}

}
else if (opcionusuario == tijera)
{


	if(opcionmaquina == piedra)
	{
		alert("Perdiste!");
	}
	else if(opcionmaquina == papel)
	{
		alert("Ganaste!");
	}
	else if(opcionmaquina == tijera)
	{
		alert("Empate!");
	}
	else if (opcionmaquina == lagarto)
	{
		alert("Ganaste!");
	}
	else if (opcionmaquina == spock)
	{
		alert("Perdiste!");
	}

else if (opcionusuario == lagarto)
{

    if(opcionmaquina == piedra)
	{
		alert("Perdiste!");
	}
	else if(opcionmaquina == papel)
	{
		alert("Ganaste!");
	}
	else if(opcionmaquina == tijera)
	{
		alert("Empate!");
	}
	else if(opcionmaquina == lagarto)
	{
		alert("Empate!");
	}
	else if(opcionmaquina == spock)
	{
		alert("Ganaste!");
	}

else if (opcionusuario == spock)
{


	if(opcionmaquina == piedra)
	{
		alert("Perdiste!");
	}
	else if(opcionmaquina == papel)
	{
		alert("Ganaste!");
	}
	else if(opcionmaquina == tijera)
	{
		alert("Empate!");
	}
	else if(opcionmaquina == lagarto)
	{
		alert("Perdiste!");
	}
	else if(opcionmaquina == spock)
	{
		alert("Empate!")
	}
}
else
{
	alert("No elegiste ningún número correcto!");
}
