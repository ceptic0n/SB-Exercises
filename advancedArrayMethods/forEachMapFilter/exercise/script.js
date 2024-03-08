//--------------------//
//----myFunctions----//
//------------------//


//forEach
function forEach(arr, callback){
    for(let i = 0; i < arr.length; i++){
        callback(arr[i], i);
    }
}

//map
function myMap(arr, callback){
	const mappedArray = [];
	for(let i = 0; i <arr.length; i++){
		const val = callback(arr[i], i, arr);
		mappedArray.push(val);
	}
	return mappedArray;
}

//filter
function myFilter(arr, callback){
	const filteredArray = [];
	for(let i=0; i < arr.length; i++){
		if (callback(arr[i], i, arr)){
			filteredArray.push(arr[i]);
		}
	}
	return filteredArray;
}




//----------------//
//----exercises---//
//----------------//




//----------------//
//-----forEach----//
//----------------//


//doubleValues
/**
 * Write a function called doubleValues() which accepts an array
 * and returns a new array with all the values in the array passed 
 * to the function doubled
 * 
 */


//answer
function doubleValues(arr){
    const doubledArray = []
    forEach(arr, function(val){
        doubledArray.push(val * 2);
    });
    return doubledArray;
}

//testArrays
let values = [1, 2, 3, 4];
let values2 = [10, 20, 30, 40];

//output before implementation
console.log("before doubleValues()")
console.log(values);
console.log(values2);

//implementation
let newValues = doubleValues(values);
let newValues2 = doubleValues(values2);

//output after implementation
console.log("after doubleValues()");
console.log(newValues);
console.log(newValues2);



console.log("*****************");

//onlyEvenValues
/**
 * Write a function called onlyEvenValues which accepts an array and
 * returns a new array with only the even values in the array passed to the
 * function
 * 
*/

//answer
function onlyEvenValues(arr){
    const evenValues = []
    forEach(arr, function(val){
        if(val % 2 === 0){
            evenValues.push(val);
        };
    });
    return evenValues;
}

//test arrays
let values3 = [2, 3, 4, 5, 6, 7];
let values4 = [24, 47, 92, 80, 27];

//output before implementation
console.log("before onlyEvenValues()");
console.log(values3);
console.log(values4)

//implementation
let newValues3 = onlyEvenValues(values3);
let newValues4 = onlyEvenValues(values4);

//output after implementation
console.log("after onlyEvenValues");
console.log(newValues3);
console.log(newValues4);


console.log("*****************");


//showFirstAndLast
/**
 * Write a function called shortFirstAndLast which
 * accepts an array of strings and returns a new
 * array with only the first and last character of each string
*/

//answer
function showFirstAndLast(arr){
    let firstLast = [];
    forEach(arr, function(val){
        let str = val[0] + val[val.length-1];
        firstLast.push(str);
    });
    return firstLast;
}

/**
 * note
 * 
 * C O L T
 * 0 1 2 3
 * 
 * C === name[0]
 * T === name[name.length -1];
 */

//test Arrays
let names = ["colt, matt", "time", "test"];
let words = ["hi", "goodbye", "smile"];

//output before implementation
console.log("before showFirstAndLast")
console.log(names);
console.log(words);


//implementation
let newNames = showFirstAndLast(names);
let newWords = showFirstAndLast(words);

//output after implementation
console.log("after showFirstAndLast");
console.log(newNames);
console.log(newWords);





console.log("*****************");



//addKeyAndValue
/**
 * Write a function called addKeyAndValue which accepts an
 * array of objects, a key, and a value and returns the 
 * array passed to the function with the new key and value
 * added for each object
 * 
*/

//answer
function addKeyAndValue(arr, newKey, keyValue){
    let output = [];
    forEach(arr, function(element){
        let newObj = {...element};
        newObj[newKey]=keyValue;
        output.push(newObj);
    });
    return output;
}

//test array
let testArrayNames = 
    [   
        {name:"Elie"},
        {name:"Tim"},
        {name:"Matt"},
        {name:"Colt"}
    ];

//before addKeyAndValue()
console.log("before addKeyAndValue")
console.log(testArrayNames);


//implementation
let newTestArrayNames = addKeyAndValue(testArrayNames, "Title", "Instructor");


//after addKeyandValues();
console.log("after addKeyAndValue");
console.log(newTestArrayNames);




console.log("*****************");




//vowelCount
/**
 * Write a function called vowelCount which accepts a string and
 * returns an object with the keys as the vowel and the values as the
 * number of times the vowel appears in the string. This function
 * should be case indensivite so a lowercase and uppercase
 * letter should count
 * 
*/

//answer
function vowelCount(str){
    const vowels = "aeiouAEIOU";
    let output = {};
    forEach(str, function(char){
        if(vowels.includes(char)){
            let lower = char.toLowerCase();
            output[lower] = (output[lower] || 0) + 1;
        }
    })

    return output;
}


//before implementation
console.log("Before vowelCount()")
console.log("Hello");
console.log("Tim");
console.log("hmmm");
console.log("I am Awesome and so are you");


//after implementation
console.log("after vowelCount()");

console.log(vowelCount("Hello"));
console.log(vowelCount("Tim"));
console.log(vowelCount("hmmm"));
console.log(vowelCount("I am Awesome and so are you"));


console.log("*****************");




//----------------//
//-------map------//
//----------------//


//doubleValuesWithMap
/**
 * write a function called doubleValuesWithMap which accepts an
 * array and returns a new array with all the values in the array
 * passed to the function double
 */

function doubleValuesWithMap(arr){
    return myMap(arr, function(val){
        return val * 2; 
    })
}

//testArrays
let values5 = [1,2,3,4,5];
let values6 = [10,20,30,40,50];

//before implementation
console.log("before doubleValuesWithMap()");
console.log(values5);
console.log(values6);

//after implementation
console.log("after doubleValuesWithMap()");
console.log(doubleValuesWithMap(values5));
console.log(doubleValuesWithMap(values6));


console.log("*****************");


//valTimesIndex
/**
 * Write a function called valTimes which accepts an array and
 * returns a new array with each value multiplied by the index it is 
 * currently at in the array
 */

function valTimesIndex(arr){
    return myMap(arr, function(val, idx){
        return val* idx;

    });
}


//before implementation
console.log("before valTimeIndex");
console.log(values5);
console.log(values6);

//after implementation
console.log("after valTimeIndex");
console.log(valTimesIndex(values5));
console.log(valTimesIndex(values6));



console.log("*****************");



//extractKey
/**
 * Write a function called extractKey which accepts an array of objects
 * and some key and returns a new array with the value of that key in 
 * each object
 */

//answer
function extractKey(arr, key){
    return myMap(arr, function(val){
        if(typeof val === "object"){
            return val[key];
        }
        return val;
    });
}


//test array
let namesArr = [
    {name:"elie"},
    {name:"tim"},
    {name:"Matt"},
    {name:"Colt"},
    ]

//before implementation
console.log("before extractKey()");
console.log(namesArr);

//after implementation
console.log("after extractKey()");
console.log(extractKey(namesArr, "name"));


console.log("*****************");


//extractFullName
/**
 * Write a function called extractFullName which accepts an array of
 * objects and returns a new array with the value of the key with a name
 * of "first" and the value of a key with the name of "last" in each object,
 * concatenated together witha space
 */

//answer
function extractFullName(arr){

    return myMap(arr, function(element){
        let string = element.first+ " " + element.last;

        return string;
    });
}

//testArray
let firstLastNames = 
    [
        {first:"Elie", last: "Schoppik"},
        {first:"Tim", last: "Garcia"},
        {first:"Matt", last: "Lane"},
        {first:"Colt", last: "Steele"}
    ];

//before implementation
console.log("before extractFullName()");
console.log(firstLastNames);

//after implementation
console.log("after extractFullName()");
console.log(extractFullName(firstLastNames));






//----------------//
//------filter----//
//----------------//





//filterByValue
/**
 * Write a function called filterByValue which accepts an array of objects
 * and a key andreturns a new array with all the objects that contain
 * that key.
 */

//answer
function filterByValue(array, keyName){
    return myFilter(array, function(element){
        return element[keyName] === true;
    });
}


//test Array
let peopleAndCats = 
    [
        {first:"Elie", last: "Schoppik"},
        {first:"Tim", last: "Garcia", isCatOwner: true},
        {first:"Matt", last: "Lane"},
        {first:"Colt", last: "Steele", isCatOwner: true}
    ];

//before implementation
console.log("before filterByValue");

console.log(peopleAndCats);

//after implementation
console.log("after filterByValue");

console.log(filterByValue(peopleAndCats, "isCatOwner"));


console.log("*****************");



//find
/**
 * Write a function called find which accepts an array and a value and
 * returns the first element in the array that has the same value as the
 * second paramenter or undefined if the value is not found in the array
 */

//answer
function find(arr, value){
    return myFilter(arr, function(element){
        return element === value;
    });
    return undefined;
}

//test arrays
let values7 = [1,2,3,4,5];
let values8 = [6,7,8,9,10];


//before implementation
console.log("before find()");
console.log(values7);
console.log(values8);


//after implementation
console.log("after find()");
console.log(find(values7, 3));
console.log(find(values8, 3));



console.log("*****************");



//findInbj
/**
 * Write a function called findInObj which accepts an array object, a key, and some
 * value to search for and returns the first foud value in the array
 */


//answer
function findInObj(arr, key, value){
    return myFilter(arr, function(element){
        return element[key] === value;
    });
};


//before implementation
console.log("before findInObj()");
console.log(peopleAndCats);

//after implementation
console.log("after findInObj()");
console.log(findInObj(peopleAndCats,"first", "Tim"));