// 2. Write a JavaScript program to find the maximum number in an array. 

// const arr =[1,2,3,4,545,7,7,]

// const result=Math.max(...arr)
// console.log(result)



// 3. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).

// function isPalindrome(str) { 

//     return str === str.split(”).reverse().join(”); 

//   }

//   console.log(isPalindrome("5qw dbnksdfc"))


// 4. Write a JavaScript program to reverse a given string. 


// const reverseString = (str) => str.split('').reverse().join(''); 
// console.log(reverseString("hello"))

// 5. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.


// function even(arr){
// return arr.filter(num=>num%2===0)

// }
// console.log(even([2,4,5,8,9,14]))



// Write a JavaScript program to calculate the factorial of a given number. 

// function fact(num){
//     if(num === 0 ||num ===1 ){
//         return 1
//     }else{
//       return  num *fact(num-1)
//     }
// }

// console.log(fact(0))



// 7. Write a JavaScript function to check if a given number is prime. 


// function isPrime(num) { 

//     if (num <= 1) return false; 

//     for (let i = 2; i <= Math.sqrt(num); i++) { 
//         console.log(Math.sqrt(num))
//         console.log(i)

//       if (num % i === 0) return false; 

//     } 

//     return true; 

//   } 
//   console.log(isPrime(10))



//8 Implement a function that flattens a nested array in JavaScript, converting it into a single-level array.

// function nestedArray(data) {
//     let result = []

//     for (let val = 0; val < data.length; val++) {
//         if (Array.isArray(data[val])) {
//             result = result.concat(nestedArray(data[val]))
//         } else {
//             result.push(data[val])
//         }
//     }
//     return result;
// }


// console.log(nestedArray([1,2,3,4,[5,6,7]]))



