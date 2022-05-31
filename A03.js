let input = "11001100110011000001";
let first = input[0];
let count = 0;
let check = [0,1];

for(let i=1;i<input.length;i++){
    console.log(first,count,check);
    if(first!==input[i]){
        first = input[i];
        check[count]++;
        count = (count+1)%2;
    }
}
console.log(first,count,check);
console.log(Math.min(check[0],check[1]))


// 다른 풀이
first = input;
let count0 = 0;
let count1 = 0;

if(first[0]==="1"){
    count0++;
}else{
    count1++;
}
for(let i=0; i<first.length-1;i++){
    if(first[i]!==first[i+1]){
        if(first[i+1]==="1"){
            count0++;
        }else{
            count1++;
        }
    }
}
console.log(Math.min(count0,count1));

//2
