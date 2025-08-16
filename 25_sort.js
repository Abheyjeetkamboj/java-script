let arr = [1,-1,-9,9,8];
console.log(arr);

arr = arr.sort();//this inbuilt function doesnot work in some cases
console.log(arr);

arr = arr.sort((a,b)=>a-b); // for acending
console.log(arr);

arr = arr.sort((a,b)=>b-a); // for decending
console.log(arr);