// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;


//stringify takes an object and parses each element and turns it into a string. 
//ideas of how to do this:
/*
	1. iterate across each object
	2. splice() object val
	3. Apply string()
	4. Concatenate
	5. Return string
 but you don't so you're going to have to write it from scratch:
*/


var stringifyJSON = function (obj, output) {
    var output = output || "";


    if ((typeof(obj) === "object") && !(obj instanceof Array) && !(obj === null)){
	   var keys = [];

	   console.log(output);///TEST////
		for (var k in obj){
			keys.push(k);
		}
		output += "{";

		for (var i = 0; i < keys.length; i++){
			if (typeof(obj[keys[i]]) === "function"){
				break;
			}
			if (obj[keys[i]] === undefined){
				break;
			}

			output += '"'+keys[i]+'"'
			output += ":";
			output += stringifyJSON(obj[keys[i]]);
			if (keys.length > 1 && i < keys.length-1){
			output += ",";
			}
		};
		output += "}";
		 console.log(output);///TEST////
	}


 
  	console.log("keys");
    if (typeof(obj) === 'number') {
        output += obj.toString();
    } else if (typeof(obj) === "boolean") {
        output += obj.toString();
	} else if (typeof(obj) === "string") {
        output += '"'+obj.toString()+'"';
	} else if (obj === null){
        output += "null";
	} else if (obj instanceof Array) {
		console.log(output);
        output += "[";
        for (var i = 0; i < obj.length; i++) {
            if (i>0){
				output += ","
			}
			output = stringifyJSON(obj[i], output);
		}
		output += "]";
		console.log("After last conditional:"+ output);
	}
	return output;
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



		// if (Object.keys(obj).length === 0) {
		// 	output += "";
		// }
		//Object.keys(obj)
		// var keyz = Object.keys(obj)[0];
		// var valz = obj[keyz];
		// return valz+stringifyJSON(obj);

		//For each key i, stringify obj[key]
		//concat to an intermediate result, return result


*/