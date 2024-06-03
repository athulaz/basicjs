// if(condition){ 
//     code
// }
// else{
//     code
// }

//condition?  true code: false code

// var age =19
// // age>=18? console.log("eligible"):console.log("not eligible");
// console.log(age>=18? "eligible": "not eligible");

// var num=2
// console.log(num>0?"pos":num<0?"neg": "zero");

// function posNeg (num){
//     return num>0?"pos":num<0? "neg":"zero"
// }
// console.log(posNeg(6));
// console.log(posNeg(-6));
// console.log(posNeg(0));

// 30 fizzbuzz
// 15 fizzbuzz
// 10 buzz
// 6 fizz
// 4 invalid


// function fizzBuzz (num){
//     return num%15==0 ?"fizzbuzz":num%5==0? "buzz":num%3==0? "fizz":"invalid"
// }
// console.log(fizzBuzz(30));
// console.log(fizzBuzz(10));


// function pattern(r1,r2){
//     var s=""
//     for (; r1 <= r2; r1++){
//         r1 > 5? s += r1 + 1 + " ":r1 < 5? s += r1 - 1 + " ":s += r1+" "

//     }
//     return s
// }
// console.log(pattern(3,7));



function greatest(r1, r2){
   
        return   r1>r2?"r1 is greater"+r1: r1<r2?"r2 is greater"+r2: r1+"equal"


}
console.log(greatest(1,2));