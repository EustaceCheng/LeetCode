function triangularSum(nums: number[]): number {
    let l = nums.length
    while (l > 0) {
        for (let i = 0; i < l - 1; i++) {
            nums[i] = (nums[i] + nums[i + 1]) % 10
     
            
        }
        if(nums.length>1)nums.pop()

        l--
    }
    return nums[0]
};