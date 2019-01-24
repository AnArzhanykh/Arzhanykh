A = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(A);

if(A % 2 !=0){
    for(i = 0; i < A.length-1; i+=2) {
        a = A[i];
        b = A[i+1];
        A.splice(A[i],1,a);
        A.splice(A[i-2],1,b);
    }
// console.log(A);
} else 
    for(i = 0; i < A.length; i+=2) {
        a = A[i];
        b = A[i+1];
        A.splice(A[i],1,a);
        A.splice(A[i-2],1,b);
    }
console.log(A);


for(i = 0; i < A.length; i++){
    for(j = 0; j < A[i].length; j++){
        A[i][j] = Math.floor(Math.random()*10);
    }
}