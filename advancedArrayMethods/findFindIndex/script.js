console.log("eek")

//findUserByUsername
/**
 * Write a function called findUserByUsername which accepts an
 * array of objects, each with a key of username, and a string. The
 * function should return the first object wiht the key of username
 * that matches the string passed to the function. If the object is 
 * not found, return undefined.
 */

//answer
function findUserByUsermame(arr, key, name){
    return arr.find(function(el){
        return el[key] === name;
    })

}

//test array

const users = 
    [
        {username: "mLewis"},
        {username: "akagen"},
        {username: "msmith"}
    ];

//output
console.log("findUserByUsername()");
console.log( findUserByUsermame(users, "username", "mlewis"));
console.log( findUserByUsermame(users,"username", "msmith"));

console.log("**************");


//removeUser
/**
 * Write a function called removeUser which accepts an array of
 * objects, each with a key of username, and a string. The function 
 * should remove the object from the array and return this object. 
 * If the object is not found, return undefined
 */

function removeUser(arr, username){
    let rm = arr.findIndex(function(el){
        return el.username === username;
    })
    if(rm !== -1){
        const removedUser = arr.splice(rm, 1)[0];
        return removedUser;
    }
    return undefined;
}

//output
console.log("removeUser Test");
console.log(removeUser(users, "akagen"));
console.log(removeUser(users, "akagen"));