// Functional cloud object pattern
(function(){

	// A cloud object for storing data in a higher scope
	var myCloudObject = {
		name: 'Georgio'
	};

	// Our init function for calling other functions
	// you could also place other initialize code in here
	// including event listeners
	function init(){
		console.log('a');
		consoleSomething('hello' + ' *1');
		console.log(returnSomething(27) + ' *2');
		console.log(returnObjectValue(myCloudObject.name));
		// Here we invoke a function from within a function
		// which needs to be above the return statement
		console.log(updateObject('age', 32) + ' *3');
		console.log('finished***')
	}

	// Call the init function early
	init();

	// A basic function that console.logs an argument
	function consoleSomething(what){
		console.log('b');
		console.log(what);
		console.log(passMeAnObjectAndUpdate(myCloudObject, 'location', 'Wellington'));
		console.log(myCloudObject);
	}

	// A basic function that returns an argument
	function returnSomething(value){
		console.log('c');
		return value;
	}

	// Another function that takes a value and returns it 
	function returnObjectValue(obval){
		console.log('d');
		return obval;		
	}

	// A function that takes 2 arguments to be applied to an object
	// One for the property name and another for the property value
	// The same function the returns the updated object
	function updateObject(prop, val){
		console.log('e');
		myCloudObject[prop] = val;
		return myCloudObject[prop];
	}

	// Another function that takes an object for an argument
	// it then returns the object
	function passMeAnObjectAndUpdate(obj, prop, val){
		console.log('f');
		//Here we add a property to the new object
		obj[prop] = val;
		return obj;
	}

})();









































