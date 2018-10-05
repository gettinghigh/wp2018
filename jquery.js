$(document).ready(function(){
  $("p").click(function(){
    $(this).hide();
  });
});
$(document).ready(function(){
$(".up_rec").animate({left:'0px'},"slow");
$(".down_rec").delay(100).animate({left:'0px'},"slow");
$(".up_rec").delay(700).animate({left:'66%'},"slow")
$(".down_rec").delay(700).animate({left:'66%'},"slow")
$("#img1").delay(1600).animate({left:'0px'},"slow");
$("#img2").delay(1700).animate({left:'0px'},"slow");

$(".button").click(function(){
    //alert("The button was clicked.");
    var position = $(".bigbox").offset();  
	var x = position.left;  
	var y = position.top; 
	
	var w = $(".up_rec").width();
	var h = $(".up_rec").height();
	
	$("#white").height(h*2);
	$("#white").width(w*0.66);
	$("#white").css('left', x);
	$("#white").css('top', y);
	$("#white").css('visibility', "visible");
	var i = 1200;
	$("span:nth-child(1)").delay((1500-i)).animate({top:'0px'},"slow");
	$("span:nth-child(2)").delay((1750-i)).animate({top:'0px'},"slow");
	$("span:nth-child(3)").delay((2000-i)).animate({top:'0px'},"slow");
	$("span:nth-child(4)").delay((2250-i)).animate({top:'0px'},"slow");
	$("span:nth-child(5)").delay((2500-i)).animate({top:'0px'},"slow");
	$("span:nth-child(6)").delay((2750-i)).animate({top:'0px'},"slow");
	$("span:nth-child(7)").delay((3000-i)).animate({top:'0px'},"slow");
	$("span:nth-child(8)").delay((3250-i)).animate({top:'0px'},"slow");
});
});

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
