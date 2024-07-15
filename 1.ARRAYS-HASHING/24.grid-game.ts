function gridGame(grid: number[][]): number {
    let prefixSumR1 = 0
    let prefixSumR2 = 0

    let points = Number.MAX_SAFE_INTEGER
    const n = grid[0].length
    for (let i = 0; i < n; i++) {
        prefixSumR1 += grid[0][i];
    }


    let partition = 0

    while (partition < n) {
        prefixSumR1 -= grid[0][partition]
        points = Math.min(points, Math.max(prefixSumR1, prefixSumR2))
        prefixSumR2 += grid[1][partition]
        partition++
    }
    return points
};