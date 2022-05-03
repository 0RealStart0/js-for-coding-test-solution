// 3 3
// 1 0 2
// 0 0 0
// 3 0 0
// 2 3 2
// for(let i=1;i<=n;i++){
//     // input[i].split(" ").map((v)=>+v).forEach((v)=> graph[i-1].push(v));
//      graph[i-1] =input[i].split(" ").map((v)=>+v);
//      for(let j=0; j<n; j++){
//          if(graph[i-1][j]!==0) data.push([graph[i-1][j],0,i-1,j]); 
//      } 
//  }

const n = 3
const k = 3
const target_s = 2
const target_x = 3
const target_y = 2

let graph = [[1,0,2],[0,0,0],[3,0,0]];
let data = [];

for(let i=0;i<n;i++){
    for(let j=0; j<n; j++){
        if(graph[i][j]!==0) data.push([graph[i][j],0,i,j]); 
    } 
}
data.sort((a,b)=>a[0]-b[0]);
let dx = [-1,0,1,0];
let dy = [0,-1,0,1];

while(data.length>0){
    let [v,s,x,y] = data.shift();
 //   console.log(graph,data);
    if(s===target_s) break;
    for(let i=0; i<4; i++){
        let cx = dx[i]+x;
        let cy = dy[i]+y;
        if(cx>=0 && cx<n && cy>=0 && cy<n){
            if(graph[cx][cy]===0){
                graph[cx][cy] = v;
                data.push([v,s+1,cx,cy]);
            }
        }
    }
    
}
console.log(graph[target_x-1][target_y-1]);
