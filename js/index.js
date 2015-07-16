// HINT:
//
// When you press Enter to submit a new cash register entry, the form will 
// actually submit data and reload the page. You don't want to reload the page. It 
// messes up the running tab. So in order to prevent normal form submission, 
// make sure your form submit handler looks like this:
//
	// $('#entry').submit(function(e) {
	// 		e.preventDefault();
	//      .... do other stuff here ....
	// 
	// });


$(function() {
	var total = 0.00;
	$('#entry').submit(function(e) {
		e.preventDefault();
		var newE = parseFloat($("#newEntry").val());
		total += newE;
		newE = "$" + newE.toFixed(2);
		$("#entries").append("<tr><td></td><td>" + newE + "</td></tr>");
		$("#newEntry").val("");
		//var currtotal = ($("#total")).val();
		var nodoll = newE.substring(1);
		$("#total").html("$" + total.toFixed(2));
		var test = $("#total");
		console.log(test.val());
	});
});