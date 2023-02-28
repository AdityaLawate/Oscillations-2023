/*---------------------------------------------------------------------------------
/*
/* Main JS
/*
-----------------------------------------------------------------------------------*/  







$(function() {

	var $window           = $(window),
		win_height_padded = $window.height() * 1.1,
		isTouch           = Modernizr.touch;
  
	if (isTouch) { $('.revealOnScroll').addClass('animated'); }
  
	$window.on('scroll', revealOnScroll);
  
	function revealOnScroll() {
	  var scrolled = $window.scrollTop(),
		  win_height_padded = $window.height() * 1.1;
  
	  // Showed...
	  $(".revealOnScroll:not(.animated)").each(function () {
		var $this     = $(this),
			offsetTop = $this.offset().top;
  
		if (scrolled + win_height_padded > offsetTop) {
		  if ($this.data('timeout')) {
			window.setTimeout(function(){
			  $this.addClass('animated ' + $this.data('animation'));
			}, parseInt($this.data('timeout'),10));
		  } else {
			$this.addClass('animated ' + $this.data('animation'));
		  }
		}
	  });
	  // Hidden...
	 $(".revealOnScroll.animated").each(function (index) {
		var $this     = $(this),
			offsetTop = $this.offset().top;
		if (scrolled + win_height_padded < offsetTop) {
		  $(this).removeClass('animated fadeInUp flipInX lightSpeedIn')
		}
	  });
	}
  
	revealOnScroll();
  });


























(function($) {

	$('#contact1').hide();
	"use strict";

	/*---------------------------------------------------- */
	/* Preloader
	------------------------------------------------------ */ 
   $(window).load(function() {

      // will first fade out the loading animation 
    	$("#loader").fadeOut("slow", function(){

        // will fade out the whole DIV that covers the website.
        $("#preloader").delay(300).fadeOut("slow");

      });       

  	})


  	/*----------------------------------------------------*/
  	/* Flexslider
  	/*----------------------------------------------------*/
  	$(window).load(function() {

	  	$('#hero-slider').flexslider({
	   	namespace: "flex-",
	      controlsContainer: ".hero-container",
	      animation: 'fade',
	      controlNav: true,
	      directionNav: false,
	      smoothHeight: true,
	      slideshowSpeed: 7000,
	      animationSpeed: 600,
	      randomize: false,
	      before: function(slider){
			   $(slider).find(".animated").each(function(){
			   	$(this).removeAttr("class");
			  	});			  	
			},
			start: function(slider){
			   $(slider).find(".flex-active-slide")
			           	.find("h1").addClass("animated fadeInDown show")
			           	.next().addClass("animated fadeInUp show");
			           		
			   $(window).trigger('resize');		  			 
			},
			after: function(slider){
			 	$(slider).find(".flex-active-slide")
			           	.find("h1").addClass("animated fadeInDown show")
			           	.next().addClass("animated fadeInUp show");			  
			}
	   });

	   $('#testimonial-slider').flexslider({
	   	namespace: "flex-",
	      controlsContainer: "",
	      animation: 'slide',
	      controlNav: true,
	      directionNav: false,
	      smoothHeight: true,
	      slideshowSpeed: 7000,
	      animationSpeed: 600,
	      randomize: false,
	   });

   });












   /*----------------------------------------------------*/
	/* Adjust Primary Navigation Background Opacity
	------------------------------------------------------*/
   $(window).on('scroll', function() {

		var h = $('header').height();
		var y = $(window).scrollTop();
      var header = $('#main-header');

	   if ((y > h + 30 ) && ($(window).outerWidth() > 768 ) ) {
	      header.addClass('opaque');	      
	   }
      else {
         if (y < h + 30) {
            header.removeClass('opaque');
         }
         else {
            header.addClass('opaque');
         }
      }

	});


   /*----------------------------------------------------*/
  	/* Highlight the current section in the navigation bar
  	------------------------------------------------------*/
	var sections = $("section"),
	navigation_links = $("#nav-wrap a");	

	sections.waypoint( {

       handler: function(direction) {

		   var active_section;

			active_section = $('section#' + this.element.id);

			if (direction === "up") active_section = active_section.prev();

			var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');			

         navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");

		}, 

		offset: '25%'

	});


   /*----------------------------------------------------*/
  	/* FitText Settings
  	------------------------------------------------------ */
  	setTimeout(function() {

   	$('#hero-slider h1').fitText(1, { minFontSize: '30px', maxFontSize: '49px' });

  	}, 100);


  	/*-----------------------------------------------------*/
  	/* Mobile Menu
   ------------------------------------------------------ */  
   var menu_icon = $("<span class='menu-icon'>Menu</span>");
  	var toggle_button = $("<a>", {                         
                        id: "toggle-btn", 
                        html : "",
                        title: "Menu",
                        href : "#" } 
                        );
  	var nav_wrap = $('nav#nav-wrap')
  	var nav = $("ul#nav");  
   
   /* if JS is enabled, remove the two a.mobile-btns 
  	and dynamically prepend a.toggle-btn to #nav-wrap */
  	nav_wrap.find('a.mobile-btn').remove(); 
  	toggle_button.append(menu_icon); 
   nav_wrap.prepend(toggle_button); 

  	toggle_button.on("click", function(e) {
   	e.preventDefault();
    	nav.slideToggle("fast");     
  	});

  	if (toggle_button.is(':visible')) nav.addClass('mobile');
  	$(window).resize(function() {
   	if (toggle_button.is(':visible')) nav.addClass('mobile');
    	else nav.removeClass('mobile');
  	});

  	$('ul#nav li a').on("click", function() {      
   	if (nav.hasClass('mobile')) nav.fadeOut('fast');      
  	});


  	/*----------------------------------------------------*/
  	/* Smooth Scrolling
  	------------------------------------------------------ */
  	$('.smoothscroll').on('click', function (e) {
	 	
	 	e.preventDefault();

   	var target = this.hash,
    	$target = $(target);

    	$('html, body').stop().animate({
       	'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
      	window.location.hash = target;
      });

  	});  
  

   /*----------------------------------------------------*/
	/*	Modal Popup
	------------------------------------------------------*/
    $('.item-wrap a').magnificPopup({

       type:'inline',
       fixedContentPos: false,
       removalDelay: 300,
       showCloseBtn: false,
       mainClass: 'mfp-fade'

    });

    $(document).on('click', '.popup-modal-dismiss', function (e) {
    		e.preventDefault();
    		$.magnificPopup.close();
    });


   /*----------------------------------------------------*/
	/*  Placeholder Plugin Settings
	------------------------------------------------------ */  	 
	$('input, textarea').placeholder()  

   
	
	$("#track1").click(function(){
		var desp = document.getElementById('track1-desp');
		desp.innerHTML = "Track 1 of VCET's National Level Project Showcase demystifies the laws and technologies realted to Mechanical Engineering. Being an epitome of Engineering is explicitly involves key elements such as Design of Mechanical System,Thermal Science, Material Technology,Fluid Mechanics,IC Engines and Renewable Energy Developement as well.";
		$('#track1').hide();
		});
		$("#t1-close").click(function(){
			var desp = document.getElementById('track1-desp');
			desp.innerHTML ="Thermal and Fluid Power Engg</br> Design of Mechanical Components and Engg</br> Advanced Manufacturing Techniques</br> Energy Security</br> Policies and Clean Developement Mechanism</br> Modern Automobile Trends</br> Non-conventional Energy Sources</br> Mechatronics and Automation</br> Aerospace Engineering";
			$('#track1').show();
			});
	
	$("#track2").click(function(){
		var desp = document.getElementById('track2-desp');
		desp.innerHTML = "Communication is the vehicle which allows humans to recall the past, think in the present and plan for the future. Track 1 of VCET's National Level Project Showcase illustrates the betterments in the field of Electronics and Telecommunication Engineering. It includes various project on microcontroller and embedded system,Signal and Image Perocessing,VLSI applications,sensors networks, Microwave and Radar engineering, latest communication technologies.";
		$('#track2').hide();
		});
		$("#t2-close").click(function(){
			var desp = document.getElementById('track2-desp');
			desp.innerHTML = 'Microcontroller and Embedded System</br> Signal and Image Processing</br> Sensor Networks</br> VLSI Application</br> Microwave and Radar Engg</br> Emerging Comm. Tech.';
			$('#track2').show();
			});

	$("#track3").click(function(){
		var desp = document.getElementById('track3-desp');
		desp.innerHTML = 'Control is where Track 3 is....!!! This track would incorporate the project templates viz. Control System Design, Microcontroller, Internet of Things,Sensor Networks all involving basic Instrumentation and Control Schemes at the VCET National Level Project Showcase. Get ready to witness the Simulation of new age world....all governed by laws of Automation ';
		$('#track3').hide();
		});
		$("#t3-close").click(function(){
			var desp = document.getElementById('track3-desp');
			desp.innerHTML = 'Control System Design and Simulation</br> Latest trends in Sensor Design</br> Process Automation</br> Biomedical Instrumentation</br> IoT(Internet of Things)';
			$('#track3').show();
			});

	$("#track4").click(function(){
		var desp = document.getElementById('track4-desp');
		desp.innerHTML = "Track 4 of VCET's Nantional Level Project Showcase elucidates the neoteric advancements in the field of computer technologies. A plethora of fascination projects viz. Cloud computing and big data,AI,Gaming,Web Security and Networking, etc that would make your mind boggle are going to be exhibited";
		$('#track4').hide();
		});
		$("#t4-close").click(function(){
			var desp = document.getElementById('track4-desp');
			desp.innerHTML = 'Cloud Computing and Big Data</br> Artificial Intelligence</br> Gaming</br> Web Security and Network';
			$('#track4').show();
			});

	$("#track5").click(function(){
		var desp = document.getElementById('track5-desp');
		desp.innerHTML = "Track 5 of VCET's National Level Project Showacase illustrates the betterments in the field of civil engineering. It includes various project on Construction Management, concreting,structural engineering,Geotech and transport engineering, water resources and Environmental engineering that will truly astonish and also level up the knowledge of the viewer.";
		$('#track5').hide();
		});
		$("#t5-close").click(function(){
			var desp = document.getElementById('track5-desp');
			desp.innerHTML = 'Concrete and Structural Engineering</br> Construction Management</br> Geotechnical and Transportation Engineering</br> Water Resources and Environmental Engineering';
			$('#track5').show();
			});





/* ---------------------------------- card reg test--------------------------------------------------*/




	








 
	

})(jQuery);