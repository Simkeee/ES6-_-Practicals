// 1. Write a function that capitalizes the first letter of each string argument it receives.
// Function arguments: ['hello', 'there','ES', 6]
// Output: ['hello', 'there','ES']
function capitalizeFirstLetter(arr) {
    var newArr=[];
    for (let i = 0; i < arr.length; i++) {
        if(typeof arr[i] == 'string'){
            var element = arr[i][0].toUpperCase() + arr[i].slice(1);
            newArr.push(element);
        }
    }
    return newArr;
  }
  console.log("1. Zadatak: " + capitalizeFirstLetter(['hello', 'there','ES', 6]));


// 2. Write a function that calculates sale tax that should be paid for the product of the given price.
// Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia).
// Input: [{ name: “Banana”, price: 120 }, {name: “Orange”, price: 100}]
// Output: [{ name: “Banana”, price: 144 }, { name: “Orange”, price: 120 }] // product full price
// Output2: [ 24, 20 ] // tax only
const taxRate = 0.2;
var products =[{ name: 'Banana', price: 120 }, {name: 'Orange', price: 100}]

 let calculateSalesTax = products.map(product => {
  product.price = product.price*taxRate;
  return product;
})
  
console.log("2. Zadatak: " + JSON.stringify( calculateSalesTax));


// 3. Write a function that increases each element of the given array by the given value. If the value is
// omitted, increase each element of the array by 1.
// Input: [4, 6, 11, -9, 2.1], 2
// Output: [6, 8, 13, -7, 4.1]
var givenValue = 2;
var givenArray = [4, 6, 11, -9, 2.1];
if (givenValue) {
  var increasesEachElement = givenArray.forEach((element, index, array) => {
      array[index] = element + givenValue;
  })
}
else{
  var increasesEachElement = givenArray.forEach((element, index, array) => {
    array[index] = element + 1;
}
)}
console.log("3. Zadatak: " + givenArray);


// 4. Write a function that filters all even elements of the array.
// Input: [6, 11, 9, 0, 3]
// Output: [6, 0]
const array4 = [6, 11, 9, 0, 3];
const evenArr = array4.filter(element => element % 2 === 0);
console.log("4. Zadatak: " + evenArr);


// 5. Write a function that filters all the strings from the given array that contain substring JS or js.
// Input: [&#39;compiler&#39;, &#39;transpiler&#39;, &#39;babel.js&#39;, &#39;JS standard&#39;, &#39;linter&#39;]
// Output: [&#39;babel.js, &#39;JS standard&#39;]
const array5 = ['compiler','transpiler', 'babel.js', 'JS standard', 'linter'];

const containSubstringJSorjs = array5.filter(e => e.includes("JS") || e.includes("js"));
console.log("5. Zadatak: " + containSubstringJSorjs);


// 6. Write a function that filters all integer numbers from the given array.
// Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
// Output: [7, 8]
const array6 = [1.6, 11.34, 9.23, 7, 3.11, 8];
const filtersAllIntegerNumbers = array6.filter(e => Number.isInteger(e));
console.log("6. Zadatak: " + filtersAllIntegerNumbers);


// 7. Write a function that filters all integer arguments that contain digit 5.
// Function arguments: 23, 11.5, 9, &#39;abc&#39;, 45, 28, 553
// Output: [45, 553]
function filterIntegersWithDigit5(...args) {
  const intArgs = args.filter(element => Number.isInteger(element));
  const filteredArgs = intArgs.filter(element => element.toString().includes('5'));
  return filteredArgs;
}

console.log("7. Zadatak: " + filterIntegersWithDigit5(23, 11.5, 9, 'abc', 45, 28, 553));


// 8. Write a function that returns indexes of the elements greater than 10.
// Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
// Output: [1, 2, 5]

const array8 = [1.6, 11.34, 29.23, 7, 3.11, 18];
function getIndexesGreaterThan10(array8) {
  let resultArr=[];
  array8.map((element, index) => {
    if (element > 10) {
      resultArr.push(index);
    }
  })
  return resultArr;
}
console.log("8. Zadatak: " + getIndexesGreaterThan10([1.6, 11.34, 29.23, 7, 3.11, 18]));


// 9.
// a. Create an array of persons. A person should be an object with name and age properties.
// Experiment with enhanced object literals.
// b. Write a function that prints out the names of persons older than 25.
// c. Write a function that check if there is a person older than 40.
// d. Write a function that checks if all persons are older than 20.
///a///
var persons = [{name:"Marko", age:25}, 
                {name:"Jelena", age:45},
                {name:"Danilo", age:36},
                {name:"Jovana", age:41},
                {name:"Miljan", age:12}]
                
///b///
var printNamesOfPersonsOlderThan25 = persons.filter(person => person.age > 25);
var res = printNamesOfPersonsOlderThan25.map(person => person.name);
console.log("9.b Zadatak: " + JSON.stringify(res));

///c///
var hasPersonOlderThan40 = function () {
  if(JSON.stringify (persons.filter(person => person.age > 40)) =="[]")
  {
    return false
  }
  else{
    return persons.filter(person => person.age > 40).length-1 + ' pearsons.'
  }
} 
console.log("9.c Zadatak: " +hasPersonOlderThan40());

///d///
var areAllPersonsOlderThan20 =
persons.every(person => person.age > 20);
console.log("9.d Zadatak: " + areAllPersonsOlderThan20);


// 10. Write a function that checks if the given array is an array of positive integer values.
// Input: [3, 11, 9, 5, 6]
// Output: yes
// Input: [3, -12, 4, 11]
// Output: no
var arr10 = [3, 11, 9, 5, 6];
var isArrayPositiveIntegers = function () {
  if(arr10.every(val => Number.isInteger(val) && val > 0))
  {
    return "yes";
  }
  else{
    return "no";
  }
} 
console.log("10.Zadatak: " + isArrayPositiveIntegers());

// 11. Write a function that calculates the product of the elements of the array.
// Input: [2, 8, 3]
// Output: 48
const calculateProduct = (arr) => {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
};
const array11 = [2, 8, 3];
console.log("11.Zadatak: " + calculateProduct(array11));


// 12. Write a function that calculates the maximum of the given array.
// Input: [2, 7, 3, 8, 5.4]
// Output: 8

const array12 = [2, 8, 1, 5, 12, 3];

const maxArr = array12.find(e => 
  e == Math.max(...array12));

console.log("12.Zadatak: " + maxArr);