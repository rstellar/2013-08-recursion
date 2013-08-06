// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };


// You should use document.body, element.childNodes, and element.classList

// 1. Take var className
// 2. If node === "className", store in array
// 3. Return the entire element tags+ class+ content



// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
	output = [];



	var checkElement = function(element){
		if (element == null){
			return;
		}
		if (element.classList != null && element.classList.contains(className)){
		output.push(element);
		}
		for (var child in element.childNodes) {
			checkElement(element.childNodes[child]);
		}
	}

	checkElement(document.body);	
	return output;
}


// //
// 	document.body
// 	element.childNodes
// 	element.classList
