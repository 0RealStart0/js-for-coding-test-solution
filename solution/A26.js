const n = 3;
let arr = [10,20,40,50];
// for(let i=1; i<=n;i++){
//     arr.push(+input[i]);
// }
let result = 0;
while(arr.length>1){
    let one = arr.shift();
    let two = arr.shift();
    let sumValue = one+two;
    result += sumValue;
    arr.unshift(sumValue);
    arr.sort((a,b)=>a-b);
}

console.log(result);