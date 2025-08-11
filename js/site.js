"use strict";

$(document).ready(function () {
	/* Video Lightbox */
	if (!!$.prototype.simpleLightboxVideo) {
		$('.video').simpleLightboxVideo();
	}

	/*ScrollUp*/
	if (!!$.prototype.scrollUp) {
		$.scrollUp();
	}

	/*Responsive Navigation*/
  $(document).ready(function() {
    // Copy the contents of #nav-main into #nav-mobile
    $("#nav-mobile").html($("#nav-main").html());

    // Toggle the mobile navigation menu
    $("#nav-trigger span").on("click", function() {
        if ($("nav#nav-mobile ul").hasClass("expanded")) {
            $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
            $(this).removeClass("open");
        } else {
            $("nav#nav-mobile ul").addClass("expanded").slideDown(250);
            $(this).addClass("open");
        }
    });

    // Close the mobile navigation when a link is clicked
    $("#nav-mobile ul a").on("click", function() {
        if ($("nav#nav-mobile ul").hasClass("expanded")) {
            $("nav#nav-mobile ul").removeClass("expanded").slideUp(250);
            $("#nav-trigger span").removeClass("open");
        }
    });

    // Close the nav when clicking outside
    $(document).on("click", function(event) {
        if (!$(event.target).closest('nav#nav-mobile, #nav-trigger span').length) {
            if ($("nav#nav-mobile ul").hasClass("expanded")) {
                $("nav#nav-mobile ul").removeClass("expanded").slideUp(250);
                $("#nav-trigger span").removeClass("open");
            }
        }
    });
});


	/* Sticky Navigation */
	if (!!$.prototype.stickyNavbar) {
		$('#header').stickyNavbar();
	}

	$('#content').waypoint(function (direction) {
		if (direction === 'down') {
			$('#header').addClass('nav-solid fadeInDown');
		}
		else {
			$('#header').removeClass('nav-solid fadeInDown');
		}
	});

});


/* Preloader and animations */
$(window).load(function () { // makes sure the whole site is loaded
	$('#status').fadeOut(); // will first fade out the loading animation
	$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('body').delay(350).css({'overflow-y': 'visible'});

	/* WOW Elements */
	if (typeof WOW == 'function') {
		new WOW().init();
	}

	/* Parallax Effects */
	if (!!$.prototype.enllax) {
		$(window).enllax();
	}

});



var modal1 = document.getElementById("myModal1");
var btn1 = document.getElementById("myBtn1");
var span = document.getElementsByClassName("close1")[0];
btn1.onclick = function() {
  modal1.style.display = "block";
}
span.onclick = function() {
  modal1.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}

// next ---------------------------------------
var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("myBtn2");
var span = document.getElementsByClassName("close2")[0];
btn2.onclick = function() {
  modal2.style.display = "block";
}
span.onclick = function() {
  modal2.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

// next ---------------------------------------
var modal3 = document.getElementById("myModal3");
var btn3 = document.getElementById("myBtn3");
var span = document.getElementsByClassName("close3")[0];
btn3.onclick = function() {
  modal3.style.display = "block";
}
span.onclick = function() {
  modal3.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}

// next ---------------------------------------
var modal4 = document.getElementById("myModal4");
var btn4 = document.getElementById("myBtn4");
var span = document.getElementsByClassName("close4")[0];
btn4.onclick = function() {
  modal4.style.display = "block";
}
span.onclick = function() {
  modal4.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
}

// next ---------------------------------------
var modal5 = document.getElementById("myModal5");
var btn5 = document.getElementById("myBtn5");
var span = document.getElementsByClassName("close5")[0];
btn5.onclick = function() {
  modal5.style.display = "block";
}
span.onclick = function() {
  modal5.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
}

// next ---------------------------------------
var modal6 = document.getElementById("myModal6");
var btn6 = document.getElementById("myBtn6");
var span = document.getElementsByClassName("close6")[0];
btn6.onclick = function() {
  modal6.style.display = "block";
}
span.onclick = function() {
  modal6.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal6) {
    modal6.style.display = "none";
  }
}

// next ---------------------------------------
var modal7 = document.getElementById("myModal7");
var btn7 = document.getElementById("myBtn7");
var span = document.getElementsByClassName("close7")[0];
btn7.onclick = function() {
  modal7.style.display = "block";
}
span.onclick = function() {
  modal7.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal7) {
    modal7.style.display = "none";
  }
}

// next ---------------------------------------
var modal8 = document.getElementById("myModal8");
var btn8 = document.getElementById("myBtn8");
var span = document.getElementsByClassName("close8")[0];
btn8.onclick = function() {
  modal8.style.display = "block";
}
span.onclick = function() {
  modal8.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal8) {
    modal8.style.display = "none";
  }
}

// next ---------------------------------------
var modal9 = document.getElementById("myModal9");
var btn9 = document.getElementById("myBtn9");
var span = document.getElementsByClassName("close9")[0];
btn9.onclick = function() {
  modal9.style.display = "block";
}
span.onclick = function() {
  modal9.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal9) {
    modal9.style.display = "none";
  }
}

// next ---------------------------------------
var modal10 = document.getElementById("myModal10");
var btn10 = document.getElementById("myBtn10");
var span = document.getElementsByClassName("close10")[0];
btn10.onclick = function() {
  modal10.style.display = "block";
}
span.onclick = function() {
  modal10.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal10) {
    modal10.style.display = "none";
  }
}

// next ---------------------------------------
var modal11 = document.getElementById("myModal11");
var btn11 = document.getElementById("myBtn11");
var span = document.getElementsByClassName("close11")[0];
btn11.onclick = function() {
  modal11.style.display = "block";
}
span.onclick = function() {
  modal11.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal11) {
    modal11.style.display = "none";
  }
}

// next ---------------------------------------
var modal12 = document.getElementById("myModal12");
var btn12 = document.getElementById("myBtn12");
var span = document.getElementsByClassName("close12")[0];
btn12.onclick = function() {
  modal12.style.display = "block";
}
span.onclick = function() {
  modal12.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal12) {
    modal12.style.display = "none";
  }
}

// next ---------------------------------------


