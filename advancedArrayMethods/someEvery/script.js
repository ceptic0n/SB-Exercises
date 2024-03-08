console.log("eek");

//----------------------------------//
//------Some Every Exercise--------//
//--------------------------------//


//hasOddNumber
/**
 * Write a function called hasOddNUmber which accepts
 * an array and returns true if the array contains
 * atleast one off number, otherwise it returns false
 */

//answer
function hasOddNumber(arr){
    return arr.some(function(el){
        return el % 2 !== 0;
    });
}

//output
console.log("hasOddNumber Test")
console.log(hasOddNumber([1,2,2,2,2,2,2,2,4]));
console.log(hasOddNumber([2,2,2,2,2,2,2,4]));


console.log("*****************");




//hasAZero()
/**
 * Write a funciton called has a Zero which accepts a number
 * and returns true if that number contains atleast one. 
 * Otherwise, the function should return false
 */

//answer
function hasAZero(num){
    let numArray = num.toString().split('').map(Number);
    return numArray.some(function(el){
        return el === 0;
    });
}

//output
console.log("hasAZero Test");
console.log(hasAZero(33321232131012));
console.log(hasAZero(1212121));

console.log("*****************");

//hasOnlyOddNumbers
/**
 * Write a funciton called hasOnlyOddNumbers which
 * which accepts an array and returns true if every single
 * number in the array is odd. If any of the values in
 * the array are not odd, the function should return false.
 */

//answer
function hasOnlyOddNumbers(arr){
    return arr.every(function(el){
        return el % 2;
    })
}

//output
console.log("hasOnlyOddNumbers Test");
console.log(hasOnlyOddNumbers([1,3,5,7]));
console.log(hasOnlyOddNumbers([1,2,3,5,7]));

console.log("*****************");


//hasNoDuplicates
/**
 * Write a function called hasNoDuplicates which accepts an
 * array and returns true if there are no duplicate values
 * (more than one element that has the same value as another).
 * If there are any duplicates, the function should return false.
 */

function hasNoDuplicates(arr){
    return !arr.some(function(compare, idx){
        return arr.some(function(test, testidx){
            return compare === test && idx !== testidx;
        })
    })
}

//output
console.log("hasNoDuplicates Test");
console.log(hasNoDuplicates([1,2,3,1]));
console.log(hasNoDuplicates([1,2,3]));


console.log("*****************");


//hasCertainKey
/**
 * Write a function called hasCertainKey which accepts
 * an array of objects and a key, and returns true if
 * every single object in the array contains that
 * key. Otherwise it should return false.
 */


//answer
function hasCertainKey(arr, key){
    return arr.every(function (el){
        return key in el;
    })
}

//test object
let catsAndPeople = 
    [
        {title:"Instructor", first:"Elie", last:"Schoppik"},
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
        {title: "Instructor", first: 'Matt', last:"Lane"},
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]

//output
console.log("hasCertainKey Test");
console.log(hasCertainKey(catsAndPeople, "first"));
console.log(hasCertainKey(catsAndPeople, "isCatOwner"));


console.log("*****************");


//hasCertainValue
/**
 * Write a function called hasCertain value which
 * accepts an array of objects and a key, and a value, 
 * and returns true if every single object in the array
 * contains that value fro the specific key. Otherwise it
 * should return false.
 */

//answer
function hasCertainValue(arr, key, value){
    return arr.every(function(el) {
        return key in key[value];
    });
}

//output
console.log("hasCertainValue Test");
console.log(hasCertainKey(catsAndPeople, "title", "Instructor"));
console.log(hasCertainKey(catsAndPeople, "fist", "Elie"));