let n = 10;
let dp = Array(n).fill(0);

let [idx1,idx2,idx3] = [0,0,0];
let [mul2,mul3,mul5] = [2,3,5];
dp[0] = 1;
for(let i=1;i<n;i++){
    dp[i] = Math.min(mul2,mul3,mul5);

    if(dp[i]===mul2){
        idx1++;
        mul2 = dp[idx1]*2;
    }
    if(dp[i]===mul3){
        idx2++;
        mul3 = dp[idx2]*3;
    }
    if(dp[i]===mul5){
        idx3++;
        mul5 = dp[idx3]*5;
    }
}
console.log(dp[n-1]);

////////////////////////////////
n=10;
let d = Array(n);

d[0] = 1;

let [i1,i2,i3] = [0,0,0];
let [m2,m3,m5] = [2,3,5];

for(let i=1; i<n; i++){
    d[i] = Math.min(m2,m3,m5);
    if(d[i]===m2){
        i1++;
        m2 = d[i1]*2;
    }
    if(d[i]===m3){
        i2++;
        m3 = d[i2]*3;
    }
    if(d[i]===m5){
        i3++;
        m5 = d[i3]*5;
    }
}
console.log(d[n-1])


