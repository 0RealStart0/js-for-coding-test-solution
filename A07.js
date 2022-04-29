let input = "123402".split("");
input = input.map((v)=>+v);
let len = input.length;

let sum = 0;
for(let i=0;i<len/2;i++){
    sum += input[i];
}

for(let i=len/2;i<len;i++){
    sum -= input[i];
}

console.log(sum === 0 ? "LUCKY" : "READY" ); 