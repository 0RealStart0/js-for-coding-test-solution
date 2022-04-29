const fs = require('fs');
const path = require('path')
const input = fs.readFileSync(path.join(__dirname,'/A15.txt')).toString().trim().split("\n");

const [n,m,k,x] = input.shift().split(" ").map((v)=>+v.trim());

let graph = Array.from(Array(n+1),()=>Array());
for(let i of input){
    let [a,b] = i.split(" ").map((v)=>+v);
    graph[a].push(b);
}
let distance = Array(n+1).fill(-1);
distance[x] = 0;
let q = [];
q.push(x);

while(q.length>0){
    let now = q.shift();
    for(let i of graph[now]){
        if(distance[i]===-1){
            distance[i] = distance[now] +1;
            q.push(+i);
        }
    }
}
let flag = false;
for(let i=1; i<n+1; i++){
    if(distance[i]===k){
        console.log(i);
        flag = true;
    }
}

if(!flag) console.log(-1);