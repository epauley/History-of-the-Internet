jQuery(document).ready(function($){
	var timelineBlocks = $('.event'),
		offset = 0.8;

	//hide timeline blocks which are outside the viewport
	hideBlocks(timelineBlocks, offset);

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame) 
			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.timelineDot, .eventContent').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.timelineDot').hasClass('is-hidden') ) && $(this).find('.timelineDot, .eventContent').removeClass('is-hidden').addClass('bounce-in');
		});
	}
	
	$("footer a").click(function(){
		$("#resources").toggle("fast");
		window.scrollTo(0,document.body.scrollHeight);
	});
});