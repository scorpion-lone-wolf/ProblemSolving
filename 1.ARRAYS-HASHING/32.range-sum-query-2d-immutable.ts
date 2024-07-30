class NumMatrix {
    private sumMat
    constructor(matrix: number[][]) {
        const rows = matrix.length, cols = matrix[0].length
        this.sumMat = new Array(rows + 1).fill(null).map(() => new Array(cols + 1).fill(0))
        for (let i = 0; i < rows; i++) {
            let prefixSum = 0
            for (let j = 0; j < cols; j++) {
                prefixSum += matrix[i][j]
                const above = this.sumMat[i][j + 1]
                this.sumMat[i + 1][j + 1] = prefixSum + above
            }
        }
        console.log(this.sumMat)
    }

    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        row1++
        col1++
        row2++
        col2++

        return this.sumMat[row2][col2] - (this.sumMat[row1 - 1][col2] + this.sumMat[row2][col1 - 1]) + this.sumMat[row1 - 1][col1 - 1]
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */