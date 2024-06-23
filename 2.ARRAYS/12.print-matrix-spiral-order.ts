// * https://leetcode.com/problems/spiral-matrix/description/

function spiralOrder(matrix: number[][]): number[] {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let top = 0,
    left = 0;
  let right = cols - 1,
    bottom = rows - 1;

  const output: number[] = [];
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; ++i) {
      output.push(matrix[top][i]);
    }
    top++;

    if (top > bottom) break;

    for (let i = top; i <= bottom; ++i) {
      output.push(matrix[i][right]);
    }
    right--;

    if (left > right) break;
    for (let i = right; i >= left; --i) {
      output.push(matrix[bottom][i]);
    }
    bottom--;

    for (let i = bottom; i >= top; --i) {
      output.push(matrix[i][left]);
    }
    left++;
  }
  return output;
}
