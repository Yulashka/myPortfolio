$(function () { 	
    $('#site-nav li a').click(function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
		event.preventDefault();
    });

    // add nav active class on scroll
    var sections = $('section'),
        nav = $('nav'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

	$('.chart').easyPieChart({
			//your configuration goes here
			barColor: '#1eefe8',
			size: 210,
			trackColor: '#11161b',
			scaleColor: '#11161b',
		});
    $('.animate').addClass("fade");

    var aniFunc = function () {
        $(this).toggleClass($(this).data('animated'));
    };

    //Animate from top
    $('.animate').waypoint(
        aniFunc, {
            offset: '80%',
            triggerOnce: true
        }
    );

	var offset = 220;
    var duration = 500;
    $(window).scroll(function () {
        if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(duration);
        } else {
            $('.back-to-top').fadeOut(duration);
        }
    });
    $('.back-to-top').click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, duration);
        return false;
    })

     //callback handler for form submit
    $("#contact-form").submit(function(e)
    {
        $("#contactProgress").modal("show")

        var data = $("#contact-form").serialize();
    
        $.ajax(
        {
            type: "POST",
            url: "email.php",
            data: data
        }).done(function( msg ) {
            $("#contactProgress").modal("hide")
            $("#contactSuccess").modal("show")
            $('#contact-form')[0].reset();
        }).fail(function( jqXHR, textStatus ) {
            $("#contactProgress").modal("hide")
            $("#contactFail").modal("show")
            $('#contact-form')[0].reset();
            console.log(jqXHR.status) 
        });
        e.preventDefault(); //STOP default action
        return true;
    });

});
