// Factorial Program
var factNum = prompt("Enter the Number for Factorial :");

var factorial = 1;
function fact(num) {
    for (var i = 1; i <= num; i++) {
        factorial = factorial * i;
    }
}

fact(factNum);
alert("The Factorial of "+factNum+" is "+factorial);


// Sum of Arrays
var array = [2, 3, 4, 45, 34, 55, 32, 44, 56, 23, 34, 99, 56, 46, 25, 27, 46, 86, 34, 12, 23, 8, 4, 7, 3, 78, 45];

var sum = 0;
for (var num in array) {
    sum = sum + parseInt(num);
}

alert("The sum of the numbers in the array is "+sum);