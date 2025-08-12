arr = [1,2,3,4];
arr.forEach((ele,i)=>{
    console.log(ele,i);
});
console.log()
arr.forEach((ele,i) => {
  
    ele*=2;
    console.log(ele,i);
});
console.log(arr);