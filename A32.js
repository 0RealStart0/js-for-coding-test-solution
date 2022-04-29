const n = 5;
let dp = [[7],[3,8],[8,1,0],[2,7,4,4],[4,5,2,6,5]];


//for(let i=1;i<n;i++){
///  dp.push(input[i].split(" ").map((v)=>+v));
//}

for(let i=1;i<n;i++){
    for(let j=0; j<i+1;j++){
        let up_left = 0;
        let up = 0;
        if(j!==0){
            up_left = dp[i-1][j-1];   
        }
        if(j!==i){
            up = dp[i-1][j];
        }
        dp[i][j]= dp[i][j]+Math.max(up_left,up);  
    }
}
console.log(Math.max(...dp[n-1]));

//////////////////////////////////////////

//const n = 5;
dp = [[7],[3,8],[8,1,0],[2,7,4,4],[4,5,2,6,5]];


for(let i=1; i<n;i++){
    for(let j=0; j<=i;j++){
        let up_left = 0;
        let up =0;
        if(j!==0){
            up_left = dp[i-1][j-1];
        }
        if(j!==i){
            up = dp[i-1][j];
        }
        dp[i][j] = dp[i][j]+ Math.max(up_left,up);
    }
}

console.log(Math.max(...dp[n-1]));