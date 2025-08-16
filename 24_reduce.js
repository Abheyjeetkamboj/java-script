let arr = [1,3,6,8,9,6,9,3,2,1];
console.log(arr);
let n = arr.reduce(function(a,b){
    // return a+b;
    // return a*b;
    return a-b;
})
console.log(n);