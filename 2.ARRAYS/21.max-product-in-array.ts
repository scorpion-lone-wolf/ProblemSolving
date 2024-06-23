// * https://leetcode.com/problems/maximum-product-subarray/description/
function maxProduct(nums: number[]): number {
  let prefixProduct = 1;
  let suffixProduct = 1;
  let maxProd = nums[0];
  const n = nums.length;

  for (let i = 0, j = n - 1; i < n && j >= 0; i++, j--) {
    prefixProduct *= nums[i];
    suffixProduct *= nums[j];
    maxProd = Math.max(prefixProduct, maxProd);
    maxProd = Math.max(suffixProduct, maxProd);
    if (nums[i] == 0) prefixProduct = 1;
    if (nums[j] == 0) suffixProduct = 1;
  }
  return maxProd;
}
