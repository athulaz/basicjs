// // var a=[1,2,3,4,5,6]
// // console.log(a.find(i=>i%2==0));

// // products=[
// //     [1,'hide and seek',50,20],
// //     [2,'lays',20,80],
// //     [3,'oreo',40,100],
// //     [4,'parleG',25,0],
// //     [5,'tiger',20,30],
// //     [6,'unibic',60,20],
// //     [7,'good day',70,0]
// // ]

// // display price of oreo

// // console.log(products.filter(i=>i[1]=="oreo")[0][2]);
// // console.log(products.find(i=>i[1]=="oreo")[2]);


// // var employees=[ 

// //     [1,"anu","developer","calicut",3,65000],
// //     [2, "amal", "developer", "kochi", 5, 100000],
// //     [3, "neha", "hr", "calicut", 2, 35000],
// //     [4, "nikhil", "tester", "trissur", 1, 15000],
// //     [5, "vivek", "developer", "calicut", 4, 85000]
    
// //     ]

// //     // find experience of neha

// //     console.log(employees.find(i=>i[1]=="neha")[4]);

// // // find salary of employee with id 5

// // console.log(employees.find(i=>i[0]=="5")[5]);

// // // reduce - to evaluate all elements and give an output

// // var a=[1,2,3,4,5]
// // //sum
// // console.log(a.reduce((a,b)=>a+b));
// // // greatest
// // console.log(a.reduce((a,b)=>a>b?a:b));
// // // lowest
// // console.log(a.reduce((a,b)=>a<b?a:b));


// var employees=[ 

//     [1,"anu","developer","calicut",3,65000],
//     [2, "amal", "developer", "kochi", 5, 100000],
//     [3, "neha", "hr", "calicut", 2, 35000],
//     [4, "nikhil", "tester", "trissur", 1, 100000],
//     [5, "vivek", "developer", "calicut", 4, 85000]
    
//     ]

//     // find employee with lowest experience
// //     console.log(employees.reduce((a,b)=>a[4]<b[4]?a:b)[1]);
// //     //find total salary of all employee
// //     console.log(employees.reduce((a,b)=>a[5]<b[5])); // only there sholud be number type data

// // console.log(employees.map(i=>i[5]).reduce((a,b)=>a+b));

// // find employee name with highest salary

// console.log(employees.reduce((a,b)=>a[5]>b[5]?a:b)[1]);  // reduce gives last element if there is two output element

// console.log(employees.reduceRight((a,b)=>a[5]>b[5]?a:b)[1]);  // reduce right gives first element
