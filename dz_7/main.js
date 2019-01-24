// 1
function midArr(A, f){
    
}

A = [1, 2, 6, 4, 5, 1];


var f = function(){ 
    var mid = [];
    if(A.length % 2 == 0){
    mid.push(A.length/2);
    }
          
    // if(A.length % 2 != 0){
    //     for(var i =  (A.length-1)/2; i < A.length/2; i++){    
    //     mid.push(A[i]);    
    //     }

    // }
    // if(A.length % 2 == 0){
    //     for(i = (A.length-1)/2; i < (A.length)/2; i++){    
    //     mid.push(A[i]); 
    //     mid.push(A[i+1]);
    //     }

    // }
    // for(var i = 0; i < A.length+1/2; i++){  
    //     if(A.length % 2 == 0){

            
    //     }
    //     console.log(b)
    //     mid.push(b);
    // }
    return mid;
    
}
 f(A);
// midArr(A, f);
console.log(f());

// 2

// var a = 2;
// var b = 3;

// function doFunction(a, b, callback){
//     return callback(a, b)

// }

// var power = function(x, y){
//     return Math.pow(x, y);
// }

// doFunction(a, b ,power);
// console.log(doFunction());

// 3

// var a = 2;
// var b = 3;

// function doFunction(a, b, callback){
//     var result = mult(a, b);
//     return result;

// }

// var sum = function(x, y){
//     return x + y;
// }

// var div = function(x, y){
//     return x / y;
// }

// var mult = function(x, y){
//     return x * y;
// }

// doFunction(a, b ,sum);
// console.log(doFunction());


// 4
// var a = 6;

// function doFunction(a, b, callback){
//     var result = factorial(a);
//     return result;

// }

// var factorial = function(n){
//     return (n != 1) ? n * factorial(n - 1) : 1;

// }

// doFunction(a, factorial);
// console.log(doFunction());



