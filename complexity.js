var a=[1,3,2,5,4,6]
var sum =6



var sum =6
var count=0

for (var i of a){
    for (var j of a){
        count++
        if (i+j==sum){
            console.log(i,j);
        }
    }
}
console.log(count); //36

a=[1,3,2,5,4,6]
// [1,2,3,4,5,6]
//sum=9
//s=9


    a.sort ((a,b)=>a-b) // [1,2,3,4,5,6]
    var sum=9
    var low =0
    var upp =a.length -1
    var count =0
while (low<upp){
    count++
    var newSum =a[low]+a[upp]
    if (sum== newSum){
        console.log(a[low], a[upp]);
        low++
        upp--
    }

        else if (newSum<sum){
            low++
        }
        else if (newSum>sum){
            upp--
        }
    
}

console.log(count);









// check an elemt is present or not

// var a=[9,6,3,2,8,1,5]
// function elementCheck(a,e){
// var count=0
// for(var i of a){
//     count++
//     if (i==e){
//         return "present"+count
//     }
// }
// return "not present"+count
// }
// console.log(elementCheck(a,100)); //7


// binary search 


// a = [9,6,3,2,8,1,5] // e=10
// sort - [1,2,3,5,6,8,9]
// middle elmnt =5
// midd ==e --> found
// e<midd --- left
// e>midd --- right

// 1,2,3
// middle elmnt =2
// midd ==e --> found
// e<midd --- left
// e>midd --- right

// 3
// middle elmnt =3
// midd ==e --> found
// e<midd --- left
// e>midd --- right


// sorting
// var a=[2,5,8,1]
// a.sort((a,b)=>a-b)
// console.log(a);


function binarySearch(a,e){
    a.sort((a,b)=>a-b)
    var low=0
    var upper=a.length-1
    var count=0

    while(low<=upper){
count++
middleindex= Math.floor ((low+upper)/2)
if (a[middleindex]==e){
return "present"+count
} 
else if(e>a[middleindex]){
    low=middleindex+1
}
else if (e<a[middleindex]){
    upper=middleindex-1
}

    }
    return "not present"+count



}
console.log(binarySearch([9,6,3,2,8,1,5], 3));


// var employees=[ 

//     [1,"anu","developer","calicut",3,65000],
//     [2, "amal", "developer", "kochi", 5, 100000],
//     [3, "neha", "hr", "calicut", 2, 35000],
//     [4, "nikhil", "tester", "trissur", 1, 15000],
//     [5, "vivek", "developer", "calicut", 4, 85000]
    
//     ]
// //find employee name with greatest exp

// console.log(employees.sort((a,b)=>b[4]-a[4])[0][1]);

// // find employee with lowest salary
// console.log(employees.sort((a,b)=>a[5]-b[5])[0][1]);