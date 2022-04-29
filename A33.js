const n = 10;
let t = [5,4,3,2,1,1,2,3,4,1];
let p = [10,40,30,20,10,10,20,30,40,50];
let dp = Array(n+1).fill(0);
// for(let i=1;i<=n;i++){
//     t.push(+input[i][0]);    
//     p.push(+input[i][1]);
// }
let max_value = 0;
for(let i=n-1;i>=0; i--){
    let time = t[i]+i;
    if(time<=n){
        dp[i] = Math.max(p[i]+dp[time],max_value);
        max_value = dp[i];
    }else{
        dp[i] = max_value;
    }
}
console.log(dp);
console.log(max_value)
///////////////////
// const n = 10;
// let t = [5,4,3,2,1,1,2,3,4,5];
// let p = [50,40,30,20,10,10,20,30,40,50];

let dp2 = Array(n+1).fill(0);

let maxValue = 0;

for(let i=n-1;i>=0;i--){
    let time = i+t[i];
    if(time<=n){
        dp2[i] = Math.max(p[i]+dp2[time],maxValue);
        maxValue = dp2[i];
    }else{  
        dp2[i] = maxValue;
    }
}

console.log(maxValue);

