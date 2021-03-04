// ANIMACION DE TEXTO E IMAGENES
let animado = document.querySelectorAll(".animado")

window.addEventListener("scroll", function(){
	let desplazamiento = document.documentElement.scrollTop;
	for(i = 0; i < animado.length; i++){
		let distancia = animado[i].offsetTop;
		if(distancia - 500 < desplazamiento){
			animado[i].style.opacity = 1
			animado[i].classList.add("mostrarArriba")
		}
	}
})

// EVENTO APAREVER MENU
let boton = document.querySelector('.botonMenu');
let menu = document.querySelector('.menu');
const items = document.querySelectorAll('.item');
boton.addEventListener('click', function(){
    this.classList.toggle('cerrar');
    menu.classList.toggle('menuMostrar');
    items.forEach(item => {
		item.addEventListener('click', function(){
			menu.classList.remove('menuMostrar');
			boton.classList.remove('cerrar')
		})
	})
})