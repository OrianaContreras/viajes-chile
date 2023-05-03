const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(function () {
    $('[data-bs-toggle="tooltip"]').tooltip()
})

$(document).ready(function() {

    $('#enviarFormulario').click(function() {
        alert('El mensaje fue enviado correctamente...');
    });

    $('.card-title').click(function() {
    $(this).siblings('.card-text').toggle("slow");
    });  
});

$(document).scroll(function () {
    var $nav = $(".sticky-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
});