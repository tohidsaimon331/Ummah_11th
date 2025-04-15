// Responsive Icon Start
$('.hide').hide();
// $('.mobile-menu').hide();
$('.show').click(function(){
	$('.mobile-menu').slideDown();
	$('.show').hide();
	$('.hide').show();

})
$('.hide').click(function(){
	$('.mobile-menu').slideUp();
	$('.show').show();
	$('.hide').hide();

})
// Responisve Icon End


// Mobile Menu Start

// Islamic School Dropdown
$('.school-hide').hide();
$('.school-dropdown').hide();
$('.school-show').click(function(){
	$('.school-dropdown').slideDown();
	$('.school-show').hide();
	$('.school-hide').show();
})
$('.school-hide').click(function(){
	$('.school-dropdown').slideUp();
	$('.school-show').show();
	$('.school-hide').hide();
})
// Islamic School Dropdown 

// Service Dropdown
$('.service-hide').hide();
$('.service-dropdown').hide();
$('.service-show').click(function(){
	$('.service-dropdown').slideDown();
	$('.service-show').hide();
	$('.service-hide').show();
})
$('.service-hide').click(function(){
	$('.service-dropdown').slideUp();
	$('.service-show').show();
	$('.service-hide').hide();
})
// Service Dropdown 

// Click Menu 
$('.click-menu').click(function(){
	$('.mobile-menu').hide();
})
// Click Menu


// Mobile Menu End
