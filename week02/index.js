//Number 1 STRINGS 

let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString.length); // 1.2 length of stringH
// 1.3 removed commas from string and replaced with spaces using the replace function
myString= myString.replace(/,/g , " " );
console.log(myString); // 1.4 my string was succeeded

//Number 2 ARRAYS

let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
// this will add Mauro's favorite animal turtle to array
favoriteAnimals.push('turtle');// 2.1
console.log(favoriteAnimals);// 2.2 new array

//2.3 Jim's favorite animal was added with arr.splice(index, 0, item);

favoriteAnimals.splice(1, 0, "meerkat" ); //(index, 0, item)
console.log("the new array will be: blowfish", "meerkat", "capricorn", "giraffe", "turtle  ");// 2.4
console.log(favoriteAnimals); // 2.5 new array
// 2.6 log length of array
console.log("The array has a length of:",(favoriteAnimals.length));

//2.7 Jason don't like giraffe so animal was deleted from array

favoriteAnimals.splice(3, 1,  ) ;// giraffe deleted (index, 1), index= which place the animal was
console.log(favoriteAnimals); // 2.8 new array

//2.9 to get position or index of meerkat in array

console.log(favoriteAnimals.indexOf("meerkat")); //returns index as 1
//2.10 logs the index of meerkat
console.log("The item you are looking for is at index:",(1)); 

//MORE JAVASCRIPT
//1 Create a function that takes 3 arguments and returns the sum of the these arguments
let test = function (x, y, z) {
    return x + y + z ;
 }
 console.log(test(5, 7, 10));

 //2 Create a function named colorCar that receives a color, and prints out, 'a red car' for example.
function colorCar(color) {
 return "a" + " " + color + " " + "car";
  if(color === "red") {
   console.log("The car is red") }
   else{
   console.log("The car is not red")
     }
     };  
    console.log(colorCar("red"));

//3 Create an object and a function that takes the object as a parameter and prints out all of its properties and values.

  let player = {
    name: "Adam", age: 30
  };
// loop over values
  for (let value of Object.values(player)){
   }
   console.log(Object.values(player)); // returns a array property and value

  //4 Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)
function vehicleType ( color,code) {
 let string = "a" + " " + color + " ";
 if (code === 1) {
 string = string + "car";
   } else if (code === 2) {
   string = string + "motorbike";
   }
  return string;
   }
   console.log(vehicleType("blue", 2));

 //5 Can you write the following without the if statement, but with just as a single line with console.log(...);?
   console.log(3 === 3); // results are true

 //6 Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'
function vehicle (color, code, age) {
   let string = "a" + " " + color + " ";
    if (age === 1) {
    string = string + "new"; 
    }else if (age === 5) {
      string = string +  "used";
    }

    if(code === 1) {
    string = string + " " + "car";
    }else if (code === 5) {
      string = string + "motorbike";
    }
    return string;
    }
    console.log(vehicle("blue", 1, 5));

//7 Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
let vehicleList = ["motorbike", "caravan","bike", "bus", "car", "minivan"];
    console.log(vehicleList);

//8 How do you get the third element from that list?
let bike = vehicleList[2];
 console.log(vehicleList.slice(2)[0]);
 console.log("Third item in vehicleList is" +" " + "bike");

//9 Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".
function vehicle2(color, code, age) {
let string = "a" + " " + color + " ";
  if (age === 1) {
                    string = string + "new" + " ";
 }else if (age === 2) {
  string = string + "used";
 }
 string = string + vehicleList[code];
 return string;
 }
 console.log(vehicle2("green", 2, 1));

 //10 Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)
function advert() {
  let string = "Amazing Joe's Garage, we service ";

for (let i = 0; i < vehicleList.length; i++) {
 if (i === vehicleList.length -1) {
 string = string + "and" + " " + vehicleList[i] + "s.";
  }else {
  string = string + vehicleList[i] + "s,";
  }
  }
 return string;
 }
 console.log(advert());

 //11 What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?
 vehicleList.push("truck");
 console.log (" " , advert());
 console.log (vehicleList); // amount of vehicles in array

 //12 Create an empty object.
  let person = {};
  console.log(person);
  
  //13 Create an object that contains the teachers that you have had so far for the different modules.
  let school = {
    teacher1: "Tommy",
    teacher2: "Albert" ,
    teacher3: "Katya",
  }

  console.log(school);
   
  //14 Add a property to the object you just created that contains the languages that they have taught you.
     
   let name1 = {name: "Tommy", languages: "Html/Css"};
   let name2 = {name: "Albert", languages: "Github"};
   let name3 = {name: "Katya", languages: "Javascript"};

  console.log(name1, name2, name3);
  
  //15 Write some code to test two arrays for equality using == and ===. Test the following:
let x = [1, 2, 3];
let y = [1, 2, 3];
let z =y;

console.log(x == y); // false
console.log(x === y); // false
console.log(z == y); // true
console.log(z == x); // false

function equality(x, y) {
if ( x.length != y.length) {
    return false;
  }
for (let i = 0; i <x.length; i++) {
  if (x[i] != y[i]) {
   return false;
  }
  else {
    return true;
    }
  }
}

console.log(equality(x,y));

//THIS IS JUST AN EXAMPLE FOR ME TO TRAIN AND REMEMBER

var array1 = [4,8,9,10];
var array2 = [4,8,9,10];

function same(a,b){
  var same = a.length === b.length,
    result,
     len;
if(!same) { result = false }
  else {
// so far, they're the same
 result = true;
  len = a.length;
 for(var i=0;result !== false && i < len; i++) {
  if(a[i] !== b[i]) {
  result = false;
  }
  }
  }
    
return result;
}

console.log(same(array1, array2));

//16 Take a look at the following code:

let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;
//Does the order that you assign (o3 = o2 or o2 = o3) matter?
// It don't matter the order because they both have the same string value but different variables
console.log(o3 = o2);
console.log(o2 = o3);

//17 What does the following code return? (And why?)

let bar = 42;
typeof typeof bar;

console.log(typeof(bar)); // returns number because typeof = "bar" , bar = "number"
    



         


      
   
    
    
 









