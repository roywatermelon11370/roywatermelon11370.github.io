$(document).ready(function () {
    $('#content,#nav,#breadcrumb').ajaxify();

    $(window).on("pronto.request", function () {
        $('#loading').css('display', 'flex');
    });

    $(window).on("pronto.render", function () {
        $('#loading').css('display', 'none');
    });

    chbg = function () {
        $('#content').addClass('bg-beer');
        $('li,h5,h6').text('7122');
        $('.btn-transparent').remove();
        $('#egg').load('egg.html');
    }

    $('#submit').on('click',function() {
        var val = $('#number').val();
        if(val == '99747') {
            $('#number').addClass('is-valid').removeClass('is-invalid');
            $('#msg').text('其實你就算答對了有不會怎樣。');
        } else {
            $('#number').addClass('is-invalid');
            $('#msg').text('');
        }
    });

});


