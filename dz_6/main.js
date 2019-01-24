 console.log('homework_6');

// 1-----------------------------------------------------
// function randomMass(){
//     n = +prompt('высота', '');
//     m = +prompt('длина', '');
//     A = new Array(n)
    
//     for(i = 0; i < A.length; i++){
//         A[i] = new Array(m);
    
//         for(j = 0; j < A[i].length; j++){
//             A[i][j] = Math.floor(Math.random()*5 + 1);
//             document.write(A[i][j] + ' ');
//         }
//         document.write('<br />');
//     }
// }

// randomMass();



// 2-------------------------------------------------------
// A = [1, 3, 5];
// B = [10, 22, 12, 2, 11, 9, 0]

// function compareMass(A, B){
//     sum1 = 0;
//     sum2 = 0;
//     for(i=0; i < A.length; i++) {
//         sum1 += A[i];
//     }

//     for(j=0; j < B.length; j++) {
//         sum2 += B[j];
//     }
//         if(sum1 >sum2){
//             return A;
//         } else{
//             return B;
//         }
// }

// compareMass(A, B)
// document.write( compareMass(A, B)+"</br>");


// 3-----------------------------------------------



// function doMath(x, znak, y){
// x = +prompt("x", "");
// y = +prompt("y", "");
// znak = prompt("znak", "");
//     if(znak == "+"){      
//         return x+y;
//     } else if (znak == "-"){
//         return x-y;
//     } else if(znak == "/"){
//         return x/y;
//     } else if(znak == "*"){
//         return x*y;
//     } else if(znak == "%"){
//         return x%y;
//     } else if(znak == "^"){
//         return x^y;
//     }
// }


// document.write(doMath());

// 4-----------------------------------------------------


// x = 'hello world';
// y = ['l', 'd'];

// function recover(){
//     var arr = x.split('');
//     for(i = 0 ; i < y.length; i++) {
//         item = y[i];
//         for(j = 0; j < arr.length; j++){
//             while(arr[j] == item){
//                 arr.splice(j, 1);
//             }
//         }
//     }
//     x = arr.join('');
//     return x;
// }

// recover();
// document.write(recover());


// 5-----------------------------------------------------

var input = [1, 2, 3, 4, 5, 6];

function isEven(x) {
    return x % 2 == 0; 
}

function filter(){
    var consequence = new Array;
    
    for(i = 0; i < input.length; i++) {
        x = input[i];
        if(isEven(x) == true) {
            consequence.push(x);
        }
    }
    document.write(consequence + '</br>');
    document.write(input)
}


filter();




