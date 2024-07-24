const a = 2, b = 4, c = 10, d = 8;
const r = a > b ?
    a > c ?
        a > d ?
         a : d : c : b > c ? b > d ? b : d : c > d ? c : d;
console.log(r);