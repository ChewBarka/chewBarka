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
