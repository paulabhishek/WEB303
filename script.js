/*
	WEB 303
	Starting file for Assignment 1 
	{Abhishek Paul}
*/
$(document).ready(function() {
$('#salary').on('change', function() {
var salary = parseFloat($("#salary").val());
console.log(salary);


$('#percent').on('change', function() {
var percent = parseFloat($("#percent").val());
console.log(percent);

var spent = salary * percent / 100;
spent = spent.toFixed(2);
console.log(spent);
$('#spend').text('$' + spent);
});
});
});



