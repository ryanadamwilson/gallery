var images = ["images/minastirith.jpg", "images/castle.jpg", "images/england.jpg", "images/horses.jpg", "images/matamata.jpg", "images/mountains.jpg", "images/nz-beach.jpg", "images/puntacana.jpg"];

$(document).ready( function() {
	function loopImages() {
		for (var i = 0; i < images.length; i++) {
			outputImages(images[i]);
		}
	}
		
	function outputImages(image) {
		var imageWrapper = document.createElement('div');
		imageWrapper.id = 'imageWrapper' + images.indexOf(image);
		imageWrapper.className = 'imageWrapper col-xs-6';
		document.getElementById('mainWrapper').appendChild(imageWrapper);

		var img = document.createElement('img');
		img.setAttribute('src', image);
		img.className ='img-responsive';
		document.getElementById('imageWrapper' + images.indexOf(image)).appendChild(img);
	}
	loopImages();

	$('.img-responsive').click(function() {
		var imgSrc = $(this).attr('src');
		var indexImg = jQuery.inArray(imgSrc, images);

		//Open Lightbox
		$('.lightbox').animate({
			opacity: 1,
			height: 'toggle'
		}, 999, setImage());

		function setImage() {
			$('.image').attr('src', imgSrc);
		}

		//Previous/Next Functionality
		$('.prev').click(function() {
			if (indexImg > 0) {
				indexImg--;
				$('.image').attr('src', images[indexImg]);
			} else {
				indexImg = images.length - 1;
				$('.image').attr('src', images[indexImg]);
			}
		});

		$('.next').click(function() {
			if (indexImg < images.length - 1) {
				indexImg++;
				$('.image').attr('src', images[indexImg]);
			} else {
				indexImg = 0;
				$('.image').attr('src', images[indexImg]);
			}
		});

		//Close Lightbox
		$('.escape').click(function() {

			$('.lightbox').animate({
			opacity: 0,
			height: 'toggle'
			}, 999, function() {
			});
		});
	});
});









