//  * https://www.geeksforgeeks.org/problems/aggressive-cows/0
class Cows {
  //Function to solve the problem.
  solve(n: number, k: number, stalls: number[]) {
    //your code here
    stalls.sort((a, b) => a - b);
    let start = 1;
    let end = Math.max(...stalls) - Math.min(...stalls);
    let ans = 1;
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);

      const isPossible = this.ableToPlace(stalls, mid, k);

      if (isPossible) {
        ans = mid;
        start = mid + 1;
      } else end = mid - 1;
    }
    return ans;
  }
  ableToPlace(stalls: number[], mid: number, k: number) {
    let placed = 0;
    k--;
    for (let i = 1; i < stalls.length; ++i) {
      if (stalls[i] - stalls[placed] >= mid) {
        placed = i;
        k--;
      }
    }
    return k <= 0 ? true : false;
  }
}
