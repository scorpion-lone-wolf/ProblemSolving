function isValidSudokuSol1(board: string[][]): boolean {

    const row = board.length;
    const col = board[0].length;

    // * will check if value is seen in particular row or not
    const rowArraySet = new Array(row + 1).fill(null).map((ele) => new Set());
    // * will check if value is seen in particular col or not
    const colArraySet = new Array(col + 1).fill(null).map((ele) => new Set());
    // * will check if value is seen in which 3x3 box
    const square = new Map();
    for (let i = 0; i < row; ++i) {
        for (let j = 0; j < col; ++j) {
            if (board[i][j] == '.') continue;
            const rowBox = Math.floor(i / 3);
            const colBox = Math.floor(j / 3);

            if (rowArraySet[i].has(board[i][j]) || colArraySet[j].has(board[i][j]) || square.get(`${rowBox}-${colBox}`)?.has(board[i][j])) return false;
            rowArraySet[i].add(board[i][j]);
            colArraySet[j].add(board[i][j]);
            if (square.get(`${rowBox}-${colBox}`))
                square.set(`${rowBox}-${colBox}`, square.get(`${rowBox}-${colBox}`).add(board[i][j]));
            else
                square.set(`${rowBox}-${colBox}`, new Set([board[i][j]]));

        }

    }
    return true;

};
//  --------------------------------------------------------------------------------------------------------------------------------

function isValidSudokuSol2(board: string[][]): boolean {
    const seen = new Set();

    for (let i = 0; i < 9; ++i) {
        for (let j = 0; j < 9; ++j) {
            if (board[i][j] == '.') continue;
            const value = board[i][j];
            const rowBox = Math.floor(i / 3);
            const colBox = Math.floor(j / 3);
            if (seen.has(`${value} in row ${i}`) || seen.has(`${value} in col ${j}`) || seen.has(`${value} in box ${rowBox}-${colBox}`)) return false;
            seen.add(`${value} in row ${i}`);
            seen.add(`${value} in col ${j}`);
            seen.add(`${value} in box ${rowBox}-${colBox}`)
        }
    }
    return true;
}