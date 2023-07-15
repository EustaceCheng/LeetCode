/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    let colorMap = { 1: 0, 2: 0, 0: 0 }
    for (let i = 0; i < nums.length ; i++) {
        colorMap[nums[i]]++
    }
    
    for (let i = 0; i < nums.length ; i++) {
        if (i < colorMap[0]) {
            nums[i] = 0
        } else if (i <colorMap[0]+ colorMap[1]) {
            nums[i] = 1
        } else {
            nums[i] = 2
        }
    }
};