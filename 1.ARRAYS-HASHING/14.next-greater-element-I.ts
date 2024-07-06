function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const n1 = nums1.length;
  const n2 = nums2.length;
  const output = new Array(n1).fill(-1);
  const stack: number[] = [];
  const map = new Map();
  for (let i = 0; i < n1; ++i) {
    map.set(nums1[i], i);
  }
  let i = 0;

  while (i < n2) {
    if (stack.length == 0 || stack[stack.length - 1] > nums2[i]) {
      stack.push(nums2[i]);
      i++;
    } else {
      while (stack.length > 0 && stack[stack.length - 1] < nums2[i]) {
        let ele = stack.pop();
        if (map.get(ele) != undefined) {
          output[map.get(ele)] = nums2[i];
        }
      }
      stack.push(nums2[i]);
      i++;
    }
  }
  return output;
}
