function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    document.body.style.backgroundColor = "white";
}
// $(document).ready(function(){
	$(window).scroll(function(e){ 
	  var $el = $('.fixedElement'); 
	  var isPositionFixed = ($el.css('position') == 'fixed');
	  if ($(this).scrollTop() > 200 && !isPositionFixed){ 
	    $('.fixedElement').css({'position': 'fixed', 'top': '0px'}); 
	  }
	  if ($(this).scrollTop() < 200 && isPositionFixed)
	  {
	    $('.fixedElement').css({'position': 'static', 'top': '0px'}); 
	  } 
	});

// click on the ".open" link (the right arrow in the nav)
