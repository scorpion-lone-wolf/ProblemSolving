//  * https://leetcode.com/problems/median-of-two-sorted-arrays/description/

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const n1 = nums1.length;
  const n2 = nums2.length;
  if (n1 > n2) return findMedianSortedArrays(nums2, nums1);
  let low = 0;
  let high = n1;

  // [1,2,4,5,| 8,9,11,12] Here we have even number so partition will be at after 3rd index median = value at(3rd +4th)/2;
  //  +1 is to taccle odd length as this will make the median value to to on left side as well if is odd length
  let leftElement = Math.floor((n1 + n2 + 1) / 2);
  while (low <= high) {
    const mid1 = Math.floor((low + high) / 2);
    let l1 = mid1 - 1 >= 0 ? nums1[mid1 - 1] : Number.MIN_SAFE_INTEGER;
    let r1 = mid1 < n1 ? nums1[mid1] : Number.MAX_SAFE_INTEGER;

    const mid2 = leftElement - mid1;
    let l2 = mid2 - 1 >= 0 ? nums2[mid2 - 1] : Number.MIN_SAFE_INTEGER;
    let r2 = mid2 < n2 ? nums2[mid2] : Number.MAX_SAFE_INTEGER;

    if (l1 <= r2 && l2 <= r1) {
      // we found the intersection point
      // now we have to decide the median based on odd or even length
      if ((n1 + n2) % 2 == 0) {
        return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
      }
      return Math.max(l1, l2);
    } else if (l1 > r2) {
      high = mid1 - 1;
    } else {
      low = mid1 + 1;
    }
  }
  return -1;
}
