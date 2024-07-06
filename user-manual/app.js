indexingToggle = function() {
    var indx = document.getElementById('indexing');
    if (indx.classList.contains('indexing-hidden')) {
        indx.classList.remove('indexing-hidden');
    } else {
        indx.classList.add('indexing-hidden');
    }
}

init = function() {
    window.addEventListener('scroll', function () {
        var navbar = document.getElementById('navbar');
        if (window.scrollY > 0) {
            navbar.classList.add('border-b');
        } else {
            navbar.classList.remove('border-b');
        }
    });
}
