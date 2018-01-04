function main() {  

$('.people').hide();
	
$('.schiff').on('click', function() {
    $(this).next().slideToggle(400);
    $(this).toggleClass('active');
	});
}
