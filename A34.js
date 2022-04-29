const n = 7;
const arr = [15,11,4,8,5,2,4];

let d = Array(n).fill(1);
arr.reverse();

for(let i=1; i<n;i++){
    for(let j=0; j<i;j++){
        if(arr[i]>arr[j]){
            d[i] = Math.max(d[i],d[j]+1);
        }
    }
}
//console.log(arr)
//console.log(d)
console.log(n-Math.max(...d));

/////////////////////////////////////
// const n = 7;
const arr1 = [15,11,4,8,5,2,4];
arr1.reverse();

let dp = Array(n).fill(1);

for(let i=1; i<n; i++){
    for(let j=0;j<i; j++){
        if(arr1[i]>arr1[j]){
            dp[i] = Math.max(dp[i],dp[j]+1);
        }       
    }
}
console.log(n-Math.max(...dp));




