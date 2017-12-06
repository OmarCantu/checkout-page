$(document).ready(function () {
    $('.metodo').click(function () {
        $('.metodo').removeClass('seleccionado');
        $(this).addClass('seleccionado');

        if ($(this).hasClass('credito')) {
            //$(this).closest('.metodo-pago').addClass('credito-seleccionado');
            $('.detalles-tarjeta').stop( true, true ).fadeIn();
        } else {
            //$(this).closest('.metodo-pago').removeClass('credito-seleccionado');
            $('.detalles-tarjeta').stop( true, true ).fadeOut();
        }
    });

    $('#numero').focusout(function () {
        var numero = $(this).val();
        if (numero[0] === '5' && numero.length == 16) {
            $('.tipo-tarjeta').removeClass('visa');
            $('.tipo-tarjeta').removeClass('amex');
            $('.tipo-tarjeta').addClass('mastercard');
        } else if (numero[0] === '4' && numero.length == 16) {
            $('.tipo-tarjeta').removeClass('mastercard');
            $('.tipo-tarjeta').removeClass('amex');
            $('.tipo-tarjeta').addClass('visa');
        } else if (numero[0] === '3' && numero.length == 16) {
            $('.tipo-tarjeta').removeClass('mastercard');
            $('.tipo-tarjeta').removeClass('visa');
            $('.tipo-tarjeta').addClass('amex');
        }
        else {
            $('.tipo-tarjeta').removeClass('mastercard');
            $('.tipo-tarjeta').removeClass('visa');
            $('.tipo-tarjeta').removeClass('amex');
        }
    });
});

function validar () {
    var valida = true;
    var error = '<div>Por favor, corrige los siguientes campos: </div>';

    var numero = $('#numero').val();
    var expiracion_mes = $('#expiracion-mes').val();
    var expiracion_anio = $('#expiracion-anio').val();
    var cvv = $('#cvv').val();

    var regex_num = /^[0-9]+$/;

    if (numero.length != 16 || !numero.match(regex_num)) {
        error += '<div>- N&uacute;m. tarjeta</div>';
        valida = false;
    }
    if (expiracion_mes.length != 2 || !expiracion_mes.match(regex_num)
        || parseInt(expiracion_mes) < 1 || parseInt(expiracion_mes) > 12) {
        error += '<div>- Mes expiraci&oacute;n</div>';
        valida = false;
    }
    if (expiracion_anio.length != 2 || !expiracion_anio.match(regex_num)
        || parseInt(expiracion_anio) < 17) {
        error += '<div>- A&ntilde;o expiraci&oacute;n</div>';
        valida = false;
    }
    if (cvv.length != 3 || !cvv.match(regex_num)) {
        error += '<div>- CVV<div>';
        valida = false;
    }

    if (!valida) {
        $('.error').html(error);
        $('.error').stop( true, true ).fadeIn();
    } else {
        $('.error').stop( true, true ).fadeOut();
    }

    return valida;
}
