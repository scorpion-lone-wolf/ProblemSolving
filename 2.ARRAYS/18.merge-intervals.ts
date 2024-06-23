// * https://leetcode.com/problems/merge-intervals/

function merge(intervals: number[][]): number[][] {
  const n = intervals.length;
  if (n == 1) return intervals;
  intervals.sort(function (a: number[], b: number[]) {
    return a[0] - b[0];
  });
  const output = [intervals[0]];

  for (let i = 1; i < n; ++i) {
    let first = output[output.length - 1];
    let second = intervals[i];

    // no matched intervals
    if (first[1] < second[0] && first[1] < second[1]) {
      output.push(intervals[i]);
    } else {
      let value = [
        Math.min(first[0], second[0]),
        Math.max(first[1], second[1]),
      ];
      output.pop();
      output.push(value);
    }
  }
  return output;
}
