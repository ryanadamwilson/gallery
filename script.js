var images = ["images/minastirith.jpg", "images/mossy-beach.jpg", "images/tree.jpg", "images/horses.jpg", "images/matamata.jpg", "images/mountains.jpg", "images/nz-beach.jpg", "images/puntacana.jpg"];

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
		function fadeImage(indexImg) {
			$('.image').fadeOut('slow');
			$('.image').attr('src', images[indexImg]);
		}

		//Previous/Next Functionality
		$('.prev').click(function() {
			if (indexImg > 0) {
				$('.image').fadeOut('slow', function() {
					$('.image').attr('src', images[indexImg]);
				});
				indexImg--;
				$('.image').fadeIn();
			} else {
				indexImg = images.length - 1;
				fadeImage(indexImg);
			}
		});

		$('.next').click(function() {
			if (indexImg < images.length - 1) {
				indexImg++;
				fadeImage(indexImg);
			} else {
				indexImg = 0;
				fadeImage(indexImg);
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

	$('#submit').click(function() {
		var userImg = document.getElementById('newImage').value;
		images.push(userImg);
		var lastImage = images[images.length - 1];
		outputImages(lastImage);
	});
});









