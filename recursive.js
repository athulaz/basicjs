// function display(){
//     console.log("hi");
//     display()
// }
// display()

//recursive- a function call itself

// function sumOfn(n){ //n=0
//     if(n==0){
//         return 0
//     }
//     else {
//         return n+sumOfn (n-1)
//         // 3+sumOfn(2)=6
//         // 2+sum(1)=3
//         // 1+sumOfn(0)=1
//         // 0
//     }
// }
// console.log(sumOfn(3));

//factorial

// function factorial(n){
//     if (n==0){
//         return 1
//     }
// else{
//     return n*factorial(n-1)
// }
// }
// console.log(fact(5));
// console.log(fact(0));

// fibonacci

function fibonacci(n){ //3
    if(n<=1){
        return n
    }
else{
    return fibonacci (n-1)+fibonacci (n-2)
    //                  1 + 1 = 2
}

}
for (var i=0;i<=9;i++){ // i=1
    console.log(fibonacci(i)); // fibonacci(3)
}