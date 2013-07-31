/* this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;


//stringify takes an object and parses each element and turns it into a string. 
//ideas of how to do this:
	1. iterate across each object
	2. splice() object val
	3. Apply string()
	4. Concatenate
	5. Return string
 but you don't so you're going to have to write it from scratch:
*/


var stringifyJSON = function (obj) {

	if (typeof(obj) == 'number') {
	return obj.toString();
	} else if (typeof(obj) == "boolean"){
	return obj.toString();
	} else if (typeof(obj) == "string"){
	return '"'+obj.toString()+'"';
	}else if (obj == null){
	return "null";
	}else if (typeof(obj) == 'object'){
		if (Object.keys(obj).length == 0){
			return "";
		}
		//Object.keys(obj)
		var keyz = Object.keys(obj)[0];
		debugger;
		var valz = obj[keyz];
		delete obj[keyz];
		return valz+stringifyJSON(obj);

		//For each key i, stringify obj[key]
		//concat to an intermediate result, return result
	}
};



/*::::::::::::::SCRAP:::::::::::::::::::::


	if (typeof(obj) === 'string'){
		return obj;
	}else 

	} else if (typeof(obj) == 'object') {
		console.log("An Object");
	} else if (typeof(obj) == 'boolean') {
		output = output + ojb.toString;
	} else if (typeof(obj) == 'undefined') {
		console.log("Is undefined");
	} else if (typeof(obj) == 'function') {
		console.log("A function");
	}	


*/