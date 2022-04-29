let n = 8;
const m = 5;
const k = [1,5,4,3,2,4,5,2];

let count = 0;
for(let i=0; i<n-1;i++){
    let ball = k[i];
    for(let j=i+1;j<n;j++){
        if(ball !== k[j])count++;
   } 
}
console.log(count);

//다른 풀이

let arr = Array(n+1).fill(0);
for(let i of k){
    arr[i]++;
}
let result = 0;
for(let i=1; i<m+1;i++){
    n -= arr[i];
    result += n*arr[i];
}
console.log(result);


// 다른 풀이
  n = 8;
// const m = 5;
// const k = [1,5,4,3,2,4,5,2];

 arr = Array(n+1).fill(0);
for(let i of k){
    arr[i]++;
}

 result = 0;
for(let i in k){
    n -=arr[i];
    result += n*arr[i];
}
console.log(result);