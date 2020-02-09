$(document).ready(function () {
    $('#content,#nav,#breadcrumb').ajaxify();

    $(window).on("pronto.request", function() {
        $('#loading').css('display','flex');
    });

    $(window).on("pronto.render", function() {
        $('#loading').css('display','none');
    });
    
});


