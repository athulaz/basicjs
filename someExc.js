// some () -true/false


// var a =[1,2,3,5,7]
// console.log(a.some(i=>i%2==0));

// var employees=[ 

//     [1,"anu","developer","calicut",3,65000],
//     [2, "amal", "developer", "kochi", 5, 100000],
//     [3, "neha", "hr", "calicut", 2, 35000],
//     [4, "nikhil", "tester", "trissur", 1, 15000],
//     [5, "vivek", "developer", "calicut", 4, 85000]
    
//     ]

//     // min 5 yr exp

// console.log(employees.some(i=>i[4]>=5));

// products=[
//     [1,'hide and seek',50,20],
//     [2,'lays',20,80],
//     [3,'oreo',40,100],
//     [4,'parleG',25,0],
//     [5,'tiger',20,30],
//     [6,'unibic',60,20],
//     [7,'good day',70,0]
// ]


// console.log(products.some(i=>i[2]<=23));


// include() - direct checking of elements, no condtions used here


var a=[1,2,3]
// console.log(a.includes(2));

// for each() - map is better option , because no further operation can be done

// console.log(a.map(i=>i**2));
// a.forEach (i=>console.log(i**2))

// products=[
//     [1,'hide and seek',50,20],
//     [2,'lays',20,80],
//     [3,'oreo',40,100],
//     [4,'parleG',25,0],
//     [5,'tiger',20,30],
//     [6,'unibic',60,20],
//     [7,'good day',70,0]
// ]

// // display all products stock values
// products.forEach (i=>console.log(i[3]))

// flat()

// a=[
//     [1,34,65,8],
// [7,4,67,8],
// [2,52,9,77]
// ]

// console.log(a.flat().filter(i=>i<=10));

// var a=[1,2,3,4]
// console.log(a. reverse());
// console.log(a);

var s="Our mission is to provide 100% placements to students those who enrol for our specialised courses."
// find longest word in s

console.log(s.split(" ").reduce((a,b)=>a.length>b.length?a:b));