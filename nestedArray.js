// var a= [[1,2], [34,4], [45,9], [5,10]]
// console.log(a);

// for ( var i of a){
//     for (var j of i){
//         if (j>10){
//             console.log(j);
//         }
//     }
// }

var employees=[ 

[1,"anu","developer","calicut",3,65000],
[2, "amal", "developer", "kochi", 5, 100000],
[3, "neha", "hr", "calicut", 2, 35000],
[4, "nikhil", "tester", "trissur", 1, 15000],
[5, "vivek", "developer", "calicut", 4, 85000]

]
console.log(employees);

// find total number of employees
console.log(employees.length);


// display all employees name

for ( var i of employees){
    console.log(i[1]);
}
// display the names of developers


for ( var i of employees){
    if (i[2]=="developer"){
        console.log(i[1]);
    }
}
// find experience of neha

for (var i of employees){

    if(i[1]=="neha"){
        console.log(i[4]);
    }
}
// find salary of employee with id 5

for (var i of employees){

    if(i[0]=="5"){
        console.log(i[5]);
    }
}

// find designation and name of employees from calicut
for (var i of employees){

    if(i[3]=="calicut"){
        console.log(i[1], i[2]);
    
    }
}