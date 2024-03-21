console.log("eek")


/**
 * In this exercise, you'll refactor some ES5 code
 * into ES2015. Write your code in the sections with
 * a comment to "Write an ES2015 Version"
 */



/**
 * Same keys and values
 */


//ES5
function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
 }

//ES2015
function createInstructor(firstName, lastName){
    return{
        firstName,
        lastName
    }
}

/**
 * Computer Property Names
 */

//ES5
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"

//ES2015
var favoriteNumber = 42;

const instructor = {
    firstName:"Colt",
    [favoriteNumber]: "That's my favorite"
};




/**
 * Object Methods
 */

//old ES5
var instructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName + " says bye!";
    }
}

//new ES2015
const instructor = {
    firstName: "Colt",
    sayHi(){
        return "Hi!";
    },
    sayBye(){
        return `${[firstName]} says bye!`;
    }
}

/**
 * createAnimal Function
 * Write a function which generates an animal object.
 * The funciton should accept 3 arguments
 */

const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"

function createAnimal(species, verb, noise){
    const output = {
        species(){
            console.log([species]);
        },
        verb(){
            console.log([verb]);
        },
        noise(){
            console.log([noise]);
        }
    }

    return output;
}