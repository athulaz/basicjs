// var a =[1,2,3,4,5]
// // square
// // map () -create an array with equal number of elements to the input array elements
// console.log(a.map(i=>i**2));
// console.log(a);

// filter () -create an array with elements only for some elements in input array
// odd
// console.log(a.filter (i=>i%2!=0));





// [0,1,3,5,6]
// console.log(a.map(i=>i<3?i-1:i>3?i+1:i));


// var a =[1,3,5,6,8,9,10,12]
// // create an array with elements that are divisible by 3 
// console.log(a.filter(i=>i%3==0));

var employees=[ 

    [1,"anu","developer","calicut",3,65000],
    [2, "amal", "developer", "kochi", 5, 100000],
    [3, "neha", "hr", "calicut", 2, 35000],
    [4, "nikhil", "tester", "trissur", 1, 15000],
    [5, "vivek", "developer", "calicut", 4, 85000]
    
    ]
  

    // display all employees name

// console.log(employees.map(i=>i[1]));


// display the names of developers

// console.log(employees.filter(i=>i[2]=="developer").map(i=>i[1]));


// find experience of neha

// console.log(employees.filter(i=>i[1]=="neha")[0][4]);

// find salary of employee with id 5

// console.log(employees.filter(i=>i[0]=="5")[0][5]);
// find designation of employees from calicut

// console.log(employees.filter(i=>i[3]=="calicut").map(i=>i[2]));


// Task

//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,0],
    [5,'tiger',20,30],
    [6,'unibic',60,20],
    [7,'good day',70,0]
]

//1. display all product name
// console.log(products.map(i=>i[1]));

//2. display product whose price < Rs.50

// console.log(products.filter(i=>i[2]<50).map(i=>i[1]));

//3. print price of oreo

// console.log(products.filter(i=>i[1]=="oreo")[0][2]);



//4. print costly product name
// console.log(products.sort((a,b)=>b[2]-a[2])[0][1]);




//5. display out of stock product
// console.log(products.filter (i=>i[3]=="0").map(i=>i[1]));


//6. sort products based on stock in decsending order
// console.log('sort products based on stock in decsending order');

// console.log(products.sort((a,b)=>b[3]-a[3]));


//7. print product having maximum available stock

// console.log(products[0][1]);


 