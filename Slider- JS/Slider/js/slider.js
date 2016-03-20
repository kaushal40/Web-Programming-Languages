$(document).ready(function() {
		
		var TotalImgs = 8;
		var currentImage = 1;



		// PREVIOUS ARROW CODE
		
		$('a.prevSlideArr').click(function() {
	
				$('img.previewImage' + currentImage).fadeOut('slow', function() {
			
						$('p.cImage' + currentImage).fadeOut('slow');
						$('a.bullet' + currentImage).removeClass("active");
						currentImage--;
						if (currentImage == 0) {
							currentImage = TotalImgs;
						}
						moveToImg(currentImage);
				});	
				return false;
		});


		// NEXT ARROW CODE
		
		$('a.nextSlideArr').click(function() {
	
				$('img.previewImage' + currentImage).fadeOut('slow', function() {
			
						$('p.cImage' + currentImage).fadeOut('slow');
						$('a.bullet' + currentImage).removeClass("active");
						currentImage++;
						if (currentImage == TotalImgs + 1) {
							currentImage = 1;
						}
		
						moveToImg(currentImage);
				});	
	
				return false;
		});
		

		function moveToImg(id)
		{	
				$('a.bullet' + id).addClass("active");
				$('p.cImage' + id).fadeIn('slow');
				$('img.previewImage' + id).fadeIn('slow', function() {
			
						
						
		
				}); 
		}

		var imageNumber;
		
		function image(imageNumber) {
				$('img.previewImage' + currentImage).fadeOut('slow', function() {
						$('p.cImage' + currentImage).fadeOut('slow');
						$('.navbullets a').removeClass("active");
						currentImage = imageNumber;
						moveToImg(currentImage);
				});	
		
				return false;
		}

		$("a[id='box1']").on("click", function (e) {
			image(1);
		});

		$("a[id='box2']").on("click", function (e) {
			image(2);
		});

		$("a[id='box3']").on("click", function (e) {
			image(3);
		});

		$("a[id='box4']").on("click", function (e) {
			image(4);
		});

		$("a[id='box5']").on("click", function (e) {
			image(5);
		});

		$("a[id='box6']").on("click", function (e) {
			image(6);
		});

		$("a[id='box7']").on("click", function (e) {
			image(7);
		});

		$("a[id='box8']").on("click", function (e) {
			image(8);
		});

});
