
$('#list_btn').click((event)=>{
  event.preventDefault();
  $.getJSON( "student.json", function( data ) {
    var items = [];
    $.each( data, function( ID, NAME ) {
      items.push(  ID+": "+ NAME + "</br>");
    });
   $("#list").html(items);
  });
});
$('#search button[type=submit]').click((event) => {
  event.preventDefault();
  $.get('s.php', {
    ID: $('#search input[name=ID]').val(),
  }, (data) => {
    $('#search_result').html(data);
  });
});
$('#add button[type=submit]').click((event) => {
  event.preventDefault()
  $.get('add.php', {
    ID: $('#add input[name=ID]').val(),
    name: $('#add input[name=name]').val(),
  }, (data) => {
    $('#add_result').html(data);
  });
});
$('#delete button[type=submit]').click((event) => {
  event.preventDefault()
  $.get('del.php', {
    ID: $('#delete input[name=ID]').val(),
  }, (data) => {
    $('#delete_result').html(data);
  });
});

/*
$("#list_btn").click(function(){
	$.ajax({
	url: "student.json",
	type: "GET",
	dataType: "json",
	success: function(list) {
	var name = list.E123456789;
	alert(name);
  },
});
});
});
*/


/*
btn.addEventListener("click", function(){
		var ourRequest = new XMLHttpRequest();
		ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-1.json ');
		console.log(ourRequest.responseText);
		ourRequest.onload = function(){
			console.log(ourRequest.responseText);
		var ourData = JSON.parse(ourRequest.responseText);
		console.log(ourData[0]);
};

});
*/
