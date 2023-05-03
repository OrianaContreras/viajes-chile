const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(function () {
    $('[data-bs-toggle="tooltip"]').tooltip()
})

$(document).ready(function() {
    $('#enviarCorreo').click(function() {
        alert('El correo fue enviado correctamente...');
    });

    $('h3').on('dblclick', function() {
        if ($(this).text() === 'INGREDIENTES' || $(this).text() === 'PREPARACIÓN') {
            $(this).css('color', 'red');
        }
    });

    $('.card-title').click(function() {
    $(this).siblings('.card-text').toggle("slow");
    });  
});  