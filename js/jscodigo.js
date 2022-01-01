

if(window.location.href.indexOf("index.html")> 1) {
	let nombre= prompt("Por favor indicanos tu nombre y apellido:")

document.write(document.getElementById("nombreDelVisitante").innerHTML =" Hola buenos dias  " + nombre + " te invitamos a recorrer nuestra pagina")

};

function ocultar(bOportunidades){
	document.getElementById("demo").innerHTML = "PARA TENER MAS OPORTUNIDADES EN LA VIDA!"
    document.getElementById(bOportunidades).style.display = "none";
    document.getElementById("animacion").innerHTML="<h1 class=\"animate__animated animate__bounceInDown\">¡Comenza con nosotros!</h1>";
    [0].style.fontSize = "6vw";
}