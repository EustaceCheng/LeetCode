function maxProduct(nums: number[]): number {
  let res = nums[0];
  let min = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const tempMax = max;
    const curr = nums[i];

    max = Math.max(curr, curr * max, curr * min);
    min = Math.min(curr, curr * tempMax, curr * min);

    res = Math.max(res, max);
  }
  return res;
}