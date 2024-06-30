function containsDuplicate(nums: number[]): boolean {
  // Using sorting

  // nums.sort((a,b)=>a-b);

  // const n = nums.length;

  // for(let i = 1; i < n; ++i){
  //     if(nums[i]==nums[i-1])return true;
  // }
  // return false;

  // Using hashMap

  const map = new Map();

  const n = nums.length;

  for (let i = 0; i < n; ++i) {
    if (map.get(nums[i]) == undefined) map.set(nums[i], 1);
    else return true;
  }

  return false;
}
