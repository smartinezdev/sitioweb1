/*Inicio del evento para navegar en el sitio web*/
$('a.ev-js1[href*="#"]').on('click', function (e) {
    $('html,body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 100
    }, 500);
    e.preventDefault();
});

/*Fin del evento para navegar en el sitio web*/

/*Inicio del evento para ir a la parte superior del sitio web dando click al logo*/
$('.logo').on('click', () => {
    $('html,body').animate({
        scrollTop: 0
    }, 500);
});

/*Fin del evento para ir a la parte superior del sitio web dando click al logo*/

/*Inicio del evento para cerrar el menú de navegación*/
$('.ev-js2').click(function () {
    $('.navbar-collapse').collapse('hide');
});

/*Fin del evento para cerrar el menú de navegación*/

/*Inicio de las animaciones de la libreria ScrollReveal*/
window.sr = ScrollReveal();

sr.reveal('.logo', {
    distance: 0,
    duration: 1500,
    scale: 1
}, 500);

sr.reveal('.etiqueta-h1', {
    distance: 0,
    duration: 4500,
    scale: 1
}, 500);

sr.reveal('.hotel', {
    distance: '20px',
    duration: 3000,
    origin: 'top'
});

sr.reveal('.card, .lista, .mapa', {
    delay: 200,
    distance: '20px',
    duration: 3000,
    interval: 400,
    origin: 'top'
});

/*Fin de las animaciones de la libreria ScrollReveal*/