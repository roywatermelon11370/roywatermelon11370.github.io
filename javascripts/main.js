$(document).ready(function () {
  // navbar
  $(window).on('scroll', function () {
    var winddd=$(window).scrollTop();
    if(winddd) {
      $('.navbar').toggleClass('border-b').toggleClass('border-gray-200');
    } else {
      $('.navbar').toggleClass('border-b').toggleClass('border-gray-200');
    }
  });

  // backtotop
  $('#backToTop').click(function (e) {
    e.preventDefault();
    $('html,body').stop().animate({
      scrollTop: 0
    }, 300, 'swing')
  });

  // sidebar 
  sidebarToggle = function () {
    $('#sidebar').toggleClass('sidebar-active').toggleClass('sidebar-hide');
    $('#bg-dark').toggleClass('hidden').toggleClass('block');
  }

  $('#bg-dark').click(function () {
    sidebarToggle();
  });

});