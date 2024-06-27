//  * https://www.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1

class BookAllocation {
  //Function to find minimum number of pages.
  findPages(arr: number[], n: number, m: number) {
    //your code here
    if (m > n) return -1;
    let start = Math.max(...arr);
    let end = arr.reduce((acc, ele) => (acc += ele), 0);
    let ans = -1;
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);

      let isPossible = this.canAllocate(arr, mid, n, m);
      // console.log(start,mid,end,isPossible);

      if (isPossible) {
        ans = mid;
        end = mid - 1;
      } else start = mid + 1;
    }
    return ans;
  }
  canAllocate(arr: number[], allocatedPages: number, n: number, m: number) {
    let pages = 0;
    for (let i = 0; i < n; ++i) {
      pages += arr[i];
      if (pages >= allocatedPages) {
        if (pages > allocatedPages) pages = arr[i];
        else pages = 0;
        m--;
      }
    }
    if (pages > 0) m--;

    return m >= 0 ? true : false;
  }
}
