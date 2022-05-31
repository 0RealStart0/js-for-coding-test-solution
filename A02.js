const s = "02984";

let arr = s.split("").map((v)=>+v);
console.log(arr);

result = arr[0];

for(let i=1;i<s.length;i++){
    num = arr[i];
    if(num<=1 || result<=1){
        result = result+num;
    }else{
        result = result*num;
    }
}

console.log(result);

//1