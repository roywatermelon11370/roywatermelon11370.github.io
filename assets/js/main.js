$(document).ready(function () {
    jQuery('#content,#nav,#breadcrumb').ajaxify();
    // // var nowGet = location.search;
    // // if (nowGet === '?example2.html') {
    // //     $("#content").load('example2.html');
    // //     $('#breadChild').text('example2.html');
    // // }

    // // if (nowGet === '?example3.html') {
    // //     $("#content").load('example3.html');
    // //     $('#breadChild').text('example3.html');
    // // }

    // // if (nowGet === '?example4.html') {
    // //     $("#content").load('example4.html');
    // //     $('#breadChild').text('example4.html');
    // // }

    // // if (nowGet === '?help.html') {
    // //     $("#content").load('help.html');
    // //     $('#breadChild').text('help.html');
    // // }

    // // if (nowGet === '?') {
    // //     $("#content").load('filelist.html');
    // // }


    

    // // $("#filelist > a").click(function (event) {
    // //     event.preventDefault();
    // //     var tet = $(this).attr('value');
    // //     $('#home').attr('href', 'filelist.html');
    // //     $('#breadChild').text(tet);
    // //     $("#content").load(tet);
    // //     history.pushState({ page: 1 }, "title 1", this.href);
    // // });

    // // $("#home").click(function (event) {
    // //     var home = $('#home').attr('href');
    // //     if (typeof home !== typeof undefined && home !== false) {
    // //         event.preventDefault();
    // //         $('#breadChild').text('');
    // //         $("#content").load('filelist.html');
    // //         $('#home').removeAttr('href');
    // //         history.replaceState({ page: 2 }, "title 2", "?");
    // //     }
    // });

    // window.onpopstate = function (event) {
    //     var nowGet = location.search;
    //     if (nowGet === '?example2.html') {
    //         $("#content").load('example2.html');
    //     }

    //     if (nowGet === '?example3.html') {
    //         $("#content").load('example3.html');
    //     }

    //     if (nowGet === '?example4.html') {
    //         $("#content").load('example4.html');
    //     }

    //     if (nowGet === '?help.html') {
    //         $("#content").load('help.html');
    //     }

    //     if (typeof nowGet === typeof undefined || nowGet === false || nowGet === '' || nowGet === '?') {
    //         $("#content").load('filelist.html');
    //     }
    // });
});


