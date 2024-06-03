// var num=10
// var sum=num+"10"
// console.log(sum);
// console.log(typeof(sum));


// var s=""
// var num=20
// var sum=s+num
// console.log(typeof(sum));



// console.log(2+2+"2");
// console.log("2"+2+2);


// *
// * *
// * * *
// * * * *

// for(var row=1; row<=4; row++){ // row=5
//     var s=""                   // s=""
//                         //3
//     for (var col=1; col<=row; col++){ //col =3
//         s=s+"* "                      // s= "* * * * "
//     }
//     console.log(s);
// }



// * * * * 
// * * *
// * *
// *
// for(var row=4; row>0; row--){ // row=5
//     var s=""                   // s=""
//                         //3
//     for (var col=1; col<=row; col++){ //col =3
//         s=s+"* "                      // s= "* * * * "
//     }
//     console.log(s);
// }

//* * * * *
//* * * * *
//* * * * *
//* * * * *
//* * * * *

// for ( var i=1; i<=5; i++){
//     var s=""
//     for (var j=1; j<=5; j++){
//         s+="* "
//     }
//     console.log(s);
// }


//  1 1 1 1 1
//  2 2 2 2 2
//  3 3 3 3 3
//  4 4 4 4 4 
//  5 5 5 5 5

// for (var i = 1; i <= 5; i++) {
//     var s = "";
//     for (var j = 1; j <= 5; j++) {
//         s += i + " ";
//     }
//     console.log(s);
// }

// 1
// 1 2
// 1 2 3
// 1 2 3 4

// for (var i=1;i<=4;i++){
//     var s = "";
//     for (var j = 1; j <= i; j++) {
//           s += j+" ";
//        }


//        console.log(s);
// }

// 1
// 2 3
// 4 5 6
// 7 8 9 10
// var num=1
// for (var i=1;i<=4;i++){
//     var s = "";
//     for (var j = 1; j <= i; j++) {
//           s += num;
//           num++
//        }


//        console.log(s);
// }

// *
// * *
// *   *
// * * * *



// for (var i=1;i<=4;i++){
//     var s = "";
//     for (var j = 1; j <= i; j++) {
//        if (i==3&&j==2){
//         s+="  "
//        }
//        else{
//         s+="* "
//        }
//        }
//        console.log(s);
//     }

//      *
//     * *
//    * * *
//   * * * *

// var sp=5
// for (var i = 1; i <= 4; i++) {
//     var s = "";
//     for (var k = 1; k <= sp; k++) {
//         s += " ";
//     }

//     for (var j = 1; j <= i; j++) {


//         s += "* "

//     }
//     sp--
//     console.log(s);
// }


//  * * * * *
//   * * * * *
//    * * * * *
//     * * * * *
//      * * * * *


// for (var i = 1; i <= 5; i++) {
//     var s = "";
//     for (var k = 1; k <= i; k++) {
//         s += " ";
//     }

//     for (var j = 1; j <= 5; j++) {


//         s += "* "

//     }
   
//     console.log(s);
// }

//  * * * * *
//  *   *   *
//  * * * * *
//  *   *   *
//  * * * * *

// for ( var i=1; i<=5; i++){
//     var s=""
//     for (var j=1; j<=5; j++){
//         if ((i==2&&j==2) || (i==2&&j==4) || (i==4&&j==2) || (i==4&&j==4) ){ // (i%2==0 && j%2==0)
//             s+="  "
//         }
        
//                  else{
//                   s+="* "
//                }


//     }
//     console.log(s);
// }


//  * * * * * 
//   * * * * 
//    * * * 
//     * * 
//      * 


// var sp=5
// for (var i = 5; i >0; i--) {
//     var s = "";
//     for (var k = 1; k <= sp; k++) {
//         s += " ";
//     }

//     for (var j = 1; j <= i; j++) {


//         s += "* "

//     }
//     sp++
//     console.log(s);
// }

//   * * * * 
//    *   *
//     * *
//      *

// var sp=5
// for (var i = 4; i >0; i--) {
//     var s = "";
//     for (var k = 1; k <= sp; k++) {
//         s += " ";
//     }

//     for (var j = 1; j <= i; j++) {
//         if (i==3&&j==2){
//             s+="  "
//            }
//            else{
//             s+="* "
//            }

//     }
//     sp++
//     console.log(s);
// }


//       * 
//     * *
//   * * *
// * * * *



// sp=5
// for(var row=1; row<=4; row++){ // row=5
//     var s=""                   // s=""
//     for (var k = 1; k <= sp; k++) {
//         s += "  ";
//     }
//             //3
//     for (var col=1; col<=row; col++){ //col =3
//         s=s+"* "                      // s= "* * * * "
//     }
//     sp--
//     console.log(s);
// }

//       * 
//      * *
//     *   *
//    *     *
//     *   *
//      * *
//       *

sp = 7
for (var row = 1; row <= 4; row++) { // row=5
    var s = ""                   // s=""
    for (var k = 1; k <= sp; k++) {
        s += " ";
    }
    //3
    for (var col = 1; col <= row; col++) {
        if (row == 3 && col == 2 || row == 4 && col == 2 ||row == 4 && col == 3 ) {
            s += "  "
        }
        else {
            s += "* "
        }

    }
    sp--
    console.log(s);
}
var sp=5
for (var i = 3; i >0; i--) {
    var s = "";
    for (var k = 1; k <= sp; k++) {
        s += " ";
    }

    for (var j = 1; j <= i; j++) {
        if (i == 4 && j == 2 || i == 4 && j == 3 || i == 3 && j == 2) {
            s += "  "
        }
        else {
            s += "* "
        }

      

    }
    sp++
    console.log(s);
}


// 1
// 1  1
// 1    1
// 1      1
// 1    1
// 1  1   
// 1  


// var sp=5
// for (var i = 4; i >0; i--) {
//     var s = "";
//     for (var k = 1; k <= sp; k++) {
//         s += " ";
//     }

//     for (var j = 1; j <= i; j++) {
//         if (i==3&&j==2){
//             s+="  "
//            }
//            else{
//             s+="* "
//            }

//     }
//     sp++
//     console.log(s);
// }