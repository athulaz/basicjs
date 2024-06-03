// var num1=7
// var num2=8
// var sum=num1+num2
// console.log(sum);


// add()
// function add(){
//     var num1=7
//     var num2=8
//     var sum=num1+num2
//     console.log(sum);

// }

// add()
// add()

// hoisting eg - all js functions support hoisting
// var dont support hoisting  
//  console.log(n);
//  var n=7

//parameters
// function add(num1,num2){
//     var sum=num1+num2
//     console.log(sum);
// }
//arguments
// add(56,3)

// add(6,3)

// factorial of a number


// function factorial(num){       //n
//     var fact=1
//     for (i=1;i<=num;i++){ // for (;n>0;n--)
//         fact=fact*i       // fact*=n

// }
// console.log(fact);
// }

// factorial(5)


//prime


// function primeCheck(num){
//     for (var i = 2; i < num; i++){ 
//         if (num%i==0){

//             break
//         }

//         }
//         if (i==num){
//             console.log("prime");
//         }
//         else {
//             console.log("composite");
//         }

// }

// primeCheck(4)
// primeCheck(5)


//fibonacci
// function fibonacci(nterms){
//     var n1 = 0;
//     var n2 = 1;

//     for (var i = 1; i <=nterms; i++) { //i=2
//         console.log(n1);
//         var n3=n1+n2 //n3=1
//         n1 = n2; // n1=1
//         n2 = n3; //n2=1
//     }

// }
// fibonacci(4)

// create a js function to find sum of prime numbers from r1 to r2

// function primeSum(r1, r2){
//     sum=0
//     for(; r1<=r2; r1++){ 
//          for (var i = 2; i < r1; i++){
//            if (r1%i==0){
//                break
//         }
//           }
//           if (i==r1){
//             sum+=r1
//              }
//        } 
//         console.log(sum);
// }
// primeSum(5,10)


// find count of factors of a num

// function countFactors(num){
//   var count =0


//   for (var i=1;i<=num;i++){ //i=4
//       if(num%i==0){
//           //count=count+1 // count++ count=2
//           count++
//       }

//   }
//   console.log(count);

// }


// countFactors(5)
// countFactors(8)


// function add ( num1, num2){
//     var sum=num1+num2
//     return sum
// }
// // console.log(add(7,5));
// var out =add(100,200)
// console.log(out);


//factorial

// function factorial(num){      
//     var fact=1
//     for (i=1;i<=num;i++){
//         fact=fact*i       

// }
// return fact
// }
// // console.log(factorial(5));
// // find factorial of numbers from r1 to r2

// function rangeFactorial(r1, r2){
//     for(;r1<=r2;r1++){
//         console.log(factorial(r1));
//     }
// }

// rangeFactorial(1,5)



// create 2 functions
// function 1 - check numbers is pos or neg 
// function 2 - apply function 1 to check numbers from r1 to r2 are pos or neg

// function check (n){
// if (n>0){
//     return "pos "+n
// }
// else if (n<0){
//     return "neg "+n
// }
// else {
//     return "zero "
// }


// }
// function rangecheck(r1, r2){
//     for(;r1<=r2;r1++){
//   console.log(check(r1));
//     }
// }

// rangecheck(-3,3)


// r1=1, r2=5
// "1 4 9 .. 25"

// function squarePattern ( r1, r2){
//     var s=""
//     for(; r1<=r2;r1++)
//     {
//  s+=r1**2+ " "
//     }
//     return s
// }
// console.log(squarePattern(1,5));
// console.log(squarePattern(10,20));

// fibonacci


// function fibonacci(nterms){
//     var s=""
//     var n1 = 0;
//     var n2 = 1;

//     for (;nterms>0; nterms--) { 
//         s+=n1+" "
//         var n3=n1+n2 //n3=1
//         n1 = n2; // n1=1
//         n2 = n3; //n2=1
//     }
//     return s
// }

// console.log(fibonacci(5));
// console.log(fibonacci(10));


// r1 = 3
// r2 = 7
// // "2 3 5 7 8"

// function pattern(r1, r2) {
//     var s = ""
//     for (; r1 <= r2; r1++) {

//         if (r1 > 5) {
//             s += r1 + 1 + " "
//         }
//         else if (r1 < 5) {
//             s += r1 - 1 + " "
//         }

//         else {
//             s += r1+" "

//         }

//     }
//     return s
// }
// console.log(pattern(3, 7));
// console.log(pattern(1, 10));



function primeCheck(n){

    for (var i = 2; i < n; i++){ 
        if (n%i==0){
            return "not prime "
        
        }
    }
return "prime"
}

console.log(primeCheck(4));
console.log(primeCheck(5));

