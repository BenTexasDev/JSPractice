
/*** JAVASCRIPT 1 CERTIFICATION PRACTICE/EXAM STUDY GUIDE
 * By: Ben Barela Jr
 * Title: Salesforce Developer
 */
let jobTitle = 'Engineer';

function printJobTitle(){
    changeJobTitle();
    console.log('I am an ' + jobTitle);
}

function changeJobTitle(){
    let jobTitle = 'Architect';
}

printJobTitle(); // I am an Engineer


/************************************************************************** */

// Variable Hosting. Can only hoist with var. let,,const will throw a Refference Error.

name = 'Astro';
function printName() { 
    console.log('Current character is ' + name);
}

printName();
var name;/* <-- No error here since the variable is hoisted.let name;  
let name; <-- This will throw an uncaught ReferenceError.const name = ''; 
const name; <-- This will throw an uncaught ReferenceError. */
// Example 2: This example shows the use of strict mode to prevent using undeclared variables"use strict"; 
// enable strict mode in current code scopetopic = "Process Automation"; //<-- This will throw an error


/************************************************************************** */

// Wrapper Objects: String, Boolean, and Numbers cannot contain properties.

let amount = 5124.5858
amount.toFixed(2)
let amount2 = new Number(5124.5858);

// typeof keyword returns the type of the value
console.log(typeof amount);// "number"

// instance of keyword returns true of a value is an instance of an object
console.log(amount2 instanceof Number); // true

/************************************************************************** */
// STRING Methods

let firstName = 'Martin';
let lastName = 'Gressner';
let fullName = firstName + ' ' + lastName;
console.log(fullName); //print Martin Gressner

/**
 * padEnd() - method pads the current string with a given string (repeated, if needed) so that the resulting
 * string reaches a given length. The padding is applied from the end of the current string.
 * 
 * padEnd(targetLength)
 * padEnd(targetLength, padString)
 */
 const str1 = 'Breaded Mushrooms';

 console.log(str1.padEnd(25, '.')); // expected output: "Breaded Mushrooms........"
 const str2 = '200';
 console.log(str2.padEnd(5)); // expected output: "200  "



 /**
  * substring() - method returns the part of the string between the start end end indexes or to the end of the string.
  * 
  * substring(indexStart)
  * substring(indexStart, indexEnd)
  */


const str = 'Mozilla';
console.log(str.substring(1, 3)); // expected output: "oz"
console.log(str.substring(2)); // expected output: "zilla"

/**
 * replace() - method returns a new string with some or all matches of a patter replace by a replacement. The pattern can be 
 *  string or a regec, and the replcement can be a string or a function to be called for each. If patter in is a string, only the first
 * occurence will be replaced.
 * 
 * 
 */

 const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

 console.log(p.replace('dog', 'monkey')); // expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"

 const regex = /Dog/i;
 console.log(p.replace(regex, 'ferret')); // expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"

 /***
  * toLowerCase() & toUpperCase()
  * concat()
  * includes()
  * indexOf()
  * replace()
  * search()
  * trim()
  * 
  */
 
/************************************************************************** */

// BIG INT
// allows storing operating large numbers and can be created by an apending n.
let pageViews = 12344444444444444444566677n;
console.log(pageViews);//prints 12344444444444444444566677n

//let pageViews = BigInt(12344444444444444444566677);
//console.log(pageViews); //prints 12344444444444444444566677n

/************************************************************************** */

// SYMBOL
// allows creating a unique identifier. Can be invoked by creating the symbol function.

let names = Symbol();
let label = Symbol('label');

let field1 = Symbol('field');
let field2 = Symbol('field');

console.log(field1 === field2);// prints false
console.log(Symbol('field') === Symbol('field')); //prints false

/************************************************************************** */

// JSON.stringify -serialize
// converts Javascript object or value to JSON String

const customer = {
    firstName: 'Olivia',
    lastName: 'Parker',
};

JSON.stringify(customer); // prints "{"firstname":"Olivia","lastName":"Parker"}""


// JSON.parse() -deserialize
/***
 * JSON.parse() - method parses a JSON string, constructing the Javascript value or object described by the string.
 * An optional reviver function can be provide to perform a transformation on the resulting object before it is returned.
 * 
 */
 const json = '{"result":true, "count":42}';
 const obj = JSON.parse(json);
 
 console.log(obj.count);
 // expected output: 42
 
 console.log(obj.result);
 // expected output: true
 


/************************************************************************** */

// Array Static Methods

//Array.from() - Creates a new array from another array, iterable object, or array-like object.
console.log(Array.from('123')); // returns ['1','2','3']

//Array.of() - Creates an array instance from an indefinite number of arguments or type of arguments.
console.log(Array.of('jan','feb','mar')); // returns ['jan','feb','mar']

//Array.isArray() - Used to determine wether the passed value is an array.
console.log(Array.isArray(['joe',32,true])); // returns true

/************************************************************************** */

// PUSH - add element(s) at end.
const arr = [1,4,9,16];
arr.push(25); 
console.log(arr); // returns [1,4,9,16,25]

// POP - removes the last element from an array and returns that element.

const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop()); // expected output: "tomato"

console.log(plants); // expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();
console.log(plants); // expected output: Array ["broccoli", "cauliflower", "cabbage"]


// SHIFT() - removes the first element from an array and returns that removed element.
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1); // expected output: [2, 3]

console.log(firstElement); // expected output: 1

// unshift() - adds one or more elements to the beginning of an array and returns the new length of the array.
// unshift(element0)
// unshift(element0, element1)
// unshift(element0, element1, /* ... ,*/ elementN)
const array2 = [1, 2, 3];

console.log(array2.unshift(4, 5)); // expected output: 5

console.log(array2); // expected output: Array [4, 5, 1, 2, 3]


/**
 * The concat() - methos is used to merge two or more arrays. This method does not change the existing
 * arrays, but instead returns a new array.
 * 
 * concat()
 * concat(value0)
 * concat(value0, value1)
 * concat(value0, value1, ... , valueN)
 * 
 * [...array1,...array2] - also merges arrays,
 * ...array can be used to expand the array of sales users into its constituent elements.
 * 
 * [,,] - empty array
 * 
 * 
 */


 const array11 = ['a', 'b', 'c'];
 const array21 = ['d', 'e', 'f'];
 const array31 = array11.concat(array21);
 
 console.log(array31); // expected output: Array ["a", "b", "c", "d", "e", "f"]


 /** 
  * 
  * ACCESS VALUE OF EACH KEY - object[key]
  * */

 /**
  * The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
  * flat()
  * flat(depth)
  * 
  */
  const arr1 = [0, 1, 2, [3, 4]];

  console.log(arr1.flat());
  // expected output: [0, 1, 2, 3, 4]
  
  const arr2 = [0, 1, 2, [[[3, 4]]]];
  
  console.log(arr2.flat(2));
  // expected output: [0, 1, 2, [3, 4]]


  //REDUCE
  /**
   * The reduce() method executes a user-supplied “reducer” callback function on each element of the array, in order, 
   * passing in the return value from the calculation on the preceding element. The final result of running the reducer 
   * across all elements of the array is a single value.
   * 
   * 
   */
  

/************************************************************************** */


// SORT
/***
 * 
 * The sort() method sorts the elements of an array in places and returns the sorted array. The default order is ascending.
 * 
 */
 const months1 = ['March', 'Jan', 'Feb', 'Dec'];
 months1.sort();
 console.log(months1); // expected output: Array ["Dec", "Feb", "Jan", "March"]
 const arrayOne = [1, 30, 4, 21, 100000];
 arrayOne.sort();
 console.log(arrayOne); // expected output: Array [1, 100000, 21, 30, 4]
 


// SPLICE
// splice() - changes the contents of an array by removing or replcing existing elements and or adding new elements.
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

// splice() example 2

let array = ['one',1,'two',2,3,4];

for(let val of array){
    if (val === 3){
        array.push('three');
    }
}
console.log(array); // returns ['one',1,'two',2,3,4,'three']

// starting at index 1 we want to delete 1 value.
array.splice(1,1);
console.log(array); // returns ['one','two',2,3,4,'three']
// starting at index 2 we want to delete 3 values and replace with 'four'
array.splice(2,3,'four');
console.log(array); // returns ['one','two','four','three']


// SLICE
/**
 * 
 * slice() - the slice method returns a shallow copy of a portion of an array into a new array selected from start to end.
 * start and end represent the index of items in that array. The original array will not be modified.
 * slice()
 * slice(start)
 * slice(start, end)
 */
 const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

 console.log(animals.slice(2));
 // expected output: Array ["camel", "duck", "elephant"]
 
 console.log(animals.slice(2, 4));
 // expected output: Array ["camel", "duck"]
 
 console.log(animals.slice(1, 5));
 // expected output: Array ["bison", "camel", "duck", "elephant"]
 
 console.log(animals.slice(-2));
 // expected output: Array ["duck", "elephant"]
 
 console.log(animals.slice(2, -1));
 // expected output: Array ["camel", "duck"]
 
 console.log(animals.slice());
 // expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

 //JOIN
 /***
  * The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object),
  * separated by commas or a specified separator string. If the array has only one item, then that item will 
  * be returned without using the separator.
  * join()
  * join(separator)
  */
 
  const elements = ['Fire', 'Air', 'Water'];

  console.log(elements.join());
  // expected output: "Fire,Air,Water"
  
  console.log(elements.join(''));
  // expected output: "FireAirWater"
  
  console.log(elements.join('-'));
  // expected output: "Fire-Air-Water"

  //TRIM
  /**
   * The trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string.
   *
   */
  
   const greeting = '   Hello world!   ';

   console.log(greeting);
   // expected output: "   Hello world!   ";
   
   console.log(greeting.trim());
   // expected output: "Hello world!";
   
/************************************************************************** */

// DATES
/**
 * GetMethods
 * SetMethods
 * UTCMethods
 * toString()
 * toDateString()
 * toUTCString()
 * toISOString()
 * toLocaleDateString()
 * getDate/setDate
 * 
 */

// Date object can be used to represent single moment in time. It contains a Number that represent miliseconds (called UNIX epoch)
// The Date() constructor can be used to create a new Date object.

const now = new Date();
console.log(now); // returns today's date, time, gmt , day. basically the current daye
/************************************************************************** */
/**
 * Date.now() - method returns the number of miliseconds elapsed since jan. 1, 1970
 */
// this example takes 2 seconds to run
const startt = Date.now();
console.log('starting timer...'); // expected output: starting timer...
setTimeout(() => {
  const millis = Date.now() - startt;
  console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`); // expected output: seconds elapsed = 2
}, 2000);


/************************************************************************** */


/**
 * Date.parse() - method parses a string representation of a date and returns the number of miliseconds since jan 1 1970.
 * 
 * Date.parse(dateString)
 * Implicit call: new Date(dateString)
 */

 const unixTimeZero = Date.parse('01 Jan 1970 00:00:00 GMT');
 const javaScriptRelease = Date.parse('04 Dec 1995 00:12:00 GMT');
 
 console.log(unixTimeZero);// expected output: 0
 console.log(javaScriptRelease);// expected output: 818035920000
 



/************************************************************************** */

/**
 * 
Date.UTC() - accepts parameters similiar to the date constructor, but treats them as UTC. Returns the number of miliseconds since Jan 1st, 1970.

Date.UTC(year)
Date.UTC(year, month)
Date.UTC(year, month, day)
Date.UTC(year, month, day, hour)
Date.UTC(year, month, day, hour, minute)
Date.UTC(year, month, day, hour, minute, second)
Date.UTC(year, month, day, hour, minute, second, millisecond)
 */

const utcDate1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));
const utcDate2 = new Date(Date.UTC(0, 0, 0, 0, 0, 0));
const start = new Date();

console.log(start - new Date(Date.UTC(2000,0,0,0,0,0)));// shows the number of miliseconds that have passed since. Jan 1, 2000 UTC output: 698095944595
console.log(utcDate1.toUTCString()); // expected output: Fri, 02 Feb 1996 03:04:05 GMT
console.log(utcDate2.toUTCString()); // expected output: Sun, 31 Dec 1899 00:00:00 GMT



/************************************************************************** */
// Integer
/***
 * 
 * Number.isInteger() method determines whether the passed value is an integer.
 * 
 * Number.isInteger(value)
 * 
 */

 function fits(x, y) {
    if (Number.isInteger(y / x)) {
      return 'Fits!';
    }
    return 'Does NOT fit!';
  }
  
  console.log(fits(5, 10)); // expected output: "Fits!"
  
  console.log(fits(5, 11)); // expected output: "Does NOT fit!"
  

  /**
   * Number.parseFloat() = method parses an argument and returns a floating point number. If a number can not be parsed from the
   * argument, it returns NaN.
   * Number.parseFloat(string)
   */

   function circumference(r) {
    if (Number.isNaN(Number.parseFloat(r))) {
      return 0;
    }
    return parseFloat(r) * 2.0 * Math.PI ;
  }
  
  console.log(circumference('4.567abcdefgh'));
  // expected output: 28.695307297889173
  
  console.log(circumference('abcdefgh'));
  // expected output: 0
  
  /************************************************************************** */

  /**
   * SYNTAX and OPERATORS
   * Destructuring Assignment Syntax - is JS expression that can be used to retrieve values from an array or the properties and
   * assign them directly to variables. When destructuring an object, curly braces({}) are used. When destructuring an array ([])
   * brackets are used.
   * 
   * null == undefined
   * null == null
   * 
   * COERCION is the process where a value is converted from one data ype to another. The original data type can be primitive or a non-primitive
   * , but the resulting data type will be primitive exceot for cases when TypeError is throw or NaN is returned.
   * 
   * Loose Equality Operator - ( == or != ) is used to determine if two operands are equal or not. It coerces primitives to numbers except for null
   * and undefined (null only loosley equals to null and undefined)
   * 
   * Comparison Operators - ( >=, >, <=, or <) are used to determine are used to determine if one value is greater than, less than, or equal to
   * the other value. It coerces primitives ot numbers.
   * 
   * Logical Operators - ( OR(||, AND(&&), and NOT(!)) are logical operatoes used to determine if an expression evaluates to true or false. They
   * coerce primitaves to boolean.
   * 
   * Arithmetic Operators - (- , +, /, and *) are used to subtract, add, divide, or multiple values. They coerce primitaves to numbers, except when +
   * is used, if one operand is a string the result is a string.
   * 
   * Unary Operators - (+ and ++) converta a non-numeric value to a number. Similary, the minus (-) and decrement (--) operators convert, but negate
   * the rsult. They coerce primitives to numbers.
   * 
   * Bitwise Operators - (|,&,^,and ~) are used to treat operands as a set of 32-bit binary digits and operate on the individual bits. They coerce primitive
   * numbers.
   * 
   * 
   * COERCION WITH OTHER PRIMITIVIES
   * 
   * Symbol - Evaluates to true in a boolean coercion. Cannot be implicitly coerced to a string or number data type. Can be coerced explicitly to a string.
   * Null - evaluated as false in a boolean coercion, evaluated as 0 in a numeric coercion, convert to null in a string coercion.
   * Undefined - Evaluated to false in a boolean coercion, to NaN in a number, and undefined in a string coercion.
   * NaN - Evaluated as false in a boolean coercion, Nan in a string coercion.
   * 
   * 
   * Implicit Type Conversion - Data type conversion is performed automatically on a variable where the coercion type (number , string, or boolean)
   * depends on the operator used in the expression.
   * 
   * Explicit Type Conversion - Data type conversion of a variable is performed by writing code to manually convert one data type to another using 
   * native Javascript functions.
   * 
   * Explicitt Type Conversions - String, Boolean, Number
   * 
   * TYPECASTING
   * 
   * Number() - When used with the new keyword a number object is created. When used as a metho a number primitive is returned.
   * String() - When used with the new keyword a string object is created. When used as a method a string primitive is returned.
   * Boolean() - When used with the new keyword a new boolean object is created. When used a method, a boolean primitive is returned.
   * toString() - Method to convert a number to a string
   * parseInt() - Method used to parse a string argument to an integer or NaN
   * parseFloat() - Method used to parse an argument and return a floating point number.
   * 
   * 
   * Arrays
   * 
   * Contant Array - If an array is initialized using the const keyword, its elements can still be modified.
   * 
   * Sets and Maps
   * Set Object - is used to store unique values of any type
   * Map Object - is used to store key-value pairs of data.
   * 
   */


  /***
   * Debugging and Error Handling: module
   * 
   * 8 Different Types
   * 
   * Handling Errors - Errors that are unhandled stop code execution. The try..catch..finally statement is a way
   * to ahdnle and respond to errors.
   * 
   * Throwing errors - A custom expception can be created and thrown using the throw keyword. The program is terminated
   * if the error is not handled.
   * 
   * Error Object -An error is simply an instance of the Error object. Its two most prominent properties are message and name.
   * 
   * Types of Errors:
   * 
   * Error - represents a runtime error. This can be used to create a custom error.
   * ReferenceError - Represents an invalid regereance such as an undeclared variable.
   * SyntaxError - Represents an error caused by incorrect syntax in the code.
   * TypeError - Represents an error caused by a parameter or variable of an invalid type.
   * EvalError - Represents an error regarding the eval() function.
   * InternalError - Represents an internal error in the Javascript engine. For Example, if there is excessive recursion.
   * RangeError - Represents an error that occurs when a numberic variable is outside its valid range.
   * URI - Represnts an error when encoding or decoding an invalid URI.
   * 
   * 
   * 
   * 
   */

  /**
   * try..catch statement
   */

  function getDaysOfWeek(date){
    try {
      let days = ['Sun','Mon','Tues','Wed','Thu','Fri','Sat'];
      return days[date.getDay()];
    } catch {

      // Error occured. Don't retrun a value
      return null
    }
  };

  const theDays = getDaysOfWeek('2015-10-10');
  console.log(theDays); // prints null

  /**
   * Using methods of the console API
   * 
   * Console API - contains several methods to aid in debugging. Three commonly used
   * methods are console.log(),console.error(), and console.info()
   * 
   * console.log() - method is a general way of logging information to the console. The message can be a single string containing zero or more
   * substitution values
   * console.error() - method outputs an error message to the console.
   * console.info() - method is similar to console.log, but some browsers may display the information
   * differently.
   * There are 4 log levels - verbose, info, warnings, and errors. The default log levels in the console are info, warnings, and errors.
   * console.warn() - method writes a warning to the console.
   * console.table() - method writes an object as a table.
   * console.group() - method creates a new inline group, which indents the output by an additional level.
   * console.groupEnd() - method exits the current inline group.
   * console.assert() - method writes an error message if the specified expression is false.
   * console.trace() - method writes a stack trace to the console
   * console.time() - method starts a timer.
   * console.timeLog() - method logs the value of the specified timer.
   * console.timeEnd() - method ends a timer.
   * 
   */

  /**shows how to use various methods of the console object */

  console.log('Starting timer ...');
  console.group('Timer Group');
  console.time('timer');
  console.log('Logging timer...');
  console.timeLog('timer');
  console.log('ending timer');
  console.timeEnd('timer');
  console.groupEnd('Timer Group');
  const users = [
    {user: 'Jon', title:'IT Analyst'},
    {user: 'Ashley', title: 'HR Specialist'},
  ];
  
  console.log('Logging table..');
  console.table(users);
  console.assert(users[0].title === 'HR Analyst','The first user is not an HR Analyst');



  /** using finally */

  function showDayOfWeek(date){
    let days = ['Sun','Mon','Tues','Wed','Thu','Fri','Sat'];
    let day;
    try {
      day = date.getDay();
      date = `${date.getFullYear()} - ${date.getMonth() + 1}`
    } catch {

      // Error occured. Don't retrun a value
      return null
    }
  };

  const theDay = getDaysOfWeek('2015-10-10');
  console.log(theDay); // prints null

  /**
   * 
   * Debugger Statements
   * 
   * debugger statement can be used to pause code execution.
   * Debugger Pane: can also be used to inspect, edit, and watch local, and global variables wihle stepping through code.
   * 
   * breakpoints can be set via the Sources panel in the browser and used to pause code execution.
   * Breakpoints - can be set in JS code to pause the execution of code.
   * Type of Breakpoints:
   * Line-of-code - a line-of-code breakpoint allows pausing code execution before a specific line of code. It can also be conditional.
   * DOM Change - a DOM change breakpoint pauses code execution on the code that changes a DOM node or its children
   * XHR/FETCH - pauses code execution when the request URL of an XHR contains a certain string.
   * Event Listener - pauses on the event listener that runs after a specific event is executed.
   * Exception - pauses on line of code that throws a caught or uncaught exception.
   * Function - can be used to pause code execution when a specific function is called.
   * 
   * Stepping Through Code:
   * Resume - option allows resuming the execution of the code up to the next breakpoint.
   * Step Into - option allows stepping through the executioon of the next function, one line at a time.
   * Step Over - allows executing the next function without stepping into it.
   * Step Out - options alloqs stepping out of the current function.
   * "Step into" commmand provided by the browser DevTool can be used to step through code inside the function block on line at a time.
   * /Step over" command will just execute the function and skip the function internals, and pause after the function is called.
   * 
   * 
   * Console
   * 
   * The console of a web browser, such as the Chrome DevTools Console, can be used to log message and execute Javascript Expressions for
   * the purpose of debugging. It allos inspection of variables and ensuring thaat the code executes correctly.
   * 
   * Sources tab - can be used to open and highlight the code that caused the massage to appear. A link in the logged messages can also be
   * used to access the code.
   * 
   * Browser messages - also logs messages to the console, usually when there's a problem on the page
   * 
   * The console can be made persistent during browser navigation and refresh by enabling the "Preserve log" option in the console
   * settings.
   * 
   */

  //console.error() example

  function raisePower(num, pwr) {
    if(isNaN(num || isNaN(pwr))){
      console.error('Please enter numbers!')
    }
    return num ** pwr;
  };

  raisePower('three',3);

  /*** OBJECT, FUNCTIONS, AND CLASSES 25% ***/

  /****
   * Defining functions - using a function declaration requires the 'function' keyword and a function name.
   * Executable Code block - the executable code block of the function is contained within the curly braces.
   * Return value - a function may return a value using the return keyword.
   * 
   * In Javascript, function are first class because they are treated as values. Here are several examples where functions
   * can be used like primitive values:
   * 
   * Assigned to a variable - a function can be assigned to a variable similar to a primitive value.
   * Stored in an array - a function can be stored in an array similar to a primitive value.
   * Passed and returned - a function can be passed to another function as an argument. A function may also
   * be returned from a function.
   * Property of an object - A function can be assigned to a property of an object. When this is done, the function is referred to as
   * a method.
   * 
   * Type of Functions:
   * 
   * The type of function depends on how it is used.
   * 
   * Named Functions - The standard function declaration creates a name function. The name is provided after the function keyword.
   * Ananymous Functions - When a function is defined inside a larger expression, it may not have a name. This is called an anonymous function.
   * Recursive Function - A recursive function calls itself as a part of the executing block code. This pattern is used to solve 
   * specific problems.
   * Outer Functions - Functions may be nested. THe outer function encloses other function(s) inside its code block.
   * Inner Functions - Functions may be nested. An inner function is contained within the code block of another function.
   * Immediatley Invoked Function Expression - function that is invoked at the same time it is defined is termed an IIFE or iffy.
   * 
   */

  // This example shows different types of functions

  function fib(num1, num2){ // 'fib' is an 'outer' function. It is also a 'named'
    let num3 = function() { // 'inner' function is an 'anonymous' function.
      return num1 + num2;
    } (); // this function is also invoked immediatley using the parentheses. Therefore, it is an IIFE.
    return [num1,num2,num3]
  };

  const arrs = fib(0,1);

  console.log(arrs); // (3) [0,1,1]

  //*** ARROW FUNCTIONS** */


  /***
   * Arrow function considerations.
   * 
   * When the function exactly has a single parameter, the parenthesis are optional and can be removed.
   * In certain cases, where a function body contains a single statement only for example, the braces are optional.
   * When the braces are removed the return keyword is implied and should also be removed.
   * 
   * 
   */

  
  const increment = function(num){
    return num + 1;
  }

  const incrementArrow = (num) => {
    return num + 1;
  }

  const incrementArrowNoParenthesis = num => num + 1;

  /**
   * If the function does not have a parameter, an empty set of parenthesis is used.
   * 
   */

  const random = function () {
    let num = Math.floor(Math.random() * 10) + 1;
    return num > 5 ? 0 : num;
  }
  const randomArrow = () => {
    let num = Math.floor(Math.random() * 10) + 1;
    return num > 5 ? 0 : num;
  }

/** 
 * Recursion - When a function calls itself, it is called recursion. A recursive function uses recursion
 * to solve a specifi problem.
 * 
 */

// This example shows a recursive function that is used to compute a Fibonacci sequence, which is a series of
// numbers in which each number is the sum of the previous two numbers, starting with 0 and 1.

function fibin(sequence, len){
  let size = sequence.length;
  if(size >= len){
    return sequence; // If condition has been met, return the sequence
  }
  sequence.push(sequence[size - 2] + sequence[size - 1])
  console.log('2 is here ' + sequence[size - 2]);
  console.log('1 is here ' + sequence[size -1]);
  return fibin(sequence,len); // Call itself with the 'return' keyword.
};

const fibSeq = fibin([0,1],10);

console.log(fibSeq);
//(10) [0,1,1,2,3,5,8,13,21,24]
//0,1,1,
