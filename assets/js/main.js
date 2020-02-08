$(document).ready(function () {
    $("#filelist > a").click(function (event) {
        event.preventDefault();
        var tet = $(this).attr('value');
        $('#home').attr('href', 'filelist.html');
        $('#breadChild').text(tet);
        $("#content").load(this.href);
    });

    $("#home").click(function (event) {
        var home = $('#home').attr('href');
        if (typeof home !== typeof undefined && home !== false) {
            event.preventDefault();
            $('#breadChild').text('');
            $("#content").load(this.href);
            $('#home').removeAttr('href');
        }
    });
});


