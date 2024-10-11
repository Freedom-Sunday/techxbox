$(document).ready(function () {
    $('ul').css('display', 'none');

    $('#hamburger').click(function (e) { 
        e.preventDefault();
        
        $('ul').slideToggle();

        $('#hamburger').hide();
        $('#xmark').show();
    });

    $('#xmark').click(function (e) { 
        e.preventDefault();
        
        $('ul').slideToggle();

        $('#xmark').hide();
        $('#hamburger').show();
    });


});