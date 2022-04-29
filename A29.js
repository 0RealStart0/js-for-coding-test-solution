const n = 4;
const c = 3;
let arr = [11,13,16,18];

// const [n,c] = input[0].spit(" ").map((V)=>+v);
// let arr = [];
// for(let i=1;i<=n;i++){
//     arr.push(+input[i]);
// }
arr.sort((a,b)=>a-b);
let start = 1;
let end = arr[n-1]-arr[0];
let result = 0;

while(start<=end){
    let mid = Math.floor((start+end)/2);
    let value = arr[0];
    let count = 1;
    for(let i=1;i<n;i++){
        if(arr[i]>=(value+mid)){
            value = arr[i];
            count += 1;
        }
    }
    if(count>=c){
        result = mid;
        start = mid+1;
    }else{
        end = mid-1;
    }
}
console.log(result);

///////////////////////////////////////
// const n = 4;
// const c = 3;
// let arr = [11,13,16,18];

