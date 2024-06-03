

// 1
// 1  1
// 1     1
// 1        1
// 1     1
// 1  1   
// 1  

// var n = 4;

// console.log("1");

// for (var i = 1; i < n; i++) {
//     var s = "1";
//     for (var j = 0; j < 2 * i - 1; j++) {
//         s += " ";
//     }
//     s += "1";
//     console.log(s);
// }


// for (var i = n - 2; i >= 1; i--) {
//     var s = "1";
//     for (var j = 0; j < 2 * i - 1; j++) {
//         s += " ";
//     }
//     s += "1";
//     console.log(s);
// }

// console.log("1");

// input     a=[[5,9],[54,89,8],[12,65,32],[1,2,44]]

var ab = [1, 2, 4, 5, 6, 8, 10];
function findMissingNumbers(a) {
    var max = a
    var min = a
    var missingNumbers = [];

    for (var i = min; i <= max; i++) {
        if (!a.includes(i)) {
            missingNumbers.push(i);
        }
    }

    return missingNumbers;
}

console.log(findMissingNumbers(ab));
