
// bi-weekly
var newNub = [82, 63];

var arr = [33, 24, 28, 47, 0];
arr.push(" " + newNub);
console.log(arr);
document.getElementById("arr").innerHTML = arr  + "<br />";


let getEvenNumbers = () => {
    let arr = [4,5,7,8,14,45,94,30,76];
    	
    let the_evens = arr.filter(number => number % 2 == 0);
    console.log(the_evens);
   document.getElementById("the_even").innerHTML = the_evens.length; 
}
    
getEvenNumbers();
//console.log(the_evens.length);


var arr = [3,5,6,7,8,4,2,1,66,77]
const returnEvenArray = (arr) => {
   return arr.filter(el => {
      return el % 2 === 1;
   })
};
console.log(returnEvenArray(arr));
console.log(returnEvenArray(arr).length);


let form = document.getElementById('signup');
let name = form.elements[0];
let email = form.elements['email'];

//onsting
a = 6;
var a;
addNums = (20, 30)
console.log(a, 'aaaa');

function addNums(a, b) {
   console.log(a+b, 'hoisted function')
}



         /* JS TASK 1*/

// a js that computes student grades
var grade = 40;

if(grade < "1") {
  console.log("input not accepted");
} else if (grade <= 39 ){
  console.log("failed");
} else if (grade <= 49 ) {
  console.log("pass");
} else if (grade <= 59) {
  console.log("average");
} else if (grade <= 69) {
  console.log("good");
} else if (grade <= 79) {
  console.log("very-good");
} else if (grade <= 89) {
  console.log("excellent");
} else if (grade <= 100) {
  console.log("distintion");
} else if (grade >= 101) {
  console.log("input not accepted");
} else {
  console.log("input not accepted")
}




            /* JS TASK 2*/
//1. convert temperature to and from celsius and fahreenheit
//formula: c/5 = (f-32)/9

var temp =
celsius: c/5
fahreenheit: (f-32)/9

function degCelsius() {
    c/5
}
function degFahreenheit() {
    (f-32)/9
}



//2. create a new string adding "Sc" in front of a given string
//if string begins wit "Sc" return to the original string

 function originalString(word) {
     if (word.indexOf[0] !== ('s') && word.indexOf[1] !== ('c')) {
         return "original string"
     } else { return "sc" + word }
 }


 //3.


            /*JS TASK 3*/

//1. a function that accepts a string as parameter
// convet the first Letter of each string to upperacase and print
function capitalLetter(string)
{
    let oldstring = string.toLowerCase().split(' ');
    return string && string[0].toUpperCase() + string.slice(1);
}
console.log(capitalLetter('samuel is good'))

function checkChar(str){
let strArr = str.toLowerCase().split(' ');
for(i = 0 ; i < strArr.length ; i++){
strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].substring(1);
}
return strArr.join(' ');
}
console.log(checkChar("sAmueL is goOd"));

// function capitalize(str) {
// return str.split(' ').map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(' ')
// }
// console.log(capitalLetter('samuel is good'))



//2. function that returns a passed string with letters in alphabetical order.
function alphabetInOrder(str)
  {
return str.split('').sort().join('');
  }
console.log(alphabetInOrder("maKe"));


//3. a function accepts an array of numbers 
//returns the largest number of an array

var array = [11, 76, 81, 10 , 53, 52, 64];
var largestNum = 1;

for (i=0; i<=largestNum; i++){
    if (array[i]>largestNum) {
        var largestNum=array[i];
    }
}
console.log(largestNum);


//4. a function that accepts an array and an element
//returns the array with all occurences of the elements removed.

var nestedArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9, 10, 11, 12]];
for (var i = 0; i < nestedArr.length; i++) {
  for (var j = 0; j < nestedArr[i].length; j = nestedArr[i].length) {
    console.log(nestedArr[i][nestedArr[i].length-1]);
  }
}

var nestedArr = [[1, 2, 3], [4, 5, 6], [7, 8], [9, 10, 11, 12]];
let printEvens = nestedArr.filter(number => number % 2 == 0);
for (var i = 0; i < nestedArr.length; i++) {
  for (var j = 0; j < nestedArr[i].length; j = nestedArr[i].length) {
    console.log(nestedArr[i][j]);
  }
}