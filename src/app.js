document.addEventListener('DOMContentLoaded', function() {
	var animateImages = document.querySelectorAll('.animate-image');
    
	animateImages.forEach(function(image) {
	  image.addEventListener('click', function() {
		anime({
			targets: '.image-container img',
			translateX: 250
		    });
	  });
	});
    });
    