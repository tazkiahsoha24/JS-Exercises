/* JavaScript code here */
console.log("external");

// Task 2

function sumArray(arr){
    var sum = 0;
    arr.forEach(function(value, index) { 
        sum = sum + value;
        
    });
    return sum;
}
console.log(sumArray([2, 4, 5, 6, 7]));