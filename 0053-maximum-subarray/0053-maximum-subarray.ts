function maxSubArray(nums: number[]): number {
    let max = nums[0]
    let accu = nums[0]
    for(let i = 1 ; i<nums.length; i++){
        accu = Math.max(accu+nums[i],nums[i])
        max = Math.max(accu,max)
        
    }
    return max
};