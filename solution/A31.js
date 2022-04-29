const fs = require('fs');
const path = require('path')
const input = fs.readFileSync(path.join(__dirname,'/A31.txt')).toString().trim().split("\n");
const t = +input.shift();

for(let i=0; i<t; i++){

    let [n,m] = input.shift().split(" ").map((v)=>+v);
    let arr = [];
    let tmp = input.shift().split(" ").map((v)=>+v);
    // for(let j=0; j<)






}