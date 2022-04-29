const num = [1,2,3,4,5,6];
const operator = [2,1,1,1];

const n = 6
const data = [1,2,3,4,5,6];
let [add,sub,mul,div] = [2,1,1,1];
let min_value = Infinity;
let max_value = -Infinity;
dfs(1,data[0]);
if(max_value===-0) max_value=0;
if(min_value===-0) min_value=0;
console.log(max_value);
console.log(min_value);

function devide(a,b){
    let mul = 1;
    if(a<0) mul = -1;
    return Math.floor(Math.abs(a)/b) * mul;
}


function dfs(i,now){
//    console.log(add,sub,mul,div)
    if(i===n){
        min_value = Math.min(now,min_value);
        max_value = Math.max(now,max_value);
        console.log("끝")
    }else{
        if(add>0){
            add--;
            console.log("+");
            dfs(i+1,now+data[i]);
            add++;
        }
        if(sub>0){
            sub--;
            console.log("-");
            dfs(i+1,now-data[i]);
            sub++;
        }
        if(mul>0){
            mul--;
            console.log("*");
            dfs(i+1,now*data[i]);
            mul++;
        }
        if(div>0){
            div--;
            console.log("/");
            dfs(i+1,devide(now,data[i]));
            div++;
        }
    }
    console.log(add,sub,mul,div)
}