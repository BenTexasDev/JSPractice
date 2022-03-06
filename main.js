
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
   * Traditional Functions - 'this' keyword is set to the objejct that invoked the function, Otherwise, the this keyword 
   * defaults to the global object.
   * Arrow Functions - 'this keyword' does not default to the global object. The value of 'this' is determined by the context
   * of where the function is called.
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

/**
 * Infinite Recursion - is when a recursive function executes an infinite loop due to missing an exit condition.
 * Eventually, an error will be thrown by Javascript when the maximum call stack has been exceeded.
 * 
 * 
 * Example:
 * 
 * function multiply(numbers){
 * return numbers.pop() * multiply(numbers);
 * }
 * 
 * var values = [1,2,3,4,5];
 * multiply(values);
 * 
 * 
 */

/***
 * 
 * High-Order Functions
 * 
 * A higher-order function is a function that operates on another function either by recieving it as an argument
 * or returning it as a return value.
 * 
 */

//Example
// The 'map' method of the Array object is a higher-order function because it accepts a function as an argument
const nums = [1,2,3,4,5];
const newNums = nums.map(num => num * 2);
console.log(newNums);

//This example shows a higher-order function because it returns a function which is then used later.
const createMultiplyFunction = function(num){
  return num1 => num1 * num;
};

const multiplyBy10 = createMultiplyFunction(10);
console.log(multiplyBy10(5)); // (5) [2,4,6,8,10]

// Note that since a function is returned, the following is also allowed:
createMultiplyFunction(10)(5); // produces the same result as above (50)

/***
 * 
 * Asynchronous Functions
 * 
 * A function that is passed into another function is called a callback function. Callbacks are central
 * to asynchronous coding in Javascript.
 * 
 * Most Javascript code runs in synchronous manner, but asynchronous code is a necessary part of most JavaScript Programs.
 * Synchronous - statements are executed in sequence one after another. 
 * Note: Javascript code loads and runs to completion without stopping.
 * 
 * Asynchronous - Code operates outside the normal sequence of execution. As an example an event handler is set up
 * for a button, but it is not executed until the button is clicked.
 *
 */

// In this example, the 'showData' function is passed into 'addEventListener' as a call back.
// Code execution doen't stop at that point. When the button is clicked, the 'date' and 'intro values
// are displayed below 'Program is running'

let date5;
let intro;
const start5 = document.getElementById('start');
const showDate = function() {
  console.log(`${intro} ${date}`);
}

//start5.addEventListener('click',showDate);

date5 = new Date();
intro = "Today's date is";
console.log('Program is running!');

/***
 * 
 * Function Hoisting
 * 
 * The main difference between function declarations and function expressions is that function declarations are hoisted.
 * This means they are available at all times even if they are defined later in the code. They can be invoked before they are
 * defined.
 * 
 */

// In this example, the function declaration is invoked before it is defined and no error occurs. However, when the function
// expression is invoked before it is degined, an error occurs.

sumDeclaration(5,10);
//sumExpression(50,100);

//Expression
const sumExpression = function(num1, num2){
  console.log(num1 + num2); // Uncaught Reference Error: Cannot access 'sumExpression'
};
//Declaration
function sumDeclaration(num1, num2){
  console.log(num1 + num2); //15
}

/**
 * Closure - allows a function access to its parent scope even after the function that created the parent scope has completed execution.
 * 
 * This code shows an example of closure. The 'createScoreFunction' returns a function that adds to the scores array and then prints the number
 * of values. The 'scores array is private and cannot be manipulated except using 'addScore'.
 * 
 */

function createScoreFunction(){
  scores = [];
  return function(score) {
    scores.push(score);
    console.log(`Total scores: ${scores.length}`);
  }
};

// The function returned to 'addScore' still has access to 'scores' throug closure.
const addScore = createScoreFunction();
addScore(70);
addScore(90);
addScore(100);

/**
 * Apply, Call, Blind
 * 
 * apply() - method calls a function with a given 'this' value, and 'arguments' provided as an array or an array-like object.
 * apply(thisArg)
 * apply(thisArg, argsArray)
 * 
 * blind() - method creates a new function that, when called, has its 'this' keyword set to the provided value,
 * with a given sequence of arguments preceding any provided when the new function is called.
 * bind(thisArg)
 * bind(thisArg, arg1)
 * bind(thisArg, arg1, arg2)
 * bind(thisArg, arg1, ... , argN)
 * 
 * 
 * call() - method calls a function with a given 'this' value and arguments provided individually.
 * call()
 * call(thisArg)
 * call(thisArg, arg1)
 * call(thisArg, arg1, arg2)
 * call(thisArg, arg1, ... , argN)
 */


//apply()
 const numbersApply = [5, 6, 2, 3, 7];

 const max = Math.max.apply(null, numbersApply);
 
 console.log(max);
 // expected output: 7
 
 const min = Math.min.apply(null, numbersApply);
 
 console.log(min); // expected output: 2

 //blind()
 const module = {
  x: 42,
  getX: function() {
    return this.x;
  }
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42

//call()
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

console.log(new Food('cheese', 5).name);
// expected output: "cheese"


/**
 * 
 * Generators
 * 
 * generator function , which is degined with an asterisk(*), returns a generator that can be used with the next()
 * method to iterate over values. It uses the yield keyword internally to pause the function and return the value in the 
 * current iteration.
 * 
 * Instance Methods:
 * next() - method returns an object with two properties 'done' and 'value'. You can also provide a parameter to the 'next'
 * method to send a valute to the generator.
 * 
 * return() - method returns the given value and finishes the generator.
 * Note if return(value) is called on a generator that is already in "completed" state, the generator
 * will remain in "completede" state.
 * 
 * 
 * theow() - method resumes the execution of a generator by throwing an error into it and returns an object with two properties 
 * done and value.
 * value - The next value in the iteration sequence
 * done - This is true if the last value in the sequence has already been consumed. If the value is present alongside done,
 * it is the iterators return value.
 * 
 */
 function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator(); // "Generator { }"

console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.return('foo'));
/**
 * 
 * With a genreator function, values are not evaluated until they are needed. Therefore a generator allows us to degine
 * a potentially infinite data structure.
 * 
 */

 function* infinite() {
  let index = 0;

  while (true) {
      yield index++;
  }
}

const generators = infinite(); // "Generator { }"

console.log(generators.next().value); // 0
console.log(generators.next().value); // 1
console.log(generators.next().value); // 2
/** ITERATORS ** */

function* makeIterator() {
  yield 1;
  yield 2;
}

const it = makeIterator();

for (const itItem of it) {
  console.log(itItem);
}

console.log(it[Symbol.iterator]() === it) // true;

// This example show us generator(iterator) is iterable object,
// which has the @@iterator method return the it (itself),
// and consequently, the it object can iterate only _once_.

// If we change it's @@iterator method to a function/generator
// which returns a new iterator/generator object, (it)
// can iterate many times

it[Symbol.iterator] = function* () {
yield 2;
yield 1;
};


/**
 * JavaScript Object
 * 
 * A Javascript object is a data type that has properties associated with it. It is used for strong keyed collections and more
 * complex entities. In an object, property names and associated values are envlosed within curly braces ({}).
 * 
 * 
 */

// The following is an example of an object in Javascript.

let userNew = {
  firstname: 'Sam',
  lastName: 'Smith',
  age: 35,
  admin: true,
  created: new Date()
};


/**
 * Creating Objects
 * 
 * An object can be created using the Object() constructor, the object initializer( also called the object literal syntax), or
 * the Object.create() method.
 * 
 * Object Properties
 * 
 * A property name can be any valid JavaScript string or value that can be converted to a string. Properties of an object can be accessed using 
 * the dot notation or bracket notation.
 * 
 * 
 * Object Properties considerations
 * Name - if the name of a property is not a valid identifier, then it can only be access using the bracket notation. For Example when the property
 * name includes a space.
 * 
 * Dynamic Properties - when a property is not known until runtime, bracket notation can be used. A variable can be enclosed within the square brackets
 * to access a particular property.
 * 
 * Methods - A method defined inside an object is also a property of the object. The diference is that it is a propert that can be called.
 * 
 * Enumingerating Object Properties
 * 
 * 
 * for..in loop - A for..in loop can be utilized to traverse all the enumerable properties of an object and its prototype chain.
 * Object.keys(o) - method can be used to get an array of all the own enumerable property names of an object name 'o'.
 * Object.getOwnPropertyNames(o) - This method can be used to get all the own proepert names of an object named 'o'
 * 
 * Defining Object Methods
 * 
 * A function that is associated with an object is called a method. It is assigned as a property of an object and can be called in the contect of
 * the object.
 * 
 * Using 'this' keyword can be used within an object method to refer to the current object. It can be used to get the properties of the object.
 * 
 * Define Getters and Setters
 * 
 * A getter can be defined in an object to get the value of a specific property. A setter can be defined to set the value of a specific property. A 
 * getter is prefixed with 'get' while a setter is prefixed with 'set' and accepts one parameter.
 * 
 * 
 * Passing by Reference vs Value
 * 
 * In javascript, objects are automatically passed by regerence while primitives are passed by values.
 * 
 * The Arguments Object
 * 
 * Javascript allows any number of arguments to be passed into a function. They are automatically captured in non-arrow functions by dynamic object
 * called arguments.
 * 
 * OBJECT CLASS METHODS
 * 
 * assign() - this static method is used to copy all the enumerable own properties from one or more source objects to a target object.
 * entries() - This statis method can be used to get an array of all the key-value pairs of an object's own enumerable string properties.
 * values() - This static method can be used to get an array of all the vallues of an object's own enumerable string proeprties.
 * defineProperties() - This static method can be used to define new or modify existing properties of an object.
 * defineProperty() - can be used to work a single property.
 * freeze() - This static method freezes an object such that changes can be no longer made to it.
 * preventExtensions() - This static method prevents the addition of new properties to a specified object.
 * seal() - This static method prevents new properties from being added as well as changes from being made to descriptors.
 * is() - This satic method can be used to determine whether two values are the same value.
 * hasOwnProperty() - This instance method is used to determin whether an object contains the specified property as a direct property.
 * isPrototypeOf() - This instance method is used to determine whether an object is in the prototype chain of the specified object.
 * toString() - The instance method is used to get the string representation of the specified object.
 * valueOf() - The instance method is used to get the primitive value of the specified object.
 * 
 * 
 * Object Inheritance and Prototype Chain
 * 
 * Object inherit properties from at least one other object through the prototype chain. The prototype is the object from which the properties are inherited.
 * 
 */

// This example shows how to create an object using the Object() contructor.

let userNew2 = new Object();
userNew2.name = 'Sam';
userNew2.age = 35;
userNew2.admin = false;
userNew2.created = new Date();

// This example shows how to create an object using the Object.create() method.
let user3 = Object.create({});
user3.name = 'Isabel';
user3.age = 46;
user3.admin = false;
user3.created = new Date();

// access with dot notation vs bracket notation.
console.log(user3.name);
console.log(user3['name']);

//Enumerating Object Properties example/ Ways of listing/traversing properties
console.log('---------Enumerating---------');
for (let prop in user3){
  console.log(prop, user3[prop]);
}
console.log('---------Object keys----------');
console.log(Object.keys(user3));
console.log(Object.getOwnPropertyNames(user3));

// This object contains a gretting method. The greeting property is a function.
console.log('------Property Function-------');
let userGreeting = {
  firsName: 'Mary',
  lastName: 'Smith',
  age: 25,
  greeting(greet){
    console.log(`${greet} ${this.lastName}!`);
  }
};

userGreeting.greeting('Good Morning');

// This example shows how to define a getter in an object.. The getter returns the average score.
console.log('-------Getter--------');
let scorez = {
  quiz: 'Quiz 1',
  scorez: [90,70,60,50,40,100,60],
  get average() {
    if (this.scorez.length === 0) return 0;
    return this.scorez.reduce((sum,score) => sum + score, 0) / this.scorez.length;
  }
};
console.log(scorez.average);

// This example shows how to define a setter in an object.The setter adds to the scores array.
console.log('---------Setter-------');
let setScore = {
  quiz: 'Quiz 1',
  scores: [],
  set score(score){
    if (score >= 0) this.scores.push(score);
  }
};

setScore.score = 90;
setScore.score = 80;
setScore.score = 70;
console.log(setScore.scores);

// When a variable is passed by a value in function argument, the vallue of the variable is copied into the function.
// changes made to the variable inside the function does not affect the variable outside the function.
console.log('----Passing by Value----');
function passPrimitive(name){
  name = 'Jerry'
}
let person = 'Tom'
passPrimitive(person);
console.log(`Hi, my name is ${person}.`);

// When a variable is passed by reference in a function argument, the reference or address of the variable is passed into the
// function. Changes made to the variable inside the function will affect the variable outside the function.
console.log('-----Passing by Reference-----');
function passObject(settings){
  settings.on = true;
}
let conf = {device: 'microwave', on: false};
passObject(conf);
console.log(conf);

// This example function sums paramters passed to it and uses the arguments object to retrieve the parameters.
console.log('-----Arguments-----');

function add(){
  let sum = 0;
  for (let i in arguments){
    sum += arguments[i];// the arguments object is array-like
  }

  console.log(`The sum of the ${arguments.length} numbers is ${sum}`);

  // Standard array methods are not available in "Array-like" objects.
  // So, the following will throw an error.
  // arguments.sort();
}

add(62,34,45,93);

// In this example, Object.assign() is used inside the cloneObject function in order to clone any object passed in.
console.log('-----Cloning Object-----');
function cloneObject(obj){
  return Object.assign({}, obj);
};

// This example illustrates the grades object was clonsed and is an entirely different function.
let grades = {
  quiz: 'Quiz 1',
  grades: [90,70,60,50,40,100,60]
};

let newGrades = cloneObject(grades);
console.log(grades, newGrades);

/**
 * This example shows how to define an object named 'boardRoom' that inherits the properties and methods of another object named
 * meeting room.
 */
console.log('-----Inheritance-----');
let meetingRooms = {
  reservable() {
    if (this.hasOwnProperty('canReserve')) {
      return this.canReserve;
    } else {
      return false;
    }
  },
  location: 'mainBuilding'
};

let boardRoom = Object.create(meetingRooms);
boardRoom.canReserve = true;
boardRoom.capacity = 20;
boardRoom.location = 'satelite';

console.log(boardRoom.reservable());

/**
 * Modifying Prototypes
 * 
 * Prototypes allow to be modified and impact all instances of the object.
 */

/**
 * In this example, a "hello" method is added to the Animal prototype and then modified to illustrate how it impacts instance of the object.
 */
console.log('----Prototype Inheritance-----');
function Animal(name){
  this.name = name;
}

let cat = new Animal('Kitty');
let dog = new Animal('Puppy');

Animal.prototype.hello = function () { // create a function
  console.log(`Hi, my name is ${this.name}`);
}

cat.hello();
dog.hello();
cat.sound = function (){ console.log('meowwww..'); }
dog.sound = function (){ console.log('woooooof!!'); }

Animal.prototype.hello = function () {
  console.log(`${this.name}'s the name. What's yours?`);
}

cat.hello(); dog.hello(); cat.sound(); dog.sound();

/**
 * Sets and Maps
 * A set is object used to store unique values of any type. 
 * A map object is store key-value pairs of data.
 */
console.log('-----Sets-----');
let decades = [1990, 1990, 2000,2010,1990,2000,2020];
let uniqueDecades = new Set(decades);
uniqueDecades.add(1980);

console.log(uniqueDecades);
console.log('-----Maps-----');
// In this example, a map is used, instade of an object, for recording quiz scores since the data can be easier to work with.
let quizyScores = new Map();
quizyScores.set('quiz1', [100,90,80,95,60,60]);
quizyScores.set('quiz2',[75,85,90,80,55]);
quizyScores.set('quiz3', [65,60,45,70,50]);
console.log(quizyScores.values());


/**
 * Javascript classes
 * A class is used to create objects of the same kind. The class syntax in Javascript allows defining the properties and methods that should
 * be available on each object. For example, a class name 'User' may be created to create multiple user objects.
 * 
 * Class Constructor
 * The constructor creates a new object, runs with the provided parameters, and assigns properties using the 'this' keyword.
 * 
 * Classes are Executed in Strict Mode
 * Strict mode required stricter syntax. Code that would normally run outside a class will generate an error because the body of a class
 * executes in strict mode.
 * 
 * Getters and Setters
 * A getter can be added to a class to get the value of a property. A setter can be added to set the value of a property. 
 * A setter accepts exactly one parameter.
 * 
 * Static Methods
 * The static keyword can be used to implement a function that belongs to a class and not to any particular object of the class.
 * Such a method can be called on the class.
 * 
 * Class Inheritance
 * 
 * A class can inherit properties and methods of another class. For example, 'Employee' class can inherit the properties and methods of the 'User' class.
 * 
 * Extends - to allow a class to inherit the properties and methods of another class, the 'extends' keyword is used by the child class. The child class extends the parent class.
 * Prototype - Based - classes are based on prototype-based inheritance. Using the 'extends' keyword sets ChildClass.prototype.[[Prototype]] to ParentClass.prototype.
 * Expression - It is also possible to specify an expresson instead of a class after the 'extends' keyword. For instance a class can inherit from the result of
 * a funciton call.
 * 
 * Using the 'super' keyword
 * 
 * Classes provide the 'super' keyword which can be used inside the constructor of the child class to call the constructor of the parent class. Child classes
 * much user 'super' before using the 'this keyword' to assign values.
 * 
 */

//Defining a class - can be created using a class declaration or class expression

class ClassName { // The convention is to start the name of the class with a capital letter.
  constructor(){ } // adding the constructor is optional.
  method1(){} // There should be no comma between class methods.
  method2(){}
  method3(){}
}

// The basic syntax of a class expression is as follows:
// A class expression can be anonymous or named. The name is only visibile in the scope of the class expression.
let ClassName2 = class optionalName {
  constructor() {}
  method1() {}
  method2() {}
  method3() {}
}


// Creating an instance of a class
// In this example, the 'MeetingRoom' class is used to create different metting room objects.
console.log('-----Class Instance-----');
class MeetingRoom {
  constructor(available){
    if(available){
      this.reservable = true;
    }
  }
};

// An instance of 'MeetingRoom' is created using the 'new' keyword and passing in a parameter.

let boardRoomInstance = new MeetingRoom(true);
console.log(boardRoomInstance);

// Class Constructor
// In this example, the class 'User' is set up to create user objects.
console.log('-----Class Constructor-----');
class User{
  constructor(user,email) {
    this.user = user; // user and email are assigned to the instance using 'this;
    this.email = email;
  }
};

// An isntance of a 'User' is created by passing 'user' and 'email' as parameters.
let user1 = new User('team_lead', 'benbarela.tx@gmail.com');
console.log(user1);

// Invoking class Methods - once an object of a class has been created, if the class contains methods, they can 
// be called on the object.

//Static Methods
console.log('-----Static Methods-----');
class User1 {
  constructor(fName, lName){
    this.firstName = fName;
    this.lastName = lName;
  };

fullName() {
  return this.firstName + ' ' + this.lastName;
};
static isUser(obj){
  return obj instanceof User1;
  };
};

let user2 = new User1('Michael', 'Chin');
// The static method 'isUser' is used to check if an object is an instance of the 'User' class.
console.log(User1.isUser(user2));


// A class can inherit the properties and methods of another class. For example 'Employee' class can inherit the properties
// and methods of the 'User' class
console.log('-----Class Inheritance-----');
class User2{
  constructor(){
    this.validUser = true;
  };
  isUser() {
    return true;
  }
};

class Employee extends User2{
  isEmployee() {
    return true;
  }
};

let employee1 = new Employee();
console.log(employee1);
console.log(employee1.isUser());
console.log(employee1.isEmployee());


// Using the super keyword
// The super keyword is used to access and call functions on an object's parent.

console.log('-----User Super Keyword-----');
class User3{
  constructor(user, email){
    this.user = user;
    this.email = email;
  }
};

class Employee2 extends User3{
  constructor(user,email,id) {
    super(user,email);
    this.employeeId = id;
  }
};

let employ1 = new Employee('team lead', 'benbarela.tx@gmail.com', 345);
console.log(employ1);

class Rectangle {
  constructor(height, width) {
    this.name = 'Rectangle';
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log('Hi, I am a ', this.name + '.');
  }
  get area() {
    return this.height * this.width;
  }
  set area(value) {
    this._area = value;
  }
}

class Rectangle1 {
  constructor(height, width) {
    this.name = 'Rectangle';
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log('Hi, I am a ', this.name + '.');
  }
  get area() {
    return this.height * this.width;
  }
  set area(value) {
    this._area = value;ß
  }
}

class Square extends Rectangle1 {
  constructor(length) {
    this.height; // ReferenceError, super needs to be called first!

    // Here, it calls the parent class's constructor with lengths
    // provided for the Rectangle's width and height
    super(length, length);

    // Note: In derived classes, super() must be called before you
    // can use 'this'. Leaving this out will cause a reference error.
    this.name = 'Square';
  }
}

/**
 * Importing - the import keyword is used to access exported variables, functions or classes from another module.
 * The * character can be used to import all the exported features from a particular module.
 * 
 * Exporting - The export keyword must be used to allow variables, functions or classes to be accessible outside a particular
 * module. An export can be named or default. A module can have only one default export.
 * 
 * Considerations - Imports and exports can be renamed. Imported features are read-only but imported as live bindings. The path
 * of a module must be relative to the current location. Module imports are hoisted.
 * 
 * Javascript Modules
 * 
 * A module is a file containg code with its own top-level scope. Modules can load each, other in order to access the required features
 * for a specific purpose. For example, functions in one module can be called from another module.
 * 
 * Exporting
 * 
 * A top-level item within a module can be exported by using the export statement. It's possible to export functions, variables declared
 * using var,let or const, and classes. Exporting an item allows other modules to access it.
 * 
 * Named Exports - When using a named exports, each feature or item is referred to by its name upon export, which is also used to refer
 * to it upon import.
 * A named export required placing the 'export' keyword before a function, variable or class that needs to be exported. A single export statement
 * can also be used at the end of a module to export all the itesmt that need to be exported. See example below
 * 
 * Default Exports - A default export is used to export a default feature or item provided by a module. It required using the 'export default'
 * syntax.
 * A default export requires using the 'export default' syntax before the entity that needs to be exported. There can only be one default export per module,
 * and the exported entity may have no name.
 * 
 */

/**
 * This example shows a file structure that contains the main Javascript file (main.js) and two modules (data.js and helper.js).
 * The main.js file is the top-level module into which the module features are imported.
 * 
 * 
 * index.html
 * main.js
 * modules/
 *    data.js
 *    helper.js
 * 
 * 
 * To apple the top-level module to the HTML page, it needs to be imported in the HTMl code as follows. Note that modules automatically run
 * in strict mode and are deffered.
 * <script type="module" src="main.js"><script>
 * <script type="module"
 * 
 * //Javascript code here will be treated as a module.
 * console.log('This script block will be handled as a module and deffered);
 * <script>
 */

/*
export function add(num1, num2){
  return num1 + num2;
}

function add(num1, num2){
  return num1 + num2;
}

function subtract(num1, num2){
  return num1 - num2;
}

export{add, subtract};
*/

/**
 * Decorators
 * 
 * 
 * 
 * A decorator functoin is a wrapper function that is used to extend the behavior of another function. The wrapper recieves the original 
 * function as the parameter
 */

// A decorator function can be used to extend the behavior of another function.
console.log('-----Decorator------');
function displayName(name){
  console.log(name);
}

function displayNameDecorator(fn){
  return function(name) {
    const str = 'Welcome to the hotel ' + name + '!';
    fn(str);
  };


}
const customerName = displayNameDecorator(displayName);
customerName('John Wayne');