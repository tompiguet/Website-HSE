$(document).ready(function () {

    // clic sur les boutons
    $('.btn').on('click', function (event) {
        event.stopPropagation(); // important
        $("#box-1").slideToggle(); // on ouvre ou ferme celle concernée
    });
    /* clic en dehors des div
    $(window).on('click', function () {
        $(".box").slideUp(); // on ferme
    });*/

});