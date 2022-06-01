$(document).ready(function() {
   $('#carrito').on('mouseover',function(){
        $('#carrito').attr('src','assets/img/gato-carrito.png').prop('alt','Gatito Dentro del carrito')
        $('#carrito').removeClass('carrito').addClass('carrito-large')  
   });

    $('#carrito').on('mouseout',function(){
        $('#carrito').attr('src','assets/img/gatito-carrito.png').prop('alt','Gatito fuera del carrito')
        $('#carrito').removeClass('carrito-large').addClass('carrito')
    });

    $('#cuadritos00').on('mouseover',function(){
        $('#links00').addClass('text-info negrita fs-5').removeClass('text-dark')
        $('#fotos_00').removeClass('card-img-top').addClass('imagen-circular-card')
    });
    $('#cuadritos00').on('mouseout',function(){
        $('#links00').addClass('text-dark').removeClass('text-info negrita fs-5')
        $('#fotos_00').removeClass('imagen-circular-card').addClass('card-img-top')
    });

    $('#cuadritos01').on('mouseover',function(){
        $('#links01').addClass('text-info negrita fs-5').removeClass('text-dark')
        $('#fotos_01').removeClass('card-img-top').addClass('imagen-circular-card')
    });
    $('#cuadritos01').on('mouseout',function(){
        $('#links01').addClass('text-dark').removeClass('text-info negrita fs-5')
        $('#fotos_01').removeClass('imagen-circular-card').addClass('card-img-top')
    });

    $('#cuadritos02').on('mouseover',function(){
        $('#links02').addClass('text-info negrita fs-5').removeClass('text-dark')
        $('#fotos_02').removeClass('card-img-top').addClass('imagen-circular-card')
    });
    $('#cuadritos02').on('mouseout',function(){
        $('#links02').addClass('text-dark').removeClass('text-info negrita fs-5')
        $('#fotos_02').removeClass('imagen-circular-card').addClass('card-img-top')
    });

    $('#cuadritos03').on('mouseover',function(){
        $('#links03').addClass('text-info negrita fs-5').removeClass('text-dark')
        $('#fotos_03').removeClass('card-img-top').addClass('imagen-circular-card')
    });
    $('#cuadritos03').on('mouseout',function(){
        $('#links03').addClass('text-dark').removeClass('text-info negrita fs-5')
        $('#fotos_03').removeClass('imagen-circular-card').addClass('card-img-top')
    });
});