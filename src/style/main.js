function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("push").style.marginRight = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("push").style.marginRight = "0";
}
window.addEventListener('mouseup', function(event){
	var box = document.getElementById('mySidenav');
	if (event.target != mySidenav && event.target.parentNode != mySidenav){
        closeNav();
    }
});
// $(document).ready(function(){
	// $(window).scroll(function(e){ 
	//   var $el = $('.fixedElement'); 
	//   var isPositionFixed = ($el.css('position') == 'fixed');
	//   if ($(this).scrollTop() > 200 && !isPositionFixed){ 
	//     $('.fixedElement').css({'position': 'fixed', 'top': '0px'}); 
	//   }
	//   if ($(this).scrollTop() < 200 && isPositionFixed)
	//   {
	//     $('.fixedElement').css({'position': 'static', 'top': '0px'}); 
	//   } 
	// });

// click on the ".open" link (the right arrow in the nav)
