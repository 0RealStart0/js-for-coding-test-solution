let n = 5;
let arr = [2,3,1,2,2];

arr.sort((a,b)=>a-b);
let result = 0;

let count = 0;
for(let i of arr){
    count++;
    if(count>=i){
        result++;
        count = 0;
    }
}
console.log(result);
//깃 테스트1
//
