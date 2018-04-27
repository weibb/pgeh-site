$(window).scroll(
    {
        previousTop: 0
    },
    function () {
    var currentTop = $( window ).scrollTop();
    if ( currentTop < this.previousTop ) {
        $( "#menu" ).fadeIn( 200 );
    }
    else {
        $( "#menu" ).fadeOut( 400 );
    }
    this.previousTop = currentTop;
    });

$(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
