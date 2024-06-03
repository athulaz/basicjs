// Array

// var a=[1,2,6,7,8, "hello", true]
// console.log(a);
// // array 
// //features
// // is a heterogeneous - can store different data types
// // array follows linear data structure like string to store data

// console.log(a.length);
// console.log(a[1]);
// console.log(a.slice(0,-2));

// for(var i in a){
//     console.log(i);
// }
// for(var i of a){
//     console.log(i);
// }

// // adding new elements in an array
// a.push(1,2,3)
// a.push("hi")
// console.log(a);

// var b=[] // empty array
// b.push ("hi","hello", "luminar")
// console.log(b);

//  // remove last element

// conole.log(b.pop());
// console.log(b);

// var a =[1,2,3,4,5]
// square [1,4,..]

// const squareArray=a=>{ 
//     var square=[]
// for( var i of a){
//     square.push(i**2)
// }
//     return square
// }
// console.log(squareArray([1,2,3,4,5]));


// a=[1,2,3,4.5,6,7]
// odd even


// const evenOdd=a=>{
// var odd=[]
// var even=[]

// for (var i of a){
//  i%2==0?even.push(i):odd.push(i)
// }
// console.log(odd);
// console.log(even);
// }

// evenOdd([1,2,3,4,5,6,7])


var expenses=[14000, 21000, 12000, 34000, 11000]

// find total expense
// find max expense
// find min expense

// const total=a=>{
//  var sum=0
//  for ( var i of a){
//     sum+=i
//  }
//  return sum
// }
// console.log(total(expenses));


// var maximum=a=>{
//     var max=0
//     for (var i of a){
//         if (i>max){
//             max=i
//         }
//     }
//     return max
// }
// console.log(maximum(expenses));


// var minimum=a=>{
//     var min=a[0]
//     for (var i of a){
        
//         if (i<min){
//             min=i
//         }
//     }
//     return min
// }
// console.log(minimum(expenses));

// var a =[1,2,3,4,5]
// var b= [3,4,5,6,7]
// // [3,4,5]

// const common=(a,b)=>{
//     var common=[]
//     for(i of a){
//         for (j of b){
//             if (i==j){
//                 common.push(i)
//             }
//         }
//     }
// return common
// }
// console.log(common(a,b));

// var students=["anu", "cinu", "abu", "shibu"]

// const nameWithA=a=>{
//     var newNames=[]
//     for ( var i of a){
//         if(i[0]=="a"){
//             newNames.push(i)
//         }
//     }
//     return newNames
// }
// console.log(nameWithA(students));


// var s= "hello hi hello"
// var a=s.split(" ")
// console.log(a);

// var s = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur accusamus eaque corrupti possimus, expedita veniam fugiat mollitia sit, provident vel perferendis quos. Ut, exercitationem. Hic dicta sint qui sed rem."
// // 1- find number of words in s

// console.log(s.split(" ").length);
// // 2- find longest word in s

// const longestWord=s=>{
//   var a=s.split(" ")
//   var longest =a[0]

//   for (var i of a){
//     if(i.length>longest.length){
//       longest=i
//     }
//   }
//   return longest
// }
// console.log(longestWord(s));
// // 3- find count of words in s starts with a vowel

// const startsWithv=s=>{

// var count=0
// var a= s.split(" ")

// for (var i of a){
//   if (i[0]=="a" || i[0]=="e" || i[0]=="i" || i[0]=="o" || i[0]=="u" ){
//     count++
//   }
// }
// return count

// }
// console.log(startsWithv(s));
// // 4- find count of words in s starts with a consenent

// const countofC=s=>{
// var a =s.split(" ")
// return a.length-startsWithv(s)

// }
// console.log(countofC(s));