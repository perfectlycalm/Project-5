
function navSetup(){

	if ($(window).width() > 768) {
		
	$('.nav-open').hide();
	$('.main-nav ul').show();	
	} else {
			
		$('.main-nav ul').hide();
		$('.nav-open').show();
	}

}

// On window open and resize:
// Hide nav menu and show toggle on small screens
// Hide nav toggle and show menu on large screens

navSetup();

$(window).resize(function(){
	
	navSetup();
});		


// show/hide nav menu when nav toggle is clicked
$('.nav-open').on('click', function(){

	$('.main-nav ul').toggle();	
})


