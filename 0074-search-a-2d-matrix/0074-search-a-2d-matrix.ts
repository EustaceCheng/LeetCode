function searchMatrix(matrix: number[][], target: number): boolean {

    const m = matrix.length
    const n = matrix[0].length

    for (let i = 0; i < m; i++) {
        if (matrix[i][0] <= target && matrix[i][n - 1] >= target) {
            for (let j = 0; j < n; j++) {
                if (matrix[i][j] === target) return true
            }
        }

    }
    
    return false
};