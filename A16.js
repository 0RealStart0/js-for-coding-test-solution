const fs = require('fs');
const path = require('path')
const input = fs.readFileSync(path.join(__dirname,'/A16.txt')).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map((v) => +v);
let data = [];

for (let i = 1; i <= n; i++) {
    data.push(input[i].split(" ").map((v) => +v));
}

let temp = Array.from(Array(n), () => Array(m).fill(0));

let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];
function virus(x, y) {
    for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
            if (temp[nx][ny] === 0) {
                temp[nx][ny] = 2;
                virus(nx, ny);
            }
        }
    }
}

function total_score() {
    let score = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (temp[i][j] === 0) score++;
        }
    }
    return score;
}
let result = 0;
function dfs(count) {
    if (count === 3) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                temp[i][j] = data[i][j];
            }
        }
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (temp[i][j] === 2) virus(i, j);
            }
        }

        result = Math.max(result, total_score());
        return;
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (data[i][j] === 0) {
                data[i][j] = 1;
                count++;
                dfs(count);
                data[i][j] = 0;
                count--;
            }
        }
    }
}
dfs(0);
console.log(result);
