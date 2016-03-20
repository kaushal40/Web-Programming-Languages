$(document).ready(function(){
	$.ajax({

		url: "books.xml",
		dataType: "xml",
		success: function(data) {
			alert("file is loaded");

			$(data).find('book').each(function(){
				var title = $(this).find('title').text();
				
				var authors = '';
				$(this).find('author').each(function(){
					authors = authors + $(this).text() + ', ';
				});
				
				var year = $(this).find('year').text();
				
				var price = $(this).find('price').text();
				
				var category = $(this).attr('category');
				
				var info = '<tr> <td>'+ title + '</td><td>' + authors + '</td><td>' + year + '</td><td>' + price + '</td><td>' + category + '</td></tr>';	
				$('#table').append(info);
			});
		},
		error: function() { alert("error loading file");  }
	});

});