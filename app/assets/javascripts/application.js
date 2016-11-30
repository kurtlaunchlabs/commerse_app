// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .




// $(document).ready(function(){
// 	$( "#pull-content-header" ).click(function() {
// 		console.log("Pass to click content header");
// 	 $('#search').width(189);
// 	});

// });

// var select = '.tabcontrol2 ul li a'
// var display = "";

// hover tab menu show all menu
//$(document).ready(function(){
	// $('.tabcontrol2 ul li').removeClass('active'); // hide the first element in the menu tab
//	 $('#frame_1_electronics.frame').hide(); //hide the first element in the menu tab
 //    $(select).hover(function(){
 //    	//$(".tabcontrol2 ul li a.active").removeClass('active');
  
	//     $(this).addClass('active');
	//      display =  $(this).attr('href');
	// 	$(display + '.frame').show();
	// 	//console.log(ref_this + '.frame' + " sfsd");

 //    },function(){
 //    	 $(display + '.frame').hide();
	//      $(this).removeClass('active');
	   
 //    });

//});




$(document).ready(function() {
    $('.tabcontrol2 ul li').removeClass('active'); // hide the first element in the menu tab
   $('#frame_1_electronics.frame').hide();
  $('#category-search').change(function(){
  	if (jQuery(window).width() > 900) {
  		console.log("Pass in first onchange");
    $("#option-search-tmp-selected").html($('#category-search option:selected').text()); 
     $(this).width($("#option-search-tmp-selected").text().length * 7.5 + 15);  
     var margin = $("#option-search-tmp-selected").text().length * 7.5 + 11;
     if(margin < 60){
     	margin = 60;
     	$(this).width(60);
     	document.getElementById('search').style.marginLeft = "60px";
  	}else{
    document.getElementById('search').style.marginLeft = margin+"px";
  	}
  } 
  });
});



$(window).resize(function() {
	jQuery(document).ready(function(){
	console.log(jQuery(window).width() + "msfmdslfmkl");
	$("#category-search").val($("#category-search option:first").val());
	$('#category-search').width(60);
	document.getElementById('search').style.marginLeft = "60px";
	if (jQuery(window).width() < 763) {
		console.log(jQuery(window).width() + "less than 763");
		
		document.getElementById('search').style.marginLeft = "60px";
		$('#search').width(189);
		$('#category-search').width(60);

		$('#category-search').change(function(){
		console.log("Pass HEREdfsfsf");
		if (jQuery(window).width() < 763) {
			$(this).width(60);
		}
		


		});

	}  

	if (jQuery(window).width() > 763) {
		if($('#category-search').width() == 60){
		$('#search').width(500);
		console.log("Pass HEREdfsfsf Greater than Inside IF");

	}

	console.log("Pass HEREdfsfsf Greater than");
	}
	});

	
});