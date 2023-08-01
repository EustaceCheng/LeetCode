function generate(numRows: number): number[][] {
    let ans: number[][] = [[1]]
    if (numRows === 1) return ans;

    ans.push([1, 1])
    if (numRows === 2) return ans;

    for (let i = 2; i < numRows; i++) {
        let layer: number[] = [1]
        for (let j = 1; j < i; j++) {
            layer[j] = ans[i - 1][j - 1] + ans[i - 1][j]
        }
        layer.push(1)
        ans.push(layer)
    }

    return ans
};