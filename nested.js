// nested function - functions with another functions


function outerFunction() {
    let outerVariable = "I'm outside!";
    
    function innerFunction() {
        console.log("Hello from inside!");
    }
    
    innerFunction();
}

outerFunction();
 

//In this example, innerFunction is nested inside outerFunction. When outerFunction is called, it executes innerFunction, which logs "Hello from inside!" to the console. The key point is that innerFunction is defined within outerFunction and has access to the variables defined in its outer scope.


//A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed


// Function that takes a callback as an argument
function process(callback) {
    // Simulating some task that takes time
    setTimeout(function() {
        // After the task is done, execute the callback
        callback();
    }, 2000);
}

// Callback function
function afterProcess() {
    console.log("Task is done!");
}

// Calling process with a callback
process(afterProcess);
