// Lesson 1
console.log ("Hello World!") ;//English
console.log ("Hej Världen!"); //Swedish

//Lesson 2
console.log("I'm awesome");

//Lesson 3
//Declare x 
var x;  
x = 10;
console.log(x);

//e.g
var a = 10;
var b = 5;
let c = 10 + 5;
console.log(z);

// x value
var x = 10;
console.log("The value of x is " + x);


// y // Lesson 4
var y ;
var y = "Jim"; // my string
console.log("This is a string " +  y);

//eg // my new string obj
let y1 = {name:'Jim'}
let y2 ='James';

y2 = "James";

console.log(y1);
// {name:'James '}
console.log(y2);
// {name: 'James'}

// Rounding number - Lesson 5//
var z = 7.25;
console.log(z);

var a = Math.round(7.25);
console.log(a);

//highest value// 1st way
let d = Math.max(7.25, 7)
console.log("Return highest value" + " " + d);
//d is equal to result//

//2nd way
let result =Math.max(z,a)
console.log(result);
console.log("highest value"  + "  " +  result);


//Arrays - Lesson 6

//let shoppingList = newArray ();
let shoppingList = [];
//what i think the value is 
shoppingList[100] = 'some value';
console.log(shoppingList.length);

// created  myArray
let favoritePets = [ 'Dog', 'Fish', 'Bird' ] ;
console.log(favoritePets);
//Daan favorite pet was added
favoritePets.push( 'baby pig');
console.log(favoritePets);

// More strings - Lesson 7
let myString = "this is a test"
console.log(myString);
console.log(myString.length);

//Lesson 8

let greeting = "Hello World!"; // greeting is a string
console.log(greeting);
console.log(typeof greeting);


let foo = 32; // foo is a number
console.log(foo);
console.log(typeof foo);

let favoriteFruits = ['banana', 'strawberry', 'mango']; // favoriteFruits is a Array
console.log(favoriteFruits);
console.log(typeof favoriteFruits);


let person = {name: 'Anders', age: 32}; // person is a object
console.log(person);
console.log(typeof person);
// dont know what i should do here
if (typeof foo , typeof person ) {
   
    console.log("return type");
}
console.log(foo = person);

//lesson 9 // change from x to letter (s) because errors return with declared x
let X = 7;
 X = 7 % 3;
console.log(X); // (X is 7) = 7 % 3 = 1; 
//displays 1 because 7 divided by 3 is 2 with a remainder of 1
// 7 % 3 = 1  
// Math (7 / 3) = 2
// 3 * 2 = 6
// 7 - 6 = 1 (Remainder)


// Lesson 10  My new Array
// Array can hold multiple types number,string, object

let myArray = [25, 'Hello', {name: 'Paul'}];
console.log(myArray);


// Infinity
// this is just my example but didnt understand much

let maxNumber = Math.pow(6/0, 10/0);

if (6/0 === 10/0) {
    console.log ("Let's call it infinity");
}

console.log(6/0 === 10/0); // result true

