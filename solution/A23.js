const fs = require('fs');
const path = require('path')
const input = fs.readFileSync(path.join(__dirname,'/A23.txt')).toString().trim().split("\n");
const n = +input.shift();

let arr = [];

while (input.length > 0) {
    let tmp = input.shift().split(" ");
    arr.push([tmp[0], +tmp[1], +tmp[2], +tmp[3]]);
}

//console.log(arr);
arr.sort((a, b) => {

    if (a[1] === b[1]) {
        if (a[2] === b[2]) {
            if (a[3] === b[3]) {
                return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0;
            }
            return b[3] - a[3];
        }
        return b[2] - a[2];
    }
    return b[1] - a[1];

});

console.log(arr);