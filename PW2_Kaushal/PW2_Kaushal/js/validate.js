$(document).ready(function() {

	$("#username").after("<span></span>");
	
	$("#password").after("<span></span>");
	
	$("#email").after("<span></span>");

	$('#username').focus('input', function()
	{
		$( this ).next("span" ).removeClass("info");
	$( this ).next( "span" ).removeClass("error");
	$( this ).next( "span" ).removeClass("ok");
		$( this ).next( "span" ).text("username should only contain letters and alphanumerics1.").show().addClass("info");
	});

  	$('#password').focus('input', function()
	{
		$( this ).next("span" ).removeClass("info");
	$( this ).next( "span" ).removeClass("error");
	$( this ).next( "span" ).removeClass("ok");
		$( this ).next( "span" ).text("password should 8 characters long").show().addClass("info");
	});

  	$('#email').focus('input', function()
	{
		$( this ).next("span" ).removeClass("info");
	$( this ).next( "span" ).removeClass("error");
	$( this ).next( "span" ).removeClass("ok");
		$( this ).next( "span" ).text("email should be properly formatted (should contain @)").show().addClass("info");
	});

    $('#username').blur('input', function() {

	$(this).next("span").hide();

	$( this ).next("span" ).removeClass("info");
	$( this ).next( "span" ).removeClass("error");
	$( this ).next( "span" ).removeClass("ok");
    
	var input_username=$(this);
	var user_name=input_username.val();
	var str=/^[a-zA-Z0-9]+$/;
	if(user_name.match(str)){
		$( this ).next( "span" ).text("ok");
		$( this ).next( "span" ).show().addClass("ok");
		
	}
	else if(!user_name){
		    $( this ).next( "span" ).hide();
	}
	else{
		$( this ).next( "span" ).text("Error");
		$( this ).next( "span" ).show().addClass("error");
		
	}
});


    $('#password').blur('input', function() {  
  	
    $( this ).next( "span" ).hide();

    $( this ).next( "span" ).removeClass("info");  
    $( this ).next( "span" ).removeClass("error");  
    $( this ).next( "span" ).removeClass("ok");

	var input_password=$(this);
	var user_pass=input_password.val();
	if(user_pass.length > 7){
		$( this ).next( "span" ).text("ok");
		$( this ).next( "span" ).show().addClass("ok");
	}
	else if(!user_pass){
		    $( this ).next( "span" ).hide();
	}
	else{
		$( this ).next( "span" ).text("Error");
		$( this ).next( "span" ).show().addClass("error");
	}
    });


    $('#email').blur('input', function() { 
   	
    $( this ).next( "span" ).hide();

    $( this ).next( "span" ).removeClass("info"); 
    $( this ).next( "span" ).removeClass("error");   
    $( this ).next( "span" ).removeClass("ok");
  
	var input_email=$(this);
	var email_id=input_email.val();

	if(email_id.indexOf("@")!= -1){
		$( this ).next( "span" ).text("ok");
		$( this ).next( "span" ).show().addClass("ok");
	}
	else if(!email_id){
		    $( this ).next( "span" ).hide();
	}
	else{
		$( this ).next( "span" ).text("Error");
		$( this ).next( "span" ).show().addClass("error")
	}
   });

   
});
