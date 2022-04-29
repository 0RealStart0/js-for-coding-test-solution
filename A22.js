function solution(board) {
    var answer = 0;
    let n = board.length;
    let new_board = Array.from(Array(board.length + 2), () => Array(board.length + 2).fill(1));
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            new_board[i + 1][j + 1] = board[i][j];
        }
    }
    // console.log(new_board);
    let q = [];
    q.push([[1, 1, 1, 2], 0]);
    let visited = [];
    visited.push([1, 1, 1, 2]);

    while (q.length > 0) {
        let [pos, cost] = q.shift();
        if ((pos[0] === n && pos[1] === n) || (pos[2] === n && pos[3] === n)) return cost;
        for (let [x1, y1, x2, y2] of next(pos, new_board)) {
            if (!visited.some((v) => v[0] === x1 && v[1] === y1 && v[2] === x2 && v[3] === y2)) {
                q.push([[x1, y1, x2, y2], cost + 1]);
                visited.push([x1, y1, x2, y2]);
            }
        }
    }
    return answer;

}

function next(pos, board) {
    let next_pos = [];
    let [x1, y1, x2, y2] = pos;

    let dx = [-1, 1, 0, 0];
    let dy = [0, 0, -1, 1];


    for (let i = 0; i < 4; i++) {
        let [next_x1, next_y1, next_x2, next_y2] = [x1 + dx[i], y1 + dy[i], x2 + dx[i], y2 + dy[i]];
        if (board[next_x1][next_y1] === 0 && board[next_x2][next_y2] === 0) {
            next_pos.push([next_x1, next_y1, next_x2, next_y2]);
        }
    }

    if (x1 === x2) {
        for (let i of [-1, 1]) {
            if (board[x1 + i][y1] === 0 && board[x2 + i][y2] === 0) {
                next_pos.push([x1, y1, x1 + i, y1]);
                next_pos.push([x2, y2, x2 + i, y2]);
            }
        }
    }

    if (y1 === y2) {
        for (let i of [-1, 1]) {
            if (board[x1][y1 + i] === 0 && board[x2][y2 + i] === 0) {
                next_pos.push([x1, y1, x1, y1 + i]);
                next_pos.push([x2, y2, x2, y2 + i]);
            }
        }
    }
    return next_pos;

}