console.log("eek");

//extractValue
/**
 * Write a function called extractValue which accepts
 * an array of objects and a key and returns a new
 * array with the value of each object at the key
 */

//answer
function extractValue(array, key){
    return array.reduce(function(output, element){
        output.push(element[key]);
        return output;
    },[]);
}

//testArray
const names = 
    [
        {name:"Elie"},
        {name:"Tim"},
        {name:"Matt"},
        {name:"Colt"}
    ]

console.log("extractValue() test");
console.log(extractValue(names, "name"));


console.log("*****************");


//vowelCount
/**
 * write a function called vowelCount which accepts a
 * string and returns an object with the keys as
 * the vowel and the values as the number of times the vowel
 * appears in the string. This function should be case 
 * indensitive so a lowercase letter and uppercase letter
 * should count
 */

//answer
function vowelCount(string){
    const vowels = "aeiouAEIOU"
    return Array.from(string).reduce(function(output, char){
        if(vowels.includes(char)){
            let lower = char.toLowerCase();
            output[lower] = (output[lower] || 0) + 1;
        }
        return output;
    },[]);
}

//output
console.log("vowelCount() tests");
console.log(vowelCount("Elie"))
console.log(vowelCount("Tim"))
console.log(vowelCount("Matt"))
console.log(vowelCount("hmmmm"))
console.log(vowelCount("I Am Awesome and so are you"));



console.log("*****************");



//addKeyAndValue
/**
 * Write a function called addKeyAndValue which
 * accepts an array objects and returns the array
 * of objects passed to it with each object now
 * including the key and value passed to the function.
 */

//answer
function addKeyAndValue(arr, key, keyValue){
    return arr.reduce(function(output, element){
        let newObj = {... element};
        newObj[key] = keyValue;
        output.push(newObj);
        return output;
    },[]);
}

//output
console.log("addKeyAndValue() test");
console.log(addKeyAndValue(names, "title", "Instructor"));


console.log("*****************");


//partition
/**
 * Write a function called partition which accepts an array 
 * and a callback and returns an array with two arrays inside 
 * of it. The partition function should run the callback 
 * function on each value in the array and if the result of 
 * the callback function at that specific value is true, the 
 * value should be placed in the first subarray. If the result 
 * of the callback function at that specific value is false, 
 * the value should be placed in the second subarray.
 */

//answer
function partition(arr, callback){
    return arr.reduce(function(output, element){
        if(callback(element)){
            output[0].push(element);
        } else {
            output[1].push(element);
        }
        return output;
    }, [[],[]]);
}

/**
 * let output = [[trueVal, trueVal],[falseVal, falseVal]];
 * true array index is output[0];
 * false array index is output[1];
 */

//test callback Functions
function isEven(val){
    return val % 2 ===0;
}

function isLongerThanThreeCharacters(val){
    return val.length > 3;
}

//test Arrays
let nums = [1,2,3,4,5,6,7,8];

let justNames = ["Elie", "Colt", "tim", "matt"];

//output
console.log(partition(nums, isEven));

console.log(partition(justNames, isLongerThanThreeCharacters));