// for(var i=1;i<=5;i++){
// console.log(i);
// if(i==3){
//     break
// }

// }
// console.log("out", i);

// for(var i=1;i<=5;i++){
//     console.log(i);
//     if(i==3){
//         continue
//     }
//     console.log("outside if", i);
//     }
   



// var num = 5
// var flag =0

// if (num==1){
//     console.log("composite");
// }
// else {
// for (var i = 2; i < num; i++){ //i=2
// if (num%i==0){
//     flag=1
//     break
// }

// }
// if (flag==1){
//     console.log("composite");
// }
// else {
//     console.log("prime");
// }
// }

// var num = 5
// // var flag =0

// for (var i = 2; i < num; i++){ //i=2
// if (num%i==0){
//     // flag=1
//     break
// }

// }
// if (i==num){
//     console.log("prime");
// }
// else {
//     console.log("composite");
// }


// var r1=1
// var r2=10
// // print all prime numbers from r1 to r2

// for(r1=1; r1<r2; r1++){ //r1=1
//     for (var i = 2; i < r1; i++){ //i=2
//         if (r1%i==0){
//             break
//       }
//      }
//      if (r1==i){
//         console.log(r1);
//         }
            

//     }
   
  

// find sum of non-prime numbers from r1 to r2

// var r1=5
// var r2=10
// // 6 8 9 10 =sum
// sum=0

// for(; r1<=r2; r1++){ 
//      for (var i = 2; i < r1; i++){
//        if (r1%i==0){
//            break
//     }
//       }
//       if (i!=r1){
//         sum+=r1
       
//          }

//    } 
//     console.log(sum);


    //find square of prime numbers from r1 to r2
    //4 9 

var r1=1
var r2=10

sq=1
for(r1=1; r1<=r2; r1++){ 
    for (var i = 2; i < r1; i++){ 
        if (r1%i==0){
            break
      }
     }
     if (r1==i){
       console.log(sq=r1*r1); //r1**2
        }
            

    }