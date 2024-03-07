console.log("------------------------");
console.log("-----------forEach()----");
console.log("------------------------");

let colors = ["red", "blue", "green", "yellow"];

//forEach Function
function forEach(arr, callback){
    for(let i = 0; i < arr.length; i++){
        callback(arr[i], i);
    }
}

//implementation
forEach(colors, function(colors, i){
    console.log(colors.toUpperCase(), i);
});


console.log("------------------------");
console.log("------------map()-------");
console.log("------------------------");




let letters = ["a","b","c","d","e"]

console.log(letters)

function myMap(arr, callback){
	const mappedArray = [];
	for(let i = 0; i <arr.length; i++){
		const val = callback(arr[i], i, arr);
		mappedArray.push(val);
	}
	return mappedArray;
}


let newLetters = myMap(letters, function(str){
	return str.toUpperCase();
})

console.log(newLetters);


console.log("------------------------");
console.log("---------filter()-------");
console.log("------------------------");


//filter example

let someLetters = ["a","b","x","b","a"];

console.log(someLetters);

let someNewLetters = someLetters.filter(function(letter){
    return letter === "b";
});

console.log(someNewLetters);



console.log("------------------------");
console.log("----map() & filter{}----");
console.log("-------Code Along-------");

//1. Get a camera on the toDoList items
//2. store the "finished" items in an array using filter()
//3. store the actual text of the finished in an array using map()
//4. console.log() the finished Items


//create camera on finished toDos
const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');

//store finished items in array
//.from to translate the nodeList into an array 
//.filter to grab checked boxes
const checked = Array.from(allCheckboxes).filter(function(box){
    return box.checked;
});


//store actual text
const completedItems = checked.map(function(checkbox){
    return checkbox.parentElement.innerText;
})

console.log(completedItems);



console.log("------------------------");
console.log("----myFilter()----------");
console.log("------------------------");

//the callback is a function that returns true
//or false. if true, the arr index is pushed
function myFilter(arr, callback){
	const filteredArray = [];
	for(let i=0; i < arr.length; i++){
		if (callback(arr[i], i, arr)){
			filteredArray.push(arr[i]);
		}
	}
	return filteredArray;
}

let words = ["hello", "eek", "a", "b", "c","omloml"];

console.log(words);

let newWords = myFilter(words, function(index){
    return index.length === 1;
})

console.log(newWords);
