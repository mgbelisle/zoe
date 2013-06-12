// Sets up the navigation tabs
$(function () {
    if (window.location.hash) {
	var href = window.location.hash;
    } else {
	var href = '#';
    }
    $('ul.nav a[href="' + href + '"]').tab('show');
})

$('ul.nav a').click(function (e) {
    $(this).tab('show');
    return true;
})
