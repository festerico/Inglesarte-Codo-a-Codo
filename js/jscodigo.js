//alert("Hola buenas, es un gusto para InglesArte tenerte por aqui, en la siguiente ventana te pediremos tu nombre y apellido para poder dirigirnos a ti.");

alert(window.location.href.indexOf("index.html"))

if(window.location.href.indexOf("index.html") > 1) {
	let nombre= prompt("Por favor indicanos tu nombre y apellido:");
};

document.write(document.getElementById('nombreDelVisitante').innerhtml = " Hola buenos dias  " + nombre + " te invitamos a recorrer nuestra pagina");



function ocultar(bOportunidades){
	document.getElementById("demo").innerHTML = "PARA TENER MAS OPORTUNIDADES EN LA VIDA!"
    document.getElementById(bOportunidades).style.display = "none";
    document.getElementById("animacion").innerHTML="<h1 class=\"animate__animated animate__bounceInDown\">¡Comenza con nosotros!</h1>";

}