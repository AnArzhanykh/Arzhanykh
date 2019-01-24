//1

// n = +prompt();
// A = new Array(n);
// B = [];

// for(i= 0; i <A.length; i++) {
//     A[i] = Math.floor(Math.random()*30+ 10);
    
// }
// console.log(A);

//         // a
// for(i = 0; i < A.length; i++){
//     var counter = 0;
//     for(j = 2; j < A.length; j++){
//         if(A[i] % j ===0) {
//             counter ++;
//         }
//     }
//     if(counter <= 2){
//         B.push(A[i]);
//     }
//     counter = 0;
// }
// console.log(B);

//         // b
// min = A[0];
// max = A[0];
// minI = 0;
// maxI = [0];


// for(i = 0; i < A.length; i++) {
//     if(min > A[i]){
//     min = A[i];
//     minI = i;
//     }
//     if(max < A[i]){
//     max = A[i];
//     maxI = i;
//     }
// }

// console.log('max: '+ max + ' index(max): ' + maxI);
// console.log('min: '+ min + ' index(min): ' + minI);


//             // 2
// C = new Array ();

// for(i= 0; i < A.length; i++) {
//     C = A.slice(minI,maxI);   
// }

// console.log(C);

//             //3

// buff = 0;
// buff = A[minI];
// A[minI] = A[maxI];
// A[maxI] = buff;
// console.log(A);


//                 // 4
// D = [23,1,2,52,5,34,23,6,246,436];
// cash = 0;

// console.log(D);

// for(i = 0; i < (D.length)/2; i++){
//     cash = D[D.length-1-i];
//     D.splice(D.length-1-i, 1, D[i]);
//     D.splice(i, 1, cash);
// }


// console.log(D);

                //  5

randomMass = [1, 2, -4, 5, 6, 0, 8, 21, 52, 1, 125, 12, 24, 22];
min = randomMass[0];
sum = 0;

for(i =0; i < randomMass.length; i++){
    if(min > randomMass[i]){
    min = randomMass[i];
    }
}

for(i =0; i < randomMass.length; i++){
    if((min+5) < randomMass[i])  {
    sum += 1;
    }
}   

console.log('sumMass: ' + sum);
console.log('minMass: ' + min);