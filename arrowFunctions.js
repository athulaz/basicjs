// const add=(n1,n2)=>console.log(n1+n2);
// add (3,3)

// const add=(n1,n2)=>{
//     return n1+n2
// }
// console.log(add(5,2));

// factorial 

// const factorial =n=>{
//    var   fact=1
//     for (;n>0;n--){

//         fact*=n
        
//         }
//     return fact
// }
// console.log(factorial(5));

// prime check
 
const primeCheck=n=>{

    for (var i = 2; i < n; i++){ 
        if (n%i==0){
            return "not prime "
        }
    }
return "prime"
}

console.log(primeCheck(4));
console.log(primeCheck(5));

 