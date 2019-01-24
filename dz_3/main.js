// 2
// a = +prompt("ведите число");
// b = a + "";
//  for (i = 1; i <=b.length; i++) { 
//     c = a % 10;
//     a = Math.floor(a / 10);
//     document.write(c);
// }

// 3
// a = +prompt();
// counter = a + "";
// max = 0;
// for (i = 1; i <=counter.length; i++) { 
//     b = a % 10;
//     a = Math.floor(a / 10);   
//     if (max < b){
//     max = b
//     document.write("max " + max);
// }
// }

// 4
a = Math.floor(Math.random()*20);

b = +prompt();
c = a-b;
d = b-a;
if (c > 4 || d > 4){
    alert("холодно");
} else if (c <= 4 && c >=2) {
    alert("тепло");
} else if( d <=4 && d >=2) {
    alert("тепло");
} else if ( c <=2 && c >= 1) {
    alert("несите мне азот");
} else if ( d <= 2 && d >= 1){
    alert("несите мне азот");
} else {
    alert("угадал!!!");
}

document.write(a);
