function leastBricks(wall: number[][]): number {
    const n = wall.length;
    const countGap = new Map();

    for (let i = 0; i < n; ++i) {
        let sum = 0;
        for (let j = 0; j < wall[i].length - 1; ++j) {
            sum += wall[i][j];
            if (countGap.get(sum)) {
                countGap.set(sum, countGap.get(sum) + 1);
            } else {
                countGap.set(sum, 1);
            }
        }
    }
    let minCut = 0;

    for (let value of countGap.values()) {
        minCut = Math.max(minCut, value)
    }
    return n - minCut;

};