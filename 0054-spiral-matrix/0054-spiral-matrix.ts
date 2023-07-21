function spiralOrder(matrix: number[][]): number[] {

    const columnLength = matrix.length;
    const rowLength = matrix[0].length;
    const size = rowLength * columnLength;

    let ans = []
    let current = 0;
    let rowStart = 0;
    let rowEnd = columnLength - 1;
    let columnStart = 0;
    let columnEnd = rowLength - 1;

    while (current < size) {
        // right
        for (let i = columnStart; current < size && i <= columnEnd; i++, current++)
            ans.push(matrix[rowStart][i])
        rowStart++
        // down
        for (let i = rowStart; current < size && i <= rowEnd; i++, current++)
            ans.push(matrix[i][columnEnd])
        columnEnd--
        // left

        for (let i = columnEnd; current < size && i >= columnStart; i--, current++)
        ans.push(matrix[rowEnd][i])
        rowEnd--
        // up
        for (let i = rowEnd; current < size && i >= rowStart; i--, current++)
            ans.push(matrix[i][columnStart])
        columnStart++
    }
    return ans



}