console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return 'Hello, ' + name + '!';
}
// Remember to call the function to test

console.log( helloName( 'Mark' ) );

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  let answer = firstNumber + secondNumber;
  return answer;
}

console.log( 'The answer is:', addNumbers( 5, 8 ));

// 4. Function to multiply three numbers & return the result
function multiplyThree( num1, num2, num3 ){
  let answer = num1 * num2 * num3;
  return answer;
}

console.log( 'The numbers multiplied together are:', multiplyThree( 4, 7, 16 ));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else {
    return false;
  }
}

console.log( 'Is this number positive:', isPositive( 5 ));

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  let theLastItem = array.pop();
  return theLastItem;
}

console.log( 'The last item in the array is:', getLast( [1, 2, 3] ));
console.log( 'The last item in the array is:', getLast( [] ));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
let i = 0;
function find( value, array ){
   for( let i = 0; i < array.length; i++ ){
    if ( value === array[i] ){
      return true;
    } 
  }
  return false; 
}

console.log( 'The value exsists inside the array:', find( 8, [2, 3, 5, 8] ));
console.log( 'The value exsists inside the array:', find( 9, [2, 3, 5, 8] ));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  return string.charAt(0) === letter;

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( array ) {
  let sum = 0
  for( let i = 0; i < array.length; i++ ){
    sum += array[i];
  }
  // TODO: loop to add items
  return sum;
}

console.log( 'The sum of the array is:', sumAll( [2, 5, 67] ));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function positiveArray( array ){
  let newArray = [];
  for( let i = 0; i < array.length; i++ ){
    if (array[i] > 0){
      newArray.push(array[i]);
    }
  }
  return newArray;
}

console.log( 'The positive numbers in the array are:', positiveArray( [1, -2, 3, -4, 5, -6, 7] ));
console.log( 'The positive numbers in the array are:', positiveArray( [-1, -2, -3, -4, -5, -6, -7] ));
console.log( 'The positive numbers in the array are:', positiveArray( [-1, -2, 3, 4, -5, -6, 7, 0] ));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// 11a. Create a function that takes a number as an argument. 
// Add up all the numbers from 1 to the number you passed to the function.

function numSum (number){
  let sum = 0;
  for( let i = number; i >= 1 ; i-- ){
    sum += i;
  }
  return sum;
}

console.log(numSum( 3 ));
console.log(numSum( 8 ));
console.log(numSum( 10 ));
console.log(numSum( 23 ));

// 11b. Create a function that takes an array of numbers and return both 
// the minimum and maximum numbers, in that order.

function minMaxArray ( array ){
  let min = array[0];
  let max = array[0];

  for ( let i = 0; i < array.length; i++ ){
    if (array[i] < min){
      min = array[i];
    }
    if (array[i] > max){
      max = array[i];
    }
  }
  return [min, max];
}

console.log( 'The smallest and largest numbers in the array are:', minMaxArray( [10, 23, 4, 891, 6, -3] ));
console.log( 'The smallest and largest numbers in the array are:', minMaxArray( [1, 2, 3, 4, 5, 6, 7] ));