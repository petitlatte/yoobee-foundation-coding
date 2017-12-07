		// A variable representing dateRange
		var dateRange = 7;

		// An object representing minimum values
		var minObj = {
			scooter: 1,
			honda: 1,
			lada: 3,
			combiVan: 2
		}

		// An object representing maximum values
		var maxObj = {
			scooter: 5,
			honda: 10,
			lada: 10,
			combiVan: 15
		}

		// A function that takes the dateRange variable as a
		// parameter/argument - see line 60
		function minMax(days){

			//Here we set up some empty arrays to store, loop and
			//check data
			var selectionA = [];
			var selectionB = [];
			var final = [];

			//This is a loop for the min value object
			for (var key in minObj) {
			    if (days >= minObj[key]) {
			    	selectionA.push(key);
			        // console.log(key + " -> " + minObj[key]);
			    } else {
			    	selectionA.push(false);
			    }
			}

			console.log(selectionA);

			//This is a loop for the max value object
			for (var key in minObj) {
			    if (days <= maxObj[key]) {
			    	selectionB.push(key);
			        // console.log(key + " -> " + minObj[key]);
			    } else {
			    	selectionB.push(false);
			    }
			}

			console.log(selectionB);

			// A final for loop that tests our selectionA & 
			// selectionB variables for double matches === test passed, within range
			for (var i = 0; i < 4; i++) {
				if (selectionA[i] === selectionB[i]) {
					console.log(selectionA[i] + ' s');
					final.push(selectionA[i]);
				}
			}

			// Here our minMax function returns the result
			// result array of strings with names....***You can then apply to the dom
			return final;

		}

		console.log(minMax(dateRange));