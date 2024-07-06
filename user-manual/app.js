indexingToggle = function() {
    var indx = document.getElementById('indexing');
    if (indx.classList.contains('indexing-hidden')) {
        indx.classList.remove('indexing-hidden');
    } else {
        indx.classList.add('indexing-hidden');
    }
}
