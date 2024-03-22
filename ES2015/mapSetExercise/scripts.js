console.log("eek")


/**
 * Maps and Sets Exercise
 */


/**
 * Quick Question #1
 * What does the following code return?
 */
new Set([1,1,2,2,3,4])
//answer
// 1, 2, 3, 4


/**
 * Quick Question 2
 * What does the following code return?
 */

// [...new Set("referee")].join("")

//answer
// ref


/**
 * Quick Question 3
 * What does the Map m look like after running 
 * the following code?
 */

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

//answer
// {[1,2,3]: true, [1,2,3]: false}



/**
 * Write a function called hasDuplicate which accepts
 * an array and returns true or false if that array
 * contains a duplicate.
 */

//answer
function hasDuplicate(arr){
    const noDupes = new Set(arr);
    return noDupes.size !== arr.length ? false : true
}

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false



console.log("*********");
console.log("*********");
console.log("*********");


/**
 * vowelCount
 * Write a function called vowelCount which accepts a
 * string and returns a map where the keys are numbers
 * and the values are the count of the vowels in the string
 */

function vowelCount(str){
    const vowels = "aeiou"
    let word = str.toLowerCase();
    const output = new Map();
    [...vowels].forEach(function(currentVowel){
        let vowelCount = 0;
        [...str].forEach(function(currentLetter){
            if(currentLetter === currentVowel){
                vowelCount ++;
            }
        })

        if(vowelCount !== 0){
            output.set(currentVowel, vowelCount);
        }
    });
    return output;
}

console.log(vowelCount('awesome')); // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
console.log(vowelCount('Colt')); // Map { 'o' => 1 }


