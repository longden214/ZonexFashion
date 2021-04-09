
    $('.banner-carousel').owlCarousel({
        items: 1,
        lazyLoad: true,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 600,
    });


    $('.owl-icon-contact').owlCarousel({
        margin:10,
        nav:true,
        dots:0,
        nav:0,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            991:{
                items:3
            }
        }
    })

    $('.carousel-pro-quick').owlCarousel({
        nav:false,
        responsive:{
            0:{
                items:1
            },
        }
    })


    $('.add').click(function () {		
        var th = $(this).closest('.wrap').find('.count');    	
        th.val(+th.val() + 1);
      });
      $('.sub').click(function () {
        var th = $(this).closest('.wrap').find('.count');    	
              if (th.val() > 1) th.val(+th.val() - 1);
      });


      $('.owl-featured-about').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            991:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

    function openCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }
    
    // Get the element with id="defaultOpen" and click on it
    var value4 = document.getElementById("defaultOpen");

    if (value4) {
        value4.click();
    }
    

    $('.owl-relate-pro').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            360:{
                items:2
            },
            991:{
                items:3
            },
            1200:{
                items:4
            }
        }
    })
