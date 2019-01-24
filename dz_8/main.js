// 1


function inArray(b, A){ 
    // console.log(A);
    for(var i = 0; i < arguments.length; i++ ){
        if(b = A[i]){
            return true;

        }   return false;
    }
}


inArray('hello', ['svnj', 'hello', 'cvpoq']);
console.log(inArray());

// 2
// function assignObjects(obj1, obj2, flag){

//     if ( flag == true){
//         return obj1;
//     } 
//     return obj2;
    
// }



// var x = assignObjects({ x: 10 }, { x: 20, y: 30 }, false);
// console.log(x);


// 3 
// function assignObjects(obj1, obj2, flag){
//     if (flag == undefined){
//         flag = false;
//     }
//     if ( flag == true){
//         return obj1;
//     } 
//     return obj2;
    
// }




// var x = assignObjects({ x: 10 }, { x: 20, y: 30 }, true);
// console.log(x);
