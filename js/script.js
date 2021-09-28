// WEB303 Assignment 2
// Your Name Here
//Abhishek Paul

$(document).ready(function() {
	$("#vprospect").click(function(){
        $("#solution").load("prospect.html");
		$("#solution").hide();
		$("#solution").slideDown("slow");
    });
	$("#vconvert").click(function(){
		$("#solution").load("convert.html");
		$("#solution").hide();
		$("#solution").slideDown("slow");		
    });
	$("#vretain").click(function(){
		$("#solution").load("retain.html");
		$("#solution").hide();
		$("#solution").slideDown("slow");		
    });        

});
