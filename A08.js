let input = "AJKDLSI412K4JSJ9D";

let result = [];
let value = 0;

for(let i=0;i<input.length;i++){
    if(isNaN(input[i])){
        result.push(input[i]);
    }else{
        value += +input[i];
    }
}
///

result.sort();
result.push(value);
console.log(result.join(""));