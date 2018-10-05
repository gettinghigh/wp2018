$(document).ready(function(){
  $("p").click(function(){
    $(this).hide();
  });
});
$(document).ready(function(){
$(".up_rec").animate({left:'0px'},);
$(".down_rec").animate({left:'0px'},"slow");
$(".up_rec").delay(700).animate({left:'66%'},)
$(".down_rec").delay(700).animate({left:'66%'},"slow")
});


	  $(".up_rec").animate({left:'66%'},)
	  $(".down_rec").animate({left:'66%'},"slow")


/*
$(document).ready(function(){
  $(".button").click(function(){
    alert("The button was clicked.");
    var position = $('.up_rec').offset();  
	var x = position.left;  
	var y = position.top; 
	
	var w = $(".up_rec").width();
	var h = $(".up_rec").height();
	alert('x:'+x+', y:'+y+', w:'+w+', h:'+h); 
	$(document).ready(function(){
		$(".up_white").height(h);
		$(".up_white").width(w*0.7);
		$(".up_white").css('left', "22");
	});
  });
});
*/
