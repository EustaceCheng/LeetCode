function maxProduct(nums: number[]): number {
let res = nums[0];
  let max = nums[0];
  let min = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const cur = nums[i];
    const tempMax = max;
    max = Math.max(cur,cur * max, cur * min);
    min = Math.min(cur, cur *min, cur * tempMax);
    res = Math.max(res, max);
  }
  return res;
};