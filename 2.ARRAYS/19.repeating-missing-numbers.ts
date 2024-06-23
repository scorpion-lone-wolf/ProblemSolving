//  * https://www.geeksforgeeks.org/problems/find-missing-and-repeating2512/1

class Solution {
  //Function to find two repeating elements in an array of size n.
  findTwoElement(nums, n) {
    //your code here
    let xor = 0;

    // * step1: xor all the array values with each other and from 1 to n(included)
    // This will give the xor of x^y = missing number ^ repeating number
    for (let i = 0; i < n; ++i) {
      xor ^= i + 1;
      xor ^= nums[i];
    }

    // * Step2: Find the differentiating bit
    let diffBit = 0;

    while (xor != 0 && (xor & 1) == 0) {
      xor = xor >> 1;
      diffBit++;
    }

    // *Step3 : segregate the elements into two block depending on there value at diffBit
    let zeroBlock = 0;
    let oneBlock = 0;

    for (let i = 0; i < n; ++i) {
      if (((i + 1) & (1 << diffBit)) == 0) {
        zeroBlock ^= i + 1;
      } else {
        oneBlock ^= i + 1;
      }
      if ((nums[i] & (1 << diffBit)) == 0) {
        zeroBlock ^= nums[i];
      } else {
        oneBlock ^= nums[i];
      }
    }

    // *step4: confirm which element is repeated and which is missing
    for (let i = 0; i < n; ++i) {
      if (nums[i] == zeroBlock) {
        return [zeroBlock, oneBlock];
      }
    }
    return [oneBlock, zeroBlock];
  }
}
