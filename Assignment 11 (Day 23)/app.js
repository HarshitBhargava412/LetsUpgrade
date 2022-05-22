// var arr = ["A", "B", "C", "D", "E"];
//
// for (let i = 0; i < 5; i++) {
//     console.log(arr[i]);
// }
//
// console.log("");
//
// for (let e1 of arr) {
//     console.log(e1);
// }
//
//
// var arr = [1, 2, 3, 4, 5];
//
// // Add data from End
// arr.push(100);
//
// // Add data from Start
// arr.unshift(500);

// // Delete Data from End
// var res1 = arr.pop();
//
// // Delete Data from Start
// var res2 = arr.shift();
//
// console.log(res1, res2);
// console.log(arr);
//
//
// let arrLen = arr.length;
// console.log(arrLen);
//
//
// let sliceArr = arr.slice(2, 5);
// console.log(sliceArr);
//
//
// let splicedArr = arr.splice(2);
// console.log(splicedArr);

// let spliceArr1 = arr.splice(2, 3);
// let spliceArr2 = arr.splice(2, 3, 100, 200, 300);
//
// console.log(spliceArr1);
// console.log(spliceArr2);


// let arr = [1, 2, 3, 2, 4, 5];
//
// let foundValue = arr.find((element) => {
//     return element === 2;
// });
//
// let foundValueIndex = arr.findIndex((element) => element === 2);
//
// console.log(foundValue, foundValueIndex);


let arr = [5, 1, 4, 2, 3];

// arr.sort();
arr.sort((a, b) => b-a);

let contactArray = arr.concat([100, 200, 300], [1000, 2000, 3000]);

console.log(contactArray);
console.log(arr);