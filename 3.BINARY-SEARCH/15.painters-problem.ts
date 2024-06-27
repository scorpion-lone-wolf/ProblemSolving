// * https://www.geeksforgeeks.org/problems/the-painters-partition-problem1535/1
class PaintersSolution {
  minTime(arr: number[], n: number, k: number) {
    // code here
    let start = Math.max(...arr);
    let end = arr.reduce((acc, ele) => (acc += ele), 0);
    let ans = -1;
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);

      const canPaint = this.willBeAbleToPaint(arr, mid, k);
      // console.log(start,mid,end,canPaint)
      if (canPaint) {
        ans = mid;
        end = mid - 1;
      } else start = mid + 1;
    }
    return ans;
  }
  willBeAbleToPaint(arr: number[], totalTime: number, k: number) {
    let timeTaken = 0;
    for (let i = 0; i < arr.length; ++i) {
      timeTaken += arr[i];
      if (timeTaken >= totalTime) {
        if (timeTaken == totalTime) {
          timeTaken = 0;
        } else {
          timeTaken = arr[i];
        }
        k--;
      }
    }
    // console.log("here: ",k)
    if (timeTaken > 0) k--;

    return k >= 0 ? true : false;
  }
}
