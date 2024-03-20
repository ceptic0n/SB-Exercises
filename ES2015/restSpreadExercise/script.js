console.log("eek")

/**
 * Refactor the following function to use the rest operator
 * and an arrow function
 */

//pre ES2015
function filterOutOddsOLD() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
}


//ES2015
function filterOutOdds(...nums){
    return nums.filter(num => num % 2 ===0);
}


console.log("*******");

/**
 * findMin
 * Write a function caled findMin that accepts a variable
 * number of arguments and returns the smallest
 * argument.
 * Make sure to do this using the rest and spread operator
 */

//answer
function findMin(...num){
    return Math.min(...num);
}


/**
 * mergeObjects
 * Write a function called mergeOBjects that accepts two objects
 * and returns a new object which contains all the keys and values
 * of the first object and second object
 */

function mergeObjects(obj1, obj2){
    const newObj = {...obj1,...obj2}
    return newObj
}

/**
 * doubleAndReturnArgs
 * Write a function called doubleAndReturnArgs which accepts
 * an array and a variable number of argiments. The function should
 * return a new array with the original array values and all of additional
 * arguments doubled
 */

function doubleAndReturnArgs(arr, ...nums){
    const doubles = nums.map(num => num * 2);
    const newArr = [...arr, ...doubles];
    return newArr
}


/**
 * Slice and Dice!
 * For this section, write the following functions using rest,
 * spread and refactor these functions to be arrow functions!
 * 
 * Make sure that you are always returning a new array or objects and
 * not modifying the existing inputs
 */



/**
 * remove a random element in the items
 * array, and return a new array without that item
 * 
 */

function removeRandom(items){
    const rand = Math.floor(Math.random() * items.length);

    const output = [...items];
    return output.splice(rand, 1);
}


/**
 * return a new array with every item in array1 and array2
 */

function extend(array1, array2){
    const output = [...array1, array2];
    return output;
}

/**
 * return a new object with all the keys and values from
 * obj and a new key/value pair
 */

function addKeyVal(obj, key, val){
    const newObj = {...obj, [key]:val};
    return newObj
}

/**
 * Return a new object with a key removed
 */

// function removeKey(obj, key){
//     ???
// }


/**
 * Combine two objects and return a new object
 */

function combine(obj1, obj2){
    const output = {...obj1, ...obj2};
    return output
}


/**
 * return a new object with a modified key and value
 */

function update(obj, key, value){
    const output = {...obj, [key]:value};
    return output;
}