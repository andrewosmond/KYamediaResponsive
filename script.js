function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

$(document).ready(function(){
    //Set sticky to navbar when stop scrolling
    $(window).scroll(function(){
    	$('.navbar').removeClass('sticky');
    	clearTimeout($.data(this, "scrollCheck"));
    	$.data(this, "scrollCheck", setTimeout(function (){
    		$('.navbar').addClass('sticky');
    	}, 250));
    });
});