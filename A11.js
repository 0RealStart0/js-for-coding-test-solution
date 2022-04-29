const fs = require('fs');
const path = require('path');
const input = fs.readFileSync(path.join(__dirname,'/A11.txt')).toString().trim().split("\n");
//console.log(input);
const n = +input.shift();
const k = +input.shift();
let graph = Array.from(Array(n+1),()=>Array(n+1).fill(0));
for(let i=0; i<k;i++){
    let tmp = input.shift().split(" ");
    let a = +tmp[0];
    let b = +tmp[1];
    graph[a][b] = 1;
}

const l = +input.shift();
let info = [];
for(let i=0; i<l;i++){
    let tmp = input.shift().split(" ");
    info.push([+tmp[0].trim(),tmp[1].trim()]);
}
console.log(graph);
console.log(info);


let dx = [0,1,0,-1];
let dy = [1,0,-1,0];

function rotate(direction,c){
    if(c==="L"){
        direction = (direction-1)%4;    
    }else{
        direction = (direction+1)%4;
    }
    return direction;
}

function simulte(){
    let x =1;
    let y = 1;
    let direction = 0;
    let time = 0;
    let index = 0;
    let q = [[x,y]];
    graph[x][y] = 2;
    
    while(true){
        let nx = dx[direction]+x;
        let ny = dy[direction]+y;
        
        if(nx>=1 && nx<=n && ny>=1 && ny<=n && graph[nx][ny]!==2){
            if(graph[nx][ny]===0){
                graph[nx][ny] = 2;
                q.push([nx,ny]);
                let tmp = q.shift();
                let px = tmp[0];
                let py = tmp[1];
                graph[px][py] = 0;
            }
            
            if(graph[nx][ny]===1){
                graph[nx][ny] = 2;
                q.push([nx,ny]);
            }
            
        }else{
            time++;
            break;
        }
        x = nx;
        y = ny;
        time++;
        if(index<l && time === info[index][0]){
            direction = rotate(direction,info[index][1]);
            index++;
        }    
    }
    return time;
}
console.log(simulte());

