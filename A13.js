const fs = require('fs');
const path = require('path')
const input = fs.readFileSync(path.join(__dirname,'/A13.txt')).toString().trim().split("\n");
const [n, m] = input.shift().split(" ").map((v) => +v);
let [chicken, house] = [[], []];
//console.log(input);
for (let i = 0; i < n; i++) {
    let tmp = input.shift().split(" ").map((v) => +(v.trim()));
    for (let j = 0; j < n; j++) {
        if (tmp[j] === 1) {
            house.push([i, j]);
        } else if (tmp[j] === 2) {
            chicken.push([i, j]);
        }
    }
}

let result = Infinity;

let total_chicken = getCombinations(chicken, m);
for (let i of total_chicken) {
    result = Math.min(result, get_min(i));
}
console.log(result);

function get_min(chicken) {
    let result = 0;

    for (let [x, y] of house) {
        let min = Infinity;

        for (let [i, j] of chicken) {
            min = Math.min(min, Math.abs(x - i) + Math.abs(y - j));
        }
        result += min;
    }
    return result;
}




function getCombinations(arr, selectNum) {
    const results = [];
    if (selectNum === 1) return arr.map((value) => [value]);

    arr.forEach((fixed, index) => {
        const rest = arr.slice(index + 1);
        const combinations = getCombinations(rest, selectNum - 1);
        const attached = combinations.map((combination) => [fixed, ...combination]);
        results.push(...attached);
    });

    return results;
};