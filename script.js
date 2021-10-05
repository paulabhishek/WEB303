//Abhishek Paul

$(function(){
	var getJSONObject = $.getJSON("team.json").done(function (data){
		console.log("The data contained", data);
		var htmlEle= '';
 		$.each(data.teammembers, function (key, val) {
            console.log("did we get the data?", key, val)
            htmlEle += '<h3>'+val.name+'</h3>';
            htmlEle += '<h4>'+val.title+'</h4>';
            htmlEle += '<p>'+val.bio+'</p>';
        });
        $('#team').append(htmlEle);

	});
});

$(function(){
	$.ajax({ 
		url: 'team.json',
		method: 'GET',
		dataType: 'json',
		data:{test:'test data'},
		success:function(data){
			$('#team').append("<p id='load'>Loading...</p>");
		    var htmlEle= '';
 		    $.each(data.teammembers, function (key, val) {
            console.log("did we get the data?", key, val)
            htmlEle += '<h3>'+val.name+'</h3>';
            htmlEle += '<h4>'+val.title+'</h4>';
            htmlEle += '<p>'+val.bio+'</p>';	
            $('#team').append(htmlEle);	
            $('#load').hide();	
		});			
		},
		error: function(){
			console.log("error occured");
		}


		


	});

});