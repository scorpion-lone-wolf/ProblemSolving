// * https://leetcode.com/problems/set-matrix-zeroes/description/
function setZeroes(matrix: number[][]): void {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let tempRowIndicator = 1;
  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      if (i == 0) {
        if (matrix[i][j] == 0) {
          tempRowIndicator = 0;
        }
      } else {
        if (matrix[i][j] == 0) {
          matrix[0][j] = 0;
          matrix[i][0] = 0;
        }
      }
    }
  }
  for (let i = rows - 1; i >= 0; --i) {
    for (let j = cols - 1; j >= 0; --j) {
      if (i == 0) {
        if (tempRowIndicator == 0) matrix[i][j] = 0;
      } else {
        if (matrix[i][0] == 0 || matrix[0][j] == 0) {
          matrix[i][j] = 0;
        }
      }
    }
  }
}
