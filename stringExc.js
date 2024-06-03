// var s="luminar technolab"
// console.log(s);
// console.log(s[2]);
// console.log(s[0]);
// console.log(s.length);

// linear data structure - elements are ordered in linearly in string

// write a function to find the first elements of a string

// const firstElmnt=s=>{
//     return s[0]
// }
// console.log(firstElmnt("hi"));
// console.log(firstElmnt("calicut"));

// write a function to find the last elements of a string

// const lastElmnt=s=>{
//     return s[s.length-1]
// }
// console.log(lastElmnt("hi"));
// console.log(lastElmnt("calicut"));


// var s="luminar technolab"
// // in = index
// // of =elemnts
// for (var i of s){
//     console.log(i);
// }

// write a function to find the count  of "a" in a string

// const countOfa=s=>{
//     var count=0
//     for (var i of s){
//    if(i=="a"){
//     count++
//    }
// }
// return count
// }

// console.log(countOfa("luminar"));


// const countOfv=s=>{
//     var count=0
//     for (var i of s){
//    if(i=="a" || i=="e" || i=="i"|| i=="o"|| i=="u" ){
//     count++
//    }
// }
// return count
// }

// console.log(countOfv("luminar"));


// lmnr

// const removeVowels = s => {
//     var n = "";

  
//     for (i of s) {
      
//         if (i=="a" || i=="e" || i=="i" || i=="o" || i=="u") {
//           continue
          
//         }
//         else{
//             n+=i
//         }
//     }

//     return n;
// }

// console.log(removeVowels("luminar")); 



// type conversion functions
// var s=""
// console.log(typeof(Number(s)));
// console.log(typeof(String(s)));
// s=Boolean (s)
// console.log(typeof(s));
// console.log(s);

// 10=true
// -10 = true
// "hello" =true
// "" = false
// 0= false
// null/undefined = false




// var num=10.6
// num=Math.floor(num) //10
// num=Math.round(num) //11
// num=Math.ceil(num)  //11   10.4=11
// console.log(num);


// var s="hello" // l
// s=abcd         b/c


// const middleelmt = s => {
//   return s [Math.floor(s.length/2)] // (s.length-1)/2

// }

// console.log(middleelmt("hello")); 
// console.log(middleelmt("abcd")); 


// var s="luminar"
// console.log(s.startsWith("l"));
// console.log(s.endsWith("r"));
// console.log(s.toLocaleLowerCase());
// console.log(s.toLocaleUpperCase());





// indian phone number validation
// "+918485986938"

// const phonevalidation=phn=> {
//    return phn.startsWith("+91") && phn.length==13?"valid":"invalid"
// }
// console.log(phonevalidation("+917777777777"));
// console.log(phonevalidation("+91777777777"));
// console.log(phonevalidation("+197777777777"));


// gmail validattion 
// const mailvalidation=mail=> {
//     return mail.endsWith("@gmail.com")&& mail.length>10?"valid":"invalid"
//  }
//  console.log(mailvalidation("at@gmail.com"));

// string slicing
// var s="hello"
// console.log(s[-1]);
// // slice ()                   h    e   l   l   o
//                               0    1   2   3   4
//                              -5  -4   -3  -2  -1

// console.log(s.slice(0,3));
// console.log(s.slice(-4,-1));
// console.log(s.slice(2,));
// console.log(s.slice(3));

// remove last elemnt of a string

// const removelast=s=>{
// return s.slice (0,-1)


// }
// console.log(removelast("luminar"));

// 2 elemnt string rotation
// luminar arlumin
// hello   lohel

// const rotation=s=>{
//     return s.slice (-2)+ s.slice (0,-2)
// }
// console.log(rotation("luminar"));
// console.log(rotation("hello"));
