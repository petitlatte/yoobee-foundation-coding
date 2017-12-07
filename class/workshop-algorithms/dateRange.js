function dateRange(){
	// Your form values
	var start = $('#startDate').val();
	var end = $('#endDate').val();
	console.log(start);
	console.log(end);

	// Algorithm
	var diff =  Math.floor(( Date.parse(start) - Date.parse(end) ) / 86400000); 
	// Converts algorithm to positive
	var result = Math.abs(diff)
	console.log(result);	
	return result
}
