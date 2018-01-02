function main() {  

$('.projects-button').on('click', function() {
		$(this).next().slideToggle(400);
    $(this).toggleClass('active');
    $(this).text('Projects Viewed');
	});
}
