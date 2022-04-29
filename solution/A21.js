//const fs = require('fs');

// "10 100 20 90
// 80 100 60 70
// 70 20 30 40
// // 50 20 100 10'
// 3 5 10
// 10 15 20
// 20 30 25
// 40 22 10
// 2 40 50
// 50 30
// 20 40

//const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n,l,r] = [3,5,10];
let graph = [[10,15,20],[20,30,25],[40,22,10]];
// for(let i=1;i<=n;i++){
//     input[i].forEach((v)=>graph[i-1].push(+v));
// }
let union ;
let dx = [-1,0,1,0];
let dy = [0,-1,0,1];

function process(x,y,index){
    let q = [];
    let united = [];
    q.push([x,y]);
    united.push([x,y]);
    union[x][y] = index;
    let sumValue = graph[x][y];
    let count = 1;
    while(q.length>0){
        let [x,y] = q.shift();
        for(let i=0;i<4;i++){
            let nx = x+dx[i];
            let ny = y+dy[i];
            if(nx>=0 && nx<n && ny>=0 && ny<n && union[nx][ny]===-1){
                if(Math.abs(graph[x][y]-graph[nx][ny])>=l && Math.abs(graph[x][y]-graph[nx][ny])<=r){
                    q.push([nx,ny]);
                    united.push([nx,ny]);
                    sumValue += graph[nx][ny];
                    union[nx][ny] = index;
                    count +=1;
                }           
            } 
        }
    }
    for(let [i,j] of united){
        graph[i][j] = parseInt(sumValue/count);
    }
   
  
}
//console.log(graph);

let total_count = 0;
while(true){
    union = Array.from(Array(n)).map(()=>Array(n).fill(-1));
   // console.log(union);
    let index = 0;
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(union[i][j]===-1){
                process(i,j,index);
               
                index++;
            }        
        }
    }
   // console.log(union);
   // console.log(index);
   // console.log(graph);
    if(index === n*n) break;
    total_count++;
}
console.log(total_count);