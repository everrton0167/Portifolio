// ANIMACAO COM JQUEJY

//Debounce do Lodash -- FUNCAO PARA EVITA A QUANTIDADE DE VEZES DA ATIVACAO DA FUNCAO ANIMESCROLL
debounce = function(func, wait, immediate){
	var timeout;
	return function(){
		var context = this, args = arguments;
		var later = function(){
			timeout = null;
			if(!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if(callNow) func.apply(context, args);
	};
};

/*INSOLANDO O CODIGO PARA EVITAR INTERFERENCIA COM OUTRAS FUNCOES*/
(function(){
var $target = $('.anime'), 
	animationClass = 'anime-start', offset = $(window).height() * 3/4;
	
/*ANIMANDO PARAGRAFO*/
var $targetP = $('.texto'), 
	animationClassP = 'animated pulse', offset = $(window).height() * 3/4;

/*ANIMACAO DA AREA DE HABILIDADE*/

var $targetI = $('#idiomas'), 
	animationClassI = 'animated zoomInLeft', offset = $(window).height() * 3/4;

var $targetC = $('#conhecimento'), 
	animationClassC = 'animated zoomInDown', offset = $(window).height() * 3/4;

var $targetF = $('#familiaridade'), 
	animationClassF = 'animated zoomInUp', offset = $(window).height() * 3/4;



function animeScroll(){
	var documentTop = $(document).scrollTop();
	
	$target.each(function(){
		var itemTop = $(this).offset().top;
		if(documentTop > itemTop -offset){
			$(this).addClass(animationClass);
		
		}else{
			$(this).removeClass(animationClass);

		}

	});
	$targetP.each(function(){
		var itemTop = $(this).offset().top;
		if(documentTop > itemTop -offset){
			$(this).addClass(animationClassP);
		
		}else{
			$(this).removeClass(animationClassP);

		}

	});
	/*ANIMACAO DA AREA DE HABILIDADE - IDIOMAS*/
	$targetI.each(function(){
		var itemTop = $(this).offset().top;
		if(documentTop > itemTop -offset){
			$(this).addClass(animationClassI);
		
		}else{
			$(this).removeClass(animationClassI);

		}

	});
	/*ANIMACAO DA AREA DE HABILIDADE - CONHECIMENTO*/
	$targetC.each(function(){
		var itemTop = $(this).offset().top;
		if(documentTop > itemTop -offset){
			$(this).addClass(animationClassC);
		
		}else{
			$(this).removeClass(animationClassC);

		}

	});
	/*ANIMACAO DA AREA DE HABILIDADE - FAMILIARIDADE*/
	$targetF.each(function(){
		var itemTop = $(this).offset().top;
		if(documentTop > itemTop -offset){
			$(this).addClass(animationClassF);
		
		}else{
			$(this).removeClass(animationClassF);

		}

	});

}

animeScroll();



$(document).scroll(debounce(function(){
	
	animeScroll();
}, 200));
}());


/*ANIMACAO DE TEXTOS*/
(function(){
function typeWriter(elemento){
	const textoArray = elemento.innerHTML.split('');
	elemento.innerHTML = "";
	textoArray.forEach((letra, i) => {
		setTimeout(() => elemento.innerHTML += letra, 75 * i);
	});
}
const titulo = document.querySelector('#apresentar');
typeWriter(titulo);
}());




/*-------------------FIM DE ANIMACAO-------------------*/

/* CONFIGURACAO O SCROLL PARA DIRECIONAR PARA PARTE EXATA */
(function(){
const menuItems = document.querySelectorAll('.navbar-nav a, .btn');

menuItems.forEach(item =>{
	item.addEventListener('click', scrollToIdOnClick);
})


function getScrollTopByHref(element){
	const id = element.getAttribute('href');
	return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event){
	event.preventDefault();
	const to = getScrollTopByHref(event.target) - 95;
	console.log(to);

	scrollToPosition(to);
}

function scrollToPosition(to){
	/*window.scroll({
		top: to,
		behavior: "smooth",
	});*/

	smoothScrollTo(0, to);
}
}());

// Caso deseje suporte a browsers antigos / que não suportam scroll smooth nativo
/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int) endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};
/*-------------------FIM DE CONFIGURACAO DE LINKS INTERNOS-------------------*/

/*wow.js*/


$(function() {
  $(window).on("scroll", function() {
    if($(window).scrollTop() > 100) {
      $("nav").addClass("bg-primary");
    } else {
      $("nav").removeClass("bg-primary");
    }
  });
});




   
$(document).ready(function(){
  $("button").click(function(){
    if($(window).scrollTop() < 100) {
    	$("nav").toggleClass("bg-primary");
    }

  });
});
   
