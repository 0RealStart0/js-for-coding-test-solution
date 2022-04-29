const n = 5;
let arr = [3,2,1,1,9];
arr.sort((a,b)=>a-b);

let target = 1;
console.log(arr);
for(let i of arr){

    if(target<i) break;
    target += i;
    console.log(target);
}

console.log(target);