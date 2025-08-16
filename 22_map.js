
function twice(ele){
    return 2*ele;
}
function allpositive(ele){
    return Math.abs(ele);
}
function add(ele){
    return ele+10;
}
let arr = [1,2,-4,-5,6];
console.log(arr);
let brr = arr.map(allpositive);
console.log(brr);
let crr = arr.map(function(ele){
    return ele*ele;
});
console.log(crr);
let drr = arr.map(add);
console.log(drr);


let newarr = [1,2,3,4,5];
newarr = newarr.map(ele=>ele*2);
console.log(newarr);